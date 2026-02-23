# Habra Main Site — QA Bug Report & Test Run Template

**Project:** Habra (Habesha Community) — Marketing/Landing Site  
**Template version:** 1.0  

Use this template to log bugs found during QA and to summarize a test run.

---

## Part A: Bug Report Template (single issue)

Copy the section below for each bug. You can paste multiple copies into one document or use a tracker (Jira, Linear, etc.) with these fields.

---

### Bug Report

| Field | Value |
|-------|--------|
| **Bug ID** | (e.g. BUG-001 or leave for dev to assign) |
| **Title** | Short, descriptive title (e.g. "Mobile menu does not close when tapping overlay") |
| **Reported by** | |
| **Date** | |
| **Severity** | Critical / High / Medium / Low |
| **Priority** | P1 / P2 / P3 (optional) |
| **Component/Area** | e.g. Header, Footer, Hero, Testimonials, Global Loader |
| **Checklist reference** | e.g. "Checklist §3.13" (optional) |

**Environment**

| Field | Value |
|-------|--------|
| **URL / Build** | e.g. https://staging.habra.com or local build commit abc123 |
| **Browser(s)** | e.g. Chrome 121, Safari 17 |
| **OS** | e.g. Windows 11, macOS 14, iOS 17 |
| **Device** | Desktop / Tablet / Mobile (model if relevant) |
| **Viewport** | e.g. 375×667, 1920×1080 |

**Steps to reproduce**

1.  
2.  
3.  

**Expected result**



**Actual result**



**Screenshots / screen recording**

- (Attach or link: screenshot, video, or GIF)

**Additional context**

- Console errors (yes/no; paste if yes):
- Network failures (yes/no):
- Reproducible every time? Yes / No / Sometimes
- Related bugs (IDs):

---

*End of single bug report — duplicate this block for each new bug*

---

## Part B: Test Run Summary Template

Use this once per full (or partial) test cycle.

---

### Test Run Summary

| Field | Value |
|-------|--------|
| **Run ID** | e.g. TR-2026-02-23-01 |
| **Tester name** | |
| **Date (start – end)** | |
| **Build / commit / URL** | |
| **Scope** | Full checklist / Smoke only / Regression / Section-specific (list sections) |

**Results overview**

| Metric | Count |
|--------|--------|
| Total checks executed | |
| Passed | |
| Failed | |
| Blocked / N/A | |
| Not run | |

**Severity breakdown (of failures)**

| Severity | Count |
|----------|--------|
| Critical | |
| High | |
| Medium | |
| Low | |

**Bug list (this run)**

| Bug ID | Title | Severity | Component |
|--------|--------|----------|-----------|
| | | | |
| | | | |

**Blockers / critical issues (summary)**

- 

**Recommendation**

- [ ] **Approve for release** — No critical/high issues; known low/medium documented.
- [ ] **Conditional release** — Release with known issues; list and acceptance:
  - 
- [ ] **Do not release** — Critical/blocker(s) must be fixed first:
  - 

**Notes**

- 

**Attachments**

- Link to full checklist (filled): 
- Link to bug tracker epic/version: 

---

*End of Test Run Summary*

---

## Severity Guidelines (for consistency)

| Severity | Meaning | Example |
|----------|---------|--------|
| **Critical** | Site unusable or core flow broken; data loss; security issue | Blank page on load, app download links 404 |
| **High** | Major feature broken or severely degraded; no simple workaround | Header nav not visible on desktop, form submit crashes |
| **Medium** | Feature partially broken or UX clearly degraded | Wrong color on hover, animation glitch, one link wrong |
| **Low** | Cosmetic, minor copy, or edge case | Typo, padding off by a few px, very rare device issue |

---

*End of QA Bug Report & Test Run Template*
