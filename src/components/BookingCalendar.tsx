"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Video,
  Phone,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Loader2,
} from "lucide-react";
import { ALL_FORM_SERVICES } from "@/data/formServices";

interface TimeSlotItem {
  label: string;
  minutesFromMidnight: number;
}

const TIME_SLOTS: TimeSlotItem[] = [
  { label: "09:30 AM GST", minutesFromMidnight: 9 * 60 + 30 },
  { label: "11:00 AM GST", minutesFromMidnight: 11 * 60 },
  { label: "01:30 PM GST", minutesFromMidnight: 13 * 60 + 30 },
  { label: "03:00 PM GST", minutesFromMidnight: 15 * 60 },
  { label: "04:30 PM GST", minutesFromMidnight: 16 * 60 + 30 },
  { label: "05:30 PM GST", minutesFromMidnight: 17 * 60 + 30 },
];

interface BusinessDay {
  dayName: string;
  dateStr: string;
  fullDate: string;
  isToday: boolean;
}

const DEFAULT_DAYS: BusinessDay[] = [
  { dayName: "Today", dateStr: "Today", fullDate: "Today", isToday: true },
  { dayName: "Day 2", dateStr: "Next Day", fullDate: "Next Business Day", isToday: false },
  { dayName: "Day 3", dateStr: "Day 3", fullDate: "Day 3", isToday: false },
  { dayName: "Day 4", dateStr: "Day 4", fullDate: "Day 4", isToday: false },
  { dayName: "Day 5", dateStr: "Day 5", fullDate: "Day 5", isToday: false },
];

function getDubaiNow(): Date {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })
  );
}

// Helper to generate 5 Gulf business days starting from Today (if slots remain in GST)
function getUpcomingBusinessDays(): {
  days: BusinessDay[];
  currentDubaiMinutes: number;
} {
  if (typeof window === "undefined") {
    return { days: DEFAULT_DAYS, currentDubaiMinutes: 0 };
  }
  const dubaiNow = getDubaiNow();
  const currentDubaiMinutes = dubaiNow.getHours() * 60 + dubaiNow.getMinutes();
  const lastSlotMinutes = TIME_SLOTS[TIME_SLOTS.length - 1].minutesFromMidnight;

  // Include Today (offset 0) if today is a business day and at least 1 slot is still 15+ mins away
  const canBookToday =
    dubaiNow.getDay() !== 0 && currentDubaiMinutes + 15 < lastSlotMinutes;

  const days: BusinessDay[] = [];
  let offset = canBookToday ? 0 : 1;

  while (days.length < 5) {
    const d = new Date(dubaiNow);
    d.setDate(dubaiNow.getDate() + offset);
    const dayOfWeek = d.getDay();
    // In UAE, business week is Mon-Sat (Sunday off)
    if (dayOfWeek !== 0) {
      days.push({
        dayName:
          offset === 0
            ? "Today"
            : d.toLocaleDateString("en-US", { weekday: "short" }),
        dateStr: d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        fullDate: d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        isToday: offset === 0,
      });
    }
    offset++;
  }
  return { days, currentDubaiMinutes };
}

export default function BookingCalendar() {
  const [businessDays, setBusinessDays] = useState<BusinessDay[]>(DEFAULT_DAYS);
  const [currentDubaiMinutes, setCurrentDubaiMinutes] = useState<number>(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[1].label);
  const [meetingType, setMeetingType] = useState<"video" | "phone">("video");
  const [clientName, setClientName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("UAE Corporate Tax");
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    setFormLoadTime(Date.now());
    const { days, currentDubaiMinutes: dubaiMins } = getUpcomingBusinessDays();
    setBusinessDays(days);
    setCurrentDubaiMinutes(dubaiMins);

    if (days[0]?.isToday) {
      const firstOpenSlot = TIME_SLOTS.find(
        (s) => s.minutesFromMidnight > dubaiMins + 15
      );
      if (firstOpenSlot) {
        setSelectedSlot(firstOpenSlot.label);
      }
    }
  }, []);

  const selectedDate = businessDays[selectedDayIndex] || DEFAULT_DAYS[0];

  const isSlotDisabled = (slot: TimeSlotItem): boolean => {
    if (!selectedDate?.isToday) return false;
    return slot.minutesFromMidnight <= currentDubaiMinutes + 15;
  };

  const handleSelectDay = (idx: number) => {
    setSelectedDayIndex(idx);
    const targetDay = businessDays[idx];
    if (targetDay?.isToday) {
      const currentSelectedObj = TIME_SLOTS.find((s) => s.label === selectedSlot);
      if (
        currentSelectedObj &&
        currentSelectedObj.minutesFromMidnight <= currentDubaiMinutes + 15
      ) {
        const nextAvailable = TIME_SLOTS.find(
          (s) => s.minutesFromMidnight > currentDubaiMinutes + 15
        );
        if (nextAvailable) setSelectedSlot(nextAvailable.label);
      }
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!clientName.trim() || !clientEmail.trim() || !clientPhone.trim()) {
      setErrorMsg("Please fill in your name, phone number, and work email.");
      return;
    }

    setLoading(true);
    try {
      const channelLabel =
        meetingType === "video"
          ? "Video Session (Zoom/Teams)"
          : "Direct Phone Call";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: clientName.trim(),
          companyName: companyName.trim() || "Direct Appointment Booking",
          email: clientEmail.trim(),
          mobile: clientPhone.trim(),
          service: serviceNeeded,
          notes: `Scheduled Consultation Booking — Date: ${selectedDate.fullDate}, Slot: ${selectedSlot} (GST • UTC+4), Channel: ${channelLabel}`,
          consent: true,
          formLoadTime: formLoadTime || Date.now() - 3000,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to schedule appointment.");
      }

      setReferenceId(data.referenceId || "");
      setIsBooked(true);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please verify your details and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsAppBookingUrl = encodeURIComponent(
    `Hello Auditclue Advisory, I scheduled a consultation via your website calendar:
- Name: ${clientName}
- Company/Email: ${clientEmail}
- Phone: ${clientPhone}
- Service: ${serviceNeeded}
- Date: ${selectedDate.fullDate}
- Time: ${selectedSlot} (Gulf Standard Time, UTC+4)
- Channel: ${meetingType === "video" ? "Video Call (Zoom/Teams)" : "Direct Phone Call"}
Please confirm my advisor appointment.`
  );

  return (
    <div className="rounded-3xl bg-white border border-[#CBD5E1]/80 shadow-xl overflow-hidden text-[#071426]">
      {/* Header Bar */}
      <div className="bg-[#071426] text-white p-6 sm:p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#36A783]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#83D9BE] uppercase tracking-wider mb-1">
              <Globe2 className="w-3.5 h-3.5 text-[#36A783]" />
              <span>GULF STANDARD TIME (GST • UTC+4)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Schedule Advisor Video Session
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-[#C6F850]">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Advisors Active in Dubai (GST)</span>
          </div>
        </div>
      </div>

      {!isBooked ? (
        <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 space-y-6">
          {/* 1. Date Selection Pills */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold mb-2.5">
              1. Select Date (Gulf Business Days)
            </label>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {businessDays.map((d, idx) => {
                const isSelected = selectedDayIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectDay(idx)}
                    className={`py-3 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#216D56] text-white border-[#216D56] shadow-md font-bold"
                        : "bg-[#F8FAFC] text-[#071426] border-[#CBD5E1] hover:border-[#36A783] hover:bg-white"
                    }`}
                  >
                    <div className="text-[11px] uppercase font-mono opacity-80">
                      {d.dayName}
                    </div>
                    <div className="text-sm sm:text-base font-serif font-bold mt-0.5">
                      {d.dateStr}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. GST Time Slot Selection */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold mb-2.5">
              2. Select Available Slot in GST (Dubai Time)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {TIME_SLOTS.map((slot, idx) => {
                const disabled = isSlotDisabled(slot);
                const isSelected = selectedSlot === slot.label && !disabled;
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={disabled}
                    onClick={() => setSelectedSlot(slot.label)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-2 border transition-all ${
                      disabled
                        ? "bg-slate-100 text-slate-400 border-slate-200 line-through cursor-not-allowed opacity-60"
                        : isSelected
                          ? "bg-[#36A783] text-white border-[#36A783] shadow-sm font-bold cursor-pointer"
                          : "bg-[#F8FAFC] text-[#334155] border-[#CBD5E1] hover:border-[#36A783] hover:bg-white cursor-pointer"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Meeting Channel Selection */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold mb-2.5">
              3. Preferred Meeting Channel
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMeetingType("video")}
                className={`p-3 rounded-xl flex items-center gap-3 border text-left transition-all cursor-pointer ${
                  meetingType === "video"
                    ? "bg-[#EAF4F0] border-[#36A783] text-[#216D56] font-bold shadow-xs"
                    : "bg-[#F8FAFC] border-[#CBD5E1] text-[#334155] hover:bg-white"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center text-[#216D56] shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Video Session</div>
                  <div className="text-[10px] text-[#64748B]">Zoom / Teams Link</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMeetingType("phone")}
                className={`p-3 rounded-xl flex items-center gap-3 border text-left transition-all cursor-pointer ${
                  meetingType === "phone"
                    ? "bg-[#EAF4F0] border-[#36A783] text-[#216D56] font-bold shadow-xs"
                    : "bg-[#F8FAFC] border-[#CBD5E1] text-[#334155] hover:bg-white"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center text-[#216D56] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Direct Phone Call</div>
                  <div className="text-[10px] text-[#64748B]">UAE / International</div>
                </div>
              </button>
            </div>
          </div>

          {/* 4. Contact Details Input */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-[#071426] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Tariq Al Mansoori"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#071426] mb-1">
                WhatsApp / Phone (with Country Code) *
              </label>
              <input
                type="tel"
                required
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="+971 50 ..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#071426] mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="you@company.ae"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#071426] mb-1">
                Company / Entity Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Horizon Trading LLC"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs bg-white focus:outline-none focus:border-[#36A783]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#071426] mb-1">
                Required Advisory Practice *
              </label>
              <select
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs bg-white text-[#071426] focus:outline-none focus:border-[#36A783] cursor-pointer"
              >
                {ALL_FORM_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.title}>
                    {srv.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {errorMsg}
            </div>
          )}

          {/* Submit Action */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#216D56] hover:bg-[#1a5744] disabled:opacity-60 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Scheduling Appointment...</span>
              </>
            ) : (
              <>
                <span>Confirm {selectedSlot} on {selectedDate.dateStr}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      ) : (
        /* Confirmation Screen */
        <div className="p-8 sm:p-10 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-[#EAF4F0] text-[#36A783] flex items-center justify-center mx-auto border-2 border-[#36A783]">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <h4 className="text-2xl font-serif font-bold text-[#071426] mb-2">
              Appointment Scheduled in GST!
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{clientName}</strong>. Your session is confirmed for{" "}
              <strong className="text-[#071426]">{selectedDate.fullDate} at {selectedSlot}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] max-w-sm mx-auto text-left text-xs space-y-1.5 font-mono">
            {referenceId && (
              <div><span className="text-[#64748B]">Reference ID:</span> <span className="font-bold text-[#216D56]">{referenceId}</span></div>
            )}
            <div><span className="text-[#64748B]">Practice:</span> {serviceNeeded}</div>
            <div><span className="text-[#64748B]">Channel:</span> {meetingType === "video" ? "Video (Zoom/Teams)" : "Phone Call"}</div>
            <div><span className="text-[#64748B]">Time Zone:</span> Gulf Standard Time (UTC+4)</div>
            <div><span className="text-[#64748B]">Send Invites To:</span> {clientEmail}</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/971547338583?text=${whatsAppBookingUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm"
            >
              <span>Instant Confirmation on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setIsBooked(false)}
              className="text-xs text-[#64748B] hover:text-[#071426] underline font-medium"
            >
              Book Another Time
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
