"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Star,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Copy,
  Check,
  Lock,
} from "lucide-react";
import { ALL_FORM_SERVICES } from "@/data/formServices";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RATING_LABELS: Record<number, string> = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Loved it — Highly Recommended",
};

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [service, setService] = useState<string>("UAE Corporate Tax");
  const [highlightTitle, setHighlightTitle] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [honeypot, setHoneypot] = useState<string>("");
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [submittedRef, setSubmittedRef] = useState<string>("");
  const [copiedRef, setCopiedRef] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFormLoadTime(Date.now());
      setErrorMsg("");
    }
  }, [isOpen]);

  // Lock background body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeRating = hoverRating || rating;

  const handleCopyRef = () => {
    if (!submittedRef) return;
    navigator.clipboard.writeText(submittedRef);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const resetForm = () => {
    setRating(5);
    setHoverRating(0);
    setService("UAE Corporate Tax");
    setHighlightTitle("");
    setQuote("");
    setName("");
    setCompany("");
    setRole("");
    setContact("");
    setErrorMsg("");
    setSubmittedRef("");
    setFormLoadTime(Date.now());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || name.trim().length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!contact.trim()) {
      setErrorMsg("Please enter your email or phone number for verification.");
      return;
    }
    if (!quote.trim() || quote.trim().length < 10) {
      setErrorMsg(
        "Please share a brief description of your experience (min 10 characters).",
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          company,
          role,
          service,
          rating,
          highlightTitle,
          quote,
          honeypot,
          formLoadTime: formLoadTime || Date.now() - 3000,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit review.");
      }

      setSubmittedRef(data.referenceId || "REV-2026-000001");
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-[#071426]/75 backdrop-blur-xs overscroll-contain animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-[#071426] max-h-[90vh] flex flex-col overscroll-contain">
        {/* Google-Review-Style Header Bar */}
        <div
          onWheel={(e) => {
            if (scrollRef.current) scrollRef.current.scrollTop += e.deltaY;
          }}
          className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F8FAFC] shrink-0 select-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#216D56] text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs">
              A
            </div>
            <div>
              <h3
                id="review-modal-title"
                className="text-sm sm:text-base font-semibold text-[#071426] leading-tight"
              >
                Auditclue Global Advisory Services LLC
              </h3>
              <p className="text-[11px] text-[#64748B] flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3 h-3 text-[#36A783]" />
                <span>
                  Verified Client Review • Published after team approval
                </span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close review modal"
            className="w-8 h-8 rounded-full hover:bg-slate-200/70 text-[#64748B] hover:text-[#071426] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          tabIndex={0}
          className="p-5 sm:p-6 overflow-y-auto flex-1 min-h-0 overscroll-contain focus:outline-none"
        >
          {!submittedRef ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot Anti-Spam */}
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* 1. Google-Style Interactive Star Rating */}
              <div className="text-center py-2">
                <div className="text-xs font-medium text-[#475569] mb-2">
                  Tap a star to rate your experience
                </div>
                <div
                  className="inline-flex items-center justify-center gap-2 sm:gap-3"
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((starValue) => {
                    const filled = starValue <= activeRating;
                    return (
                      <button
                        key={starValue}
                        type="button"
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHoverRating(starValue)}
                        aria-label={`Rate ${starValue} out of 5 stars`}
                        className="p-1 transition-transform hover:scale-115 active:scale-95 cursor-pointer"
                      >
                        <Star
                          className={`w-9 h-9 sm:w-10 sm:h-10 transition-colors ${
                            filled
                              ? "text-[#FBBC04] fill-[#FBBC04]"
                              : "text-slate-300 fill-transparent"
                          }`}
                          strokeWidth={1.6}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="mt-1.5 text-xs font-semibold text-[#216D56]">
                  {RATING_LABELS[activeRating]} ({activeRating}/5)
                </div>
              </div>

              {/* 2. Google-Style Service Pills ("What service did you use?") */}
              <div>
                <label className="block text-xs font-semibold text-[#071426] mb-2">
                  Which advisory practice did you work with?
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_FORM_SERVICES.slice(0, 7).map((srv) => {
                    const selected = service === srv.title;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setService(srv.title)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-all cursor-pointer ${
                          selected
                            ? "bg-[#EAF4F0] border-[#36A783] text-[#216D56] font-semibold shadow-2xs"
                            : "bg-white border-slate-200 text-[#475569] hover:border-slate-300"
                        }`}
                      >
                        {srv.title}
                      </button>
                    );
                  })}
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    aria-label="Select other service"
                    className="px-3 py-1.5 rounded-full text-[11px] font-medium border border-slate-200 bg-[#F8FAFC] text-[#334155] focus:outline-none focus:border-[#36A783] cursor-pointer"
                  >
                    {ALL_FORM_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Experience Textarea & Optional Headline */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#071426] mb-1">
                    Share details of your own experience *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="How was the communication, turnaround speed, and compliance quality with our team?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm bg-white focus:outline-none focus:border-[#36A783] focus:ring-2 focus:ring-[#36A783]/15 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#071426] mb-1">
                    Headline Summary{" "}
                    <span className="text-[#64748B] font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={highlightTitle}
                    onChange={(e) => setHighlightTitle(e.target.value)}
                    placeholder="e.g. Smooth UAE Corporate Tax filing with zero hassle"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
                  />
                </div>
              </div>

              {/* 4. Lightweight Verification Layer (Name + Email/Phone + Company) */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#071426] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#071426] mb-1">
                      Email or Phone (Private Verification) *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="you@company.ae or +971 50..."
                      className="w-full px-3.5 py-2 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#071426] mb-1">
                      Company Name{" "}
                      <span className="text-[#64748B] font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Horizon Trading LLC"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#071426] mb-1">
                      Role / Title{" "}
                      <span className="text-[#64748B] font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Managing Director"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 text-[11px] text-[#64748B] bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/80">
                  <Lock className="w-3.5 h-3.5 text-[#36A783] shrink-0 mt-0.5" />
                  <span>
                    Your email/phone is strictly used by Auditclue to verify
                    your engagement and will <strong>never</strong> be published
                    publicly.
                  </span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#475569] hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#216D56] hover:bg-[#1a5744] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Post Review</span>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation View with Tracking Reference ID */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#EAF4F0] text-[#36A783] flex items-center justify-center mx-auto border-2 border-[#36A783]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#071426] mb-1.5">
                  Thank You for Reviewing Auditclue!
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  Your feedback has been submitted to our verification desk.
                  Once approved by our team, it will appear in the Verified
                  Client Reviews section.
                </p>
              </div>

              <div className="max-w-xs mx-auto p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">
                    Review Reference ID
                  </div>
                  <div className="text-sm font-mono font-bold text-[#216D56]">
                    {submittedRef}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyRef}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#36A783] text-[11px] font-mono text-[#071426] cursor-pointer"
                >
                  {copiedRef ? (
                    <>
                      <Check className="w-3 h-3 text-[#36A783]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#071426] text-white text-xs font-semibold hover:bg-[#1e293b] transition-colors cursor-pointer"
                >
                  Done
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs font-medium text-[#64748B] hover:text-[#071426] underline cursor-pointer"
                >
                  Submit Another Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
