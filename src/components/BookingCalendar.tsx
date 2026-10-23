"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Phone,
  CheckCircle2,
  ArrowRight,
  Globe2,
} from "lucide-react";

const TIME_SLOTS = [
  "09:30 AM GST",
  "11:00 AM GST",
  "01:30 PM GST",
  "03:00 PM GST",
  "04:30 PM GST",
  "05:30 PM GST",
];

interface BusinessDay {
  dayName: string;
  dateStr: string;
  fullDate: string;
}

const DEFAULT_DAYS: BusinessDay[] = [
  { dayName: "Mon", dateStr: "Next Day", fullDate: "Next Business Day" },
  { dayName: "Tue", dateStr: "Day 2", fullDate: "Day 2" },
  { dayName: "Wed", dateStr: "Day 3", fullDate: "Day 3" },
  { dayName: "Thu", dateStr: "Day 4", fullDate: "Day 4" },
  { dayName: "Fri", dateStr: "Day 5", fullDate: "Day 5" },
];

// Helper to generate next 5 business days on the client
function getNextBusinessDays(): BusinessDay[] {
  if (typeof window === "undefined") return DEFAULT_DAYS;
  const days: BusinessDay[] = [];
  const now = new Date();
  let added = 0;
  let offset = 1;

  while (added < 5) {
    const d = new Date(now);
    d.setDate(now.getDate() + offset);
    const dayOfWeek = d.getDay();
    // In UAE, business week is Mon-Fri / Mon-Sat (Sunday off)
    if (dayOfWeek !== 0) {
      days.push({
        dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
        dateStr: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        fullDate: d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      });
      added++;
    }
    offset++;
  }
  return days;
}

export default function BookingCalendar() {
  const [businessDays, setBusinessDays] = useState<BusinessDay[]>(DEFAULT_DAYS);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[1]);
  const [meetingType, setMeetingType] = useState<"video" | "phone">("video");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("UAE Corporate Tax & Advisory");
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    setBusinessDays(getNextBusinessDays());
  }, []);

  const selectedDate = businessDays[selectedDayIndex] || DEFAULT_DAYS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) return;
    setIsBooked(true);
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
                    onClick={() => setSelectedDayIndex(idx)}
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
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#36A783] text-white border-[#36A783] shadow-sm font-bold"
                        : "bg-[#F8FAFC] text-[#334155] border-[#CBD5E1] hover:border-[#36A783] hover:bg-white"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot}</span>
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

            <div className="sm:col-span-2">
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
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#216D56] hover:bg-[#1a5744] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Confirm {selectedSlot} on {selectedDate.dateStr}</span>
            <ArrowRight className="w-4 h-4" />
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
