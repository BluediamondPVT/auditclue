import nodemailer from "nodemailer";

export interface SendMailOptions {
  to: string | string[];
  cc?: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}

export interface SendMailResult {
  sent: boolean;
  provider: "smtp" | "resend" | "none";
  error?: string;
}

function normalizeEmailList(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) {
    return input.map((v) => v.trim()).filter(Boolean);
  }
  return input
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

/**
 * Escapes HTML special characters to prevent markup injection in email templates.
 */
export function escapeHtml(val: unknown): string {
  return String(val ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Generates a timestamp string in Gulf Standard Time (Asia/Dubai).
 */
export function formatDubaiTimestamp(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dubai",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

/**
 * Generates a unique prefixed reference ID, e.g. AC-2026-482910 or REV-2026-482910.
 */
export function generateReferenceId(prefix: "AC" | "REV"): string {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${new Date().getFullYear()}-${randomDigits}`;
}

/**
 * Sends a transactional email using SMTP (Nodemailer) if configured,
 * falling back to the Resend REST API if RESEND_API_KEY is configured.
 */
export async function sendMail(
  options: SendMailOptions,
): Promise<SendMailResult> {
  const toList = normalizeEmailList(options.to);
  const ccList = normalizeEmailList(options.cc);

  if (toList.length === 0) {
    return {
      sent: false,
      provider: "none",
      error: "No recipient email specified.",
    };
  }

  const smtpUser = (process.env.SMTP_USER || "").trim();
  const smtpPass = (process.env.SMTP_PASS || "").trim();
  const smtpHost = (process.env.SMTP_HOST || "").trim();
  const smtpService = (process.env.SMTP_SERVICE || "").trim();
  const fromEmail = (
    process.env.NOTIFICATION_FROM_EMAIL ||
    (smtpUser
      ? `Auditclue Advisory <${smtpUser}>`
      : "Auditclue Advisory <noreply@auditclue.com>")
  ).trim();

  // 1. Primary: SMTP via Nodemailer (supports Gmail/Zoho/Outlook/cPanel)
  if (smtpUser && smtpPass && (smtpHost || smtpService)) {
    try {
      const port = Number(process.env.SMTP_PORT || 465);
      const secure =
        process.env.SMTP_SECURE !== undefined
          ? process.env.SMTP_SECURE === "true"
          : port === 465;

      const transporter = nodemailer.createTransport(
        smtpService
          ? {
              service: smtpService,
              auth: { user: smtpUser, pass: smtpPass },
            }
          : {
              host: smtpHost,
              port,
              secure,
              auth: { user: smtpUser, pass: smtpPass },
            },
      );

      await transporter.sendMail({
        from: fromEmail,
        to: toList,
        cc: ccList.length > 0 ? ccList : undefined,
        replyTo: options.replyTo,
        subject: options.subject,
        html: options.html,
      });

      return { sent: true, provider: "smtp" };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "SMTP send failed";
      console.error("[Mailer SMTP Error]:", message);
      return { sent: false, provider: "smtp", error: message };
    }
  }

  // 2. Fallback: Resend REST API
  const resendApiKey = (process.env.RESEND_API_KEY || "").trim();
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: toList,
          cc: ccList.length > 0 ? ccList : undefined,
          reply_to: options.replyTo,
          subject: options.subject,
          html: options.html,
        }),
      });

      if (res.ok) {
        return { sent: true, provider: "resend" };
      }
      const errBody = await res.text().catch(() => "");
      console.error(`[Mailer Resend Error] HTTP ${res.status}: ${errBody}`);
      return {
        sent: false,
        provider: "resend",
        error: `HTTP ${res.status}: ${errBody}`,
      };
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Resend request failed";
      console.error("[Mailer Resend Exception]:", message);
      return { sent: false, provider: "resend", error: message };
    }
  }

  return {
    sent: false,
    provider: "none",
    error: "No SMTP or Resend credentials configured in environment variables.",
  };
}
