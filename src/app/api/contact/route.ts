import { NextResponse } from "next/server";
import {
  escapeHtml,
  formatDubaiTimestamp,
  generateReferenceId,
  sendMail,
} from "@/lib/mailer";

// Valid services list to cross-check against manipulation
const VALID_SERVICES = [
  "Business Setup & Formation",
  "UAE Corporate Tax",
  "Statutory Audit & Assurance",
  "UAE VAT Services",
  "Virtual CFO Advisory",
  "Accounting & Bookkeeping",
  "Transfer Pricing",
  "Corporate Finance",
  "Business Advisory",
  "Compliance Services",
  "Technology & Digital Finance",
  "Other Advisory Requirements",
  // Legacy & slug variants
  "UAE Corporate Tax (9%)",
  "UAE VAT Services (5%)",
  "Virtual CFO & Finance Advisory",
  "Compliance Services (AML/UBO)",
  "Other / General Enquiry",
  "business-setup",
  "corporate-tax",
  "audit-assurance",
  "vat-services",
  "cfo-advisory",
  "accounting-bookkeeping",
  "transfer-pricing",
  "corporate-finance",
  "business-advisory",
  "compliance-services",
  "technology-digital",
  "other",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      mobile,
      service,
      notes,
      consent,
      honeypot,
      formLoadTime,
    } = body;

    // 1. Anti-Spam Check: Honeypot trap
    if (honeypot && String(honeypot).trim() !== "") {
      // Silently reject bot
      return NextResponse.json(
        { error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    // 2. Anti-Spam Check: Velocity / timing check (bots fill in < 1200ms)
    if (formLoadTime) {
      const elapsed = Date.now() - Number(formLoadTime);
      if (elapsed < 1200) {
        return NextResponse.json(
          { error: "Submission too rapid. Please review your details." },
          { status: 400 }
        );
      }
    }

    // 3. Server-side Validation: Required fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Full Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 2) {
      return NextResponse.json(
        { error: "Company Name is required." },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return NextResponse.json(
        { error: "A valid corporate or work email address is required." },
        { status: 400 }
      );
    }

    // Phone / mobile validation (at least 7 digits)
    const digitsOnly = String(mobile || "").replace(/\D/g, "");
    if (!mobile || digitsOnly.length < 7) {
      return NextResponse.json(
        { error: "A valid contact phone or WhatsApp number is required." },
        { status: 400 }
      );
    }

    // Service validation
    if (!service || !VALID_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: "Please select a recognized UAE advisory practice." },
        { status: 400 }
      );
    }

    // Consent check
    if (consent !== true && consent !== "true") {
      return NextResponse.json(
        { error: "You must consent to the privacy policy to proceed." },
        { status: 400 }
      );
    }

    // 4. Generate Official Reference ID & Timestamp (GST • UTC+4)
    const referenceId = generateReferenceId("AC");
    const timestamp = formatDubaiTimestamp();

    // 5. Forward lead to CRM Webhook (server-to-server — never exposed to client browser)
    const crmWebhookUrl = (
      process.env.CRM_LEAD_WEBHOOK_URL ||
      process.env.CRM_WEBHOOK_URL ||
      "https://crm.auditclue.app/webhooks/web-forms/1/M2BqAARVMtsd6yUODM4F4gTVzn0aCYlRZnP1x3Gm"
    ).trim();

    if (crmWebhookUrl) {
      try {
        const formattedRemarks = [
          `Service: ${String(service || "").trim()}`,
          notes && String(notes).trim() ? `Note: ${String(notes).trim()}` : null,
          `Reference ID: ${referenceId}`,
          `Submitted: ${timestamp} GST`,
        ]
          .filter(Boolean)
          .join(" | ");

        const crmPayload = {
          name: String(fullName).trim(),
          phone: String(mobile).trim(),
          email: String(email).trim(),
          company: String(companyName).trim(),
          message: formattedRemarks,
          service: String(service).trim(),
          reference_id: referenceId,
        };

        const crmRes = await fetch(crmWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "Auditclue-Web/1.0",
          },
          body: JSON.stringify(crmPayload),
        });

        if (crmRes.ok) {
          console.log(`[CRM Webhook] Lead synced successfully: ${referenceId} (HTTP ${crmRes.status})`);
        } else {
          const errBody = await crmRes.text().catch(() => "");
          console.error(
            `[CRM Webhook Error] ${referenceId} - HTTP ${crmRes.status}: ${errBody}`
          );
        }
      } catch (crmErr) {
        console.error("[CRM Webhook Forwarding Failed]:", crmErr);
        // We do not fail the client response if the external CRM webhook is temporarily unreachable
      }
    }

    // 6. Send Email Notification via SMTP or Resend (if configured)
    const notifyTo = (process.env.NOTIFICATION_EMAIL || "info@auditclue.com").trim();
    const notifyCc = (process.env.NOTIFICATION_CC_EMAIL || "").trim();

    const mailResult = await sendMail({
      to: notifyTo,
      cc: notifyCc || undefined,
      replyTo: String(email).trim(),
      subject: `[${referenceId}] New Website Enquiry — ${String(service).trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #071426; line-height: 1.6;">
          <h2 style="margin-bottom: 12px; color: #216D56;">New Consultation / Appointment Request (${escapeHtml(referenceId)})</h2>
          <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Company:</strong> ${escapeHtml(companyName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(mobile)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Details:</strong> ${escapeHtml(notes || "None provided")}</p>
          <p><strong>Submitted (UAE):</strong> ${escapeHtml(timestamp)} GST</p>
        </div>
      `,
    });

    if (mailResult.sent) {
      console.log(`[Email Notification] Sent (${mailResult.provider}) for ${referenceId} to ${notifyTo}`);
    }

    console.log(`[Auditclue CRM] Consultation Inquiry Registered: ${referenceId}`, {
      referenceId,
      fullName,
      companyName,
      email,
      mobile,
      service,
      notes: notes || "None provided",
      timestamp: `${timestamp} GST`,
    });

    return NextResponse.json({
      success: true,
      referenceId,
      timestamp: `${timestamp} GST`,
      message:
        "Your consultation request has been successfully registered with our Senior Advisory Desk.",
    });
  } catch (err: unknown) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
