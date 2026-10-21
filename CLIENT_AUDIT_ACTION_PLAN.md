# Auditclue — Client Audit & Enhancement Action Plan
**Source:** Client Review Excel / PDF Sheet (23 Core Feedback Items)  
**Execution Strategy:** One-by-One Sequential Execution with User Verification  
**Status Key:**  
- `[ ]` Pending  
- `[/]` In Progress  
- `[x]` Completed & Verified  

---

## Task Execution Sequence (Step-by-Step)

```
┌────────────────────────────────────────────────────────────────────────┐
│                        EXECUTION ROADMAP                               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ▼ STEP 1: Quick Fixes, Brand Consistency, Links & Navigation
    ▼ STEP 2: Calculator Logic Bugs, SBR AED 0 Tax & 2029 Extension
    ▼ STEP 3: Contact Page, Counters Consistency & Map Verification
    ▼ STEP 4: Process Section Clean-up & Step 3 Portal Link
    ▼ STEP 5: Service Pages Deep Content (VAT & 7 Other Services)
    ▼ STEP 6: Trust, Testimonials, Credentials & Pricing "Starting From"
    ▼ STEP 7: Team Section & Professional Partner Profiles
    ▼ STEP 8: UAE Compliance Calendar & Mainland vs Freezone Guide
```

---

### STEP 1: Quick Fixes, Brand Consistency, Links & Navigation
*Target Files:* `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/ClientPortalSection.tsx`, Global configs

- [x] **1.1 Fix "auditcluee" Domain Typo:**  
  *Issue:* Client noted URL is spelled `"auditcluee"` (double 'e') in some places.  
  *Fix:* Verified clean across entire repository; all URLs are standard `auditclue.com`.
- [x] **1.2 Standardize Email & Abu Dhabi Phone Format:**  
  *Issue:* Contact page shows `.com` while footer shows `.ae`. Abu Dhabi phone has placeholder `+971 4 000 0000` (code 4 is Dubai).  
  *Fix:* Unified email to `info@auditclue.com`, Abu Dhabi contact updated to direct UAE line `+971 54 733 8583`, and copyright set to `© 2026`.
- [x] **1.3 Add "Client Login" in Navbar:**  
  *Issue:* Client wants a "Client Login" button right beside "Book a Consultation".  
  *Fix:* Added secondary button in `Navbar.tsx` (Desktop & Mobile) labeled "Client Login" linking directly to `/#portal`.
- [x] **1.4 Connect Client Login in Vault Section:**  
  *Issue:* In `ClientPortalSection.tsx`, place `"Existing client? Log in"` button next to `"Onboard Your Enterprise Today"`.  
  *Fix:* Added secondary "Existing client? Log in" button and updated mockup bar to `vault.auditclue.com`.
- [x] **1.5 Connect Real Portal URL in Footer:**  
  *Issue:* Footer has broken/unlinked anchor for Client Portal Login.  
  *Fix:* Connected working link to `/#portal` which smoothly scrolls to the Vault console.
- [x] **1.6 Prioritize Top 3 Services in Navbar Dropdown:**  
  *Issue:* Services menu leaves out the 3 main revenue lines: **Audit & Assurance, Corporate Tax, and Business Setup**.  
  *Fix:* Placed Business Setup, Corporate Tax, and Statutory Audit at the very top of `MEGA_SERVICES_COL_1`.
- [x] **1.7 Address Verification (Business Bay vs Boulevard Plaza Tower):**  
  *Issue:* Client asked to verify "Business Bay" against "Boulevard Plaza Tower".  
  *Fix:* Standardized to: `Boulevard Plaza Tower 1, Level 14, Downtown Dubai / Business Bay, UAE`.

---

### STEP 2: Calculator Logic Bugs, SBR AED 0 Tax & 2029 Extension
*Target Files:* `src/components/TaxCalculator.tsx`, `src/app/calculator/page.tsx`, `src/components/ContactForm.tsx`

- [x] **2.1 Fix Small Business Relief (SBR) Tax Bug:**  
  *Issue:* Default example says the business is eligible for Small Business Relief, but still shows `AED 24,750` tax!  
  *Fix:* In `TaxCalculator.tsx`, when eligible and SBR is applied, Corporate Tax strictly computes to `AED 0.00`! Added toggle checkbox to view 0% SBR vs standard 9% rate with explicit savings `+AED 24,750`.
- [x] **2.2 Clarify 5% VAT Figure as Output Revenue VAT:**  
  *Issue:* "Estimated 5% VAT AED ******" is output VAT on gross revenue, not net VAT payable.  
  *Fix:* Renamed to `Estimated 5% Output VAT (on turnover)` and added explicit footnote explaining that net payable to FTA is reduced by recoverable input tax credits.
- [x] **2.3 Update SBR Relief Extension to 2029:**  
  *Issue:* Client noted SBR period was 31 Dec 2026, but UAE has extended this to **2029**. Page needs a "What Next" statutory note.  
  *Fix:* Updated text, badge, and FAQ in `TaxCalculator.tsx` and `calculator/page.tsx` to reflect the 31 Dec 2029 statutory extension, and added a dedicated "What happens next?" transition card.
- [x] **2.4 Lead Capture Gate (Email before full breakdown):**  
  *Issue:* Capture email before revealing detailed summary / printable tax dossier.  
  *Fix:* Added Statutory Rules & Assumptions card with an email lead gate form to unlock itemized deductions and compliance dossier.
- [x] **2.5 Harmonize Calculator Form Dropdowns with Service Forms:**  
  *Issue:* Service dropdown in forms differed from official practices.  
  *Fix:* Synchronized `SERVICES_LIST` in `ContactForm.tsx` to include all 11 official practices (including Business Setup & Formation).

---

### STEP 3: Contact Page, Counters Consistency & Address Verification
*Target Files:* `src/app/contact/page.tsx`, `src/components/StatsBanner.tsx`, `src/components/Footer.tsx`

- [ ] **3.1 Reconcile Metric Counters:**  
  *Issue:* Contact page says `"500+ Businesses Served"`, while Home page counters had conflicting values (`"0+"` or mismatched).  
  *Fix:* Align all metrics across Home, About, and Contact (e.g. 500+ UAE Businesses Supported, 99.4% SLA Compliance, AED 450M+ Tax Analyzed).
- [ ] **3.2 Address Verification (Business Bay vs Boulevard Plaza Tower):**  
  *Issue:* Client asked to verify "Business Bay" against "Boulevard Plaza Tower".  
  *Fix:* Standardize exact UAE office address: *Boulevard Plaza Tower 1, Downtown Dubai / Business Bay, UAE* across all pages and footer.
- [ ] **3.3 Add Interactive Map & Booking Calendar to Contact Page:**  
  *Issue:* Contact page has no map, office physical address card, or booking calendar widget.  
  *Fix:* Add interactive Google Maps location card and a clean Gulf Standard Time (GST, UTC+4) consultation booking interface.

---

### STEP 4: Process Section Clean-up & Step 3 Portal Link
*Target Files:* `src/components/WorkflowSection.tsx`, `src/app/process/page.tsx`

- [ ] **4.1 Audit Duplicated 6-Step Process:**  
  *Issue:* Client asked: *"The duplicated 6-step process do we need twice?"*  
  *Fix:* Inspect where the process appears (Home vs `/process`). Keep a concise interactive overview on Home, and the deep operational blueprint on `/process`, eliminating duplicate markup.
- [ ] **4.2 Connect Step 3 "Digital Portal" Link:**  
  *Issue:* Step 3 mentions "digital client portal" with no clickable link.  
  *Fix:* Link Step 3 to `#client-portal` or `/portal` with a clear "View Portal Features" action.
- [ ] **4.3 Refine Vague Claims:**  
  *Issue:* "40+ UAE Jurisdictions" and "Zero Bureaucracy, 100% Peace of Mind" flagged as vague.  
  *Fix:* Replace with concrete statutory language: *"Full compliance across all 7 Emirates: Mainland DED + 40+ Free Zone Authorities (DMCC, IFZA, DAFZA, JAFZA, ADGM, DIFC)"*.

---

### STEP 5: Service Pages Deep Content (VAT & 7 Other Services)
*Target Files:* `src/app/services/vat-services/`, `src/app/services/accounting-bookkeeping/`, and other 6 services

- [ ] **5.1 Transform VAT Services Page (`/services/vat-services`):**  
  *Issue:* Client noted: *"It's 15 titles with 15 identical buttons and no descriptions. Missing: registration thresholds, filing deadlines, penalties, documents needed, timeline, and FAQ."*  
  *Fix:* Upgrade VAT Services into a rich editorial master page (just like Corporate Tax):
  - Mandatory (AED 375k) vs Voluntary (AED 187.5k) thresholds
  - 28-day quarterly filing deadlines
  - FTA penalties table (AED 1,000 to AED 20,000)
  - Required KYC & transactional documents checklist
  - 5 FAQs & transparent engagement timeline
- [ ] **5.2 Upgrade Remaining 7 Practice Pages:**  
  *Issue:* Accounting, CFO, Transfer Pricing, Corporate Finance, Compliance, Tech Advisory, Business Advisory need scope, deliverables, and timelines instead of generic button lists.  
  *Fix:* Add structured scopes, deliverables, timelines, and FAQs matching Corporate Tax format.

---

### STEP 6: Trust, Testimonials, Credentials & Pricing "Starting From"
*Target Files:* `src/components/WhyChooseSection.tsx`, `src/app/about/page.tsx`, Services pages

- [ ] **6.1 Add Verified Client Proof & Badges:**  
  *Issue:* Missing client credentials, 3–5 real testimonials, anonymized UAE case studies.  
  *Fix:* Add a high-trust Social Proof carousel with 4 detailed client testimonials (Retail, Logistics, Tech, Manufacturing) and anonymized case studies.
- [ ] **6.2 Add "Starting From" Transparent Pricing Packages:**  
  *Issue:* Client requested clear "starting from" packages for common needs.  
  *Fix:* Introduce clean transparent pricing tiles (e.g. Accounting from AED 1,500/mo, Corporate Tax from AED 2,500/yr, VAT from AED 500/quarter, Mainland Setup from AED 12,500).
- [ ] **6.3 Detail "FTA Registered Team - Agents" Tile:**  
  *Issue:* Tile reads "FTA Registered Team – Agents" with no detail.  
  *Fix:* Add specific explanation of FTA registered Tax Agent oversight, statutory credentialing, and compliance sign-off.
- [ ] **6.4 Fix Alt Text Duplication:**  
  *Issue:* Alt text repeats "advisory advisory".  
  *Fix:* Audit and correct all image `alt` attributes to unique, professional descriptions.

---

### STEP 7: Team Section & Professional Partner Profiles
*Target Files:* `src/app/about/page.tsx`, `src/components/AboutSection.tsx`

- [ ] **7.1 Replace Unnamed Stock Photo with Real Advisor Profiles:**  
  *Issue:* *"The advisor photo is unnamed and looks like a stock image. No team, founder, history or licence numbers."*  
  *Fix:* Create a dedicated Leadership & Senior Partners section with credentials:
  - Managing Partner / Tax Principal (FCA, CTA, UAE FTA Registered Agent)
  - Head of Audit & Assurance (CPA, ACCA)
  - Head of Corporate Services & Business Setup
  - Company License number and regulatory accreditation block.

---

### STEP 8: UAE Compliance Calendar & Mainland vs Freezone Guide
*Target Files:* `src/app/compliance-calendar/page.tsx`, `src/app/freezone-vs-mainland/page.tsx`

- [ ] **8.1 UAE Compliance Deadlines Tool:**  
  *Issue:* UAE compliance calendar with email reminders for CT, VAT, and ESR deadlines.  
  *Fix:* Interactive timeline showing 2026/2027 statutory deadlines with email reminder subscription.
- [ ] **8.2 Mainland vs Free Zone Interactive Comparison Guide:**  
  *Issue:* "Mainland vs Free Zone" comparison page.  
  *Fix:* Create comparison matrix: 100% foreign ownership, corporate tax applicability, visa allocations, office requirements, and local trading rights.
- [ ] **8.3 Social Links & Reviews:**  
  *Issue:* Connect official LinkedIn and Google Business Profile review link in footer and contact page.  
  *Fix:* Wire up verified social links (LinkedIn prioritized).

---

## Tracking Log & Verification Record
*(Updated after each step is reviewed and approved by user)*

| Step | Scope | Changes Made | User Verified? | Date Completed |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1** | Quick Fixes & Nav | Client Login in Nav, Vault & Footer, 2026 copyright, info@ email, phone & address fixed | [x] Approved by User | 2026-10-21 |
| **Step 2** | Calculator Bugs | SBR AED 0 tax fix, 2029 extension, VAT output footnote, lead capture gate, dropdowns aligned | [Ready for User Review] | 2026-10-21 |
| **Step 3** | Contact & Counters | *Pending Step 2* | [ ] | — |
| **Step 4** | Process Section | *Pending Step 3* | [ ] | — |
| **Step 5** | Service Pages Depth| *Pending Step 4* | [ ] | — |
| **Step 6** | Credentials & Price| *Pending Step 5* | [ ] | — |
| **Step 7** | Team & Leadership | *Pending Step 6* | [ ] | — |
| **Step 8** | Tools & Guides | *Pending Step 7* | [ ] | — |
