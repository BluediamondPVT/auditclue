import { NextResponse } from "next/server";
import {
  escapeHtml,
  formatDubaiTimestamp,
  generateReferenceId,
  sendMail,
} from "@/lib/mailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "AC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      contact,
      company,
      role,
      location,
      service,
      rating,
      highlightTitle,
      quote,
      honeypot,
      formLoadTime,
    } = body;

    // 1. Anti-Spam: Honeypot trap
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json(
        { error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    // 2. Anti-Spam: Timing velocity check
    if (formLoadTime) {
      const elapsed = Date.now() - Number(formLoadTime);
      if (elapsed < 1200) {
        return NextResponse.json(
          { error: "Submission too rapid. Please review your feedback before posting." },
          { status: 400 }
        );
      }
    }

    // 3. Field Validations
    const cleanName = String(name || "").trim();
    if (cleanName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const cleanContact = String(contact || "").trim();
    const contactDigits = cleanContact.replace(/\D/g, "");
    const isEmail = EMAIL_REGEX.test(cleanContact);
    const isPhone = contactDigits.length >= 7;

    if (!cleanContact || (!isEmail && !isPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid work email or phone number for verification." },
        { status: 400 }
      );
    }

    const numericRating = Number(rating);
    if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
      return NextResponse.json(
        { error: "Please select a star rating between 1 and 5." },
        { status: 400 }
      );
    }

    const cleanQuote = String(quote || "").trim();
    if (cleanQuote.length < 10) {
      return NextResponse.json(
        { error: "Please share a brief description of your experience (minimum 10 characters)." },
        { status: 400 }
      );
    }

    const cleanCompany = String(company || "").trim() || "Verified UAE Client";
    const cleanRole = String(role || "").trim() || "Client";
    const cleanLocation = String(location || "").trim() || "Dubai, UAE";
    const cleanService = String(service || "").trim() || "General Advisory";
    const cleanTitle =
      String(highlightTitle || "").trim() ||
      `${cleanService} Experience`;

    // 4. Generate Tracking Reference ID & Dubai Timestamp
    const referenceId = generateReferenceId("REV");
    const timestamp = formatDubaiTimestamp();
    const starsVisual = "★".repeat(numericRating) + "☆".repeat(5 - numericRating);

    const readySnippet = JSON.stringify(
      {
        id: referenceId.toLowerCase(),
        name: cleanName,
        role: cleanRole,
        company: cleanCompany,
        location: cleanLocation,
        initials: buildInitials(cleanName),
        rating: numericRating,
        highlightTitle: cleanTitle,
        quote: cleanQuote,
        service: cleanService,
        date: `Verified Review • ${timestamp.split(",")[0] || "2026"}`,
      },
      null,
      2
    );

    // 5. Dispatch Notification Email (Auditclue To + Team CC)
    const reviewTo = (
      process.env.REVIEW_TO_EMAIL ||
      process.env.NOTIFICATION_EMAIL ||
      "info@auditclue.com"
    ).trim();
    const reviewCc = (
      process.env.REVIEW_CC_EMAIL ||
      process.env.NOTIFICATION_CC_EMAIL ||
      ""
    ).trim();

    const mailResult = await sendMail({
      to: reviewTo,
      cc: reviewCc || undefined,
      replyTo: isEmail ? cleanContact : undefined,
      subject: `[${referenceId}] New Client Review (${numericRating}★) — Reply ADD or SKIP`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #071426; max-width: 640px; line-height: 1.6;">
          <div style="background: #071426; color: #ffffff; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <div style="font-size: 12px; color: #83D9BE; font-weight: bold; letter-spacing: 1px;">
              AUDITCLUE CLIENT REVIEW SUBMISSION
            </div>
            <h2 style="margin: 6px 0 0; font-size: 20px;">
              Reference: ${escapeHtml(referenceId)} &nbsp;|&nbsp; <span style="color: #FBBC04;">${escapeHtml(starsVisual)}</span> (${numericRating}/5)
            </h2>
          </div>

          <div style="border: 1px solid #CBD5E1; border-top: none; padding: 24px; border-radius: 0 0 12px 12px; background: #ffffff;">
            <div style="background: #EAF4F0; border: 1px solid #36A783; border-radius: 8px; padding: 14px 16px; margin-bottom: 20px;">
              <strong style="color: #216D56;">Approval Action Required:</strong><br/>
              Reply directly to this email thread with <strong>ADD</strong> to publish this review on the Auditclue website, or <strong>SKIP</strong> to discard it.
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 18px;">
              <tr>
                <td style="padding: 6px 0; color: #64748B; width: 160px;"><strong>Reference ID:</strong></td>
                <td style="padding: 6px 0; font-weight: bold;">${escapeHtml(referenceId)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748B;"><strong>Reviewer Name:</strong></td>
                <td style="padding: 6px 0;">${escapeHtml(cleanName)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748B;"><strong>Verification Contact:</strong></td>
                <td style="padding: 6px 0; color: #216D56; font-weight: bold;">${escapeHtml(cleanContact)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748B;"><strong>Company / Role:</strong></td>
                <td style="padding: 6px 0;">${escapeHtml(cleanRole)} — ${escapeHtml(cleanCompany)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748B;"><strong>Service / Practice:</strong></td>
                <td style="padding: 6px 0;">${escapeHtml(cleanService)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748B;"><strong>Location:</strong></td>
                <td style="padding: 6px 0;">${escapeHtml(cleanLocation)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748B;"><strong>Submitted (UAE):</strong></td>
                <td style="padding: 6px 0;">${escapeHtml(timestamp)} GST</td>
              </tr>
            </table>

            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <div style="font-size: 15px; font-weight: bold; margin-bottom: 6px;">"${escapeHtml(cleanTitle)}"</div>
              <div style="font-size: 14px; color: #334155;">${escapeHtml(cleanQuote)}</div>
            </div>

            <details style="font-size: 12px; color: #475569;">
              <summary style="cursor: pointer; font-weight: bold; color: #216D56;">Developer Publish Snippet (Copy-Paste once approved with ADD)</summary>
              <pre style="background: #0F172A; color: #E2E8F0; padding: 12px; border-radius: 8px; overflow-x: auto; margin-top: 8px;">${escapeHtml(readySnippet)}</pre>
            </details>
          </div>
        </div>
      `,
    });

    if (mailResult.sent) {
      console.log(
        `[Review Submission] ${referenceId} emailed via ${mailResult.provider} to ${reviewTo}${reviewCc ? ` (CC: ${reviewCc})` : ""}`
      );
    } else {
      console.log(`[Review Submission Logged] ${referenceId} (Mail status: ${mailResult.error})`, {
        referenceId,
        name: cleanName,
        contact: cleanContact,
        rating: numericRating,
        service: cleanService,
        quote: cleanQuote,
      });
    }

    return NextResponse.json({
      success: true,
      referenceId,
      timestamp: `${timestamp} GST`,
      message:
        "Thank you! Your review has been logged for verification and will appear once approved.",
    });
  } catch (err: unknown) {
    console.error("[Reviews API Error]:", err);
    return NextResponse.json(
      { error: "Unable to submit review right now. Please try again shortly." },
      { status: 500 }
    );
  }
}

