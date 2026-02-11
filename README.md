# Regression Endpoints Overview

This document tracks key endpoints for regression validation across Web, CTAPP Back Office, Mpesa Support, and Mobile CTAPP modules.

## Web

| Platform | Status | Module | URL(s) | Notes |
|---|---|---|---|---|
| web | Pass | Log in | https://safaricom-partnerhub.safaricom.et/auth/login | |
| web | Pass |  | https://safaricom-partnerhub.safaricom.et/ | |
| web | Pass | OP Dashboard | https://safaricom-partnerhub.safaricom.et/dashboard | |
| web | Pass | Users management | https://safaricom-partnerhub.safaricom.et/users<br>https://safaricom-partnerhub.safaricom.et/hierarchyAndPermission<br>https://safaricom-partnerhub.safaricom.et/hierarchyDomains | |
| web | Pass | Partner Management | https://safaricom-partnerhub.safaricom.et/merchant-onboarding<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/BaOnboarding<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/Reverification<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/partner<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/partner/merchant/ho<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/partner/merchant/store<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/partner/dsa?type=dsa<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/partner/dsa?type=dsp<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/merchantReport<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/dsa-dsp<br>https://safaricom-partnerhub.safaricom.et/merchant-onboarding/dsa-dsp/report | Double slashes normalized |
| web | Pass | Float Management | https://safaricom-partnerhub.safaricom.et/float-management<br>https://safaricom-partnerhub.safaricom.et/float-management/floatManagement<br>https://safaricom-partnerhub.safaricom.et/float-management/floatTransferReport<br>https://safaricom-partnerhub.safaricom.et/float-management/floatConfiguration<br>https://safaricom-partnerhub.safaricom.et/float-management/performanceDashboard<br>https://safaricom-partnerhub.safaricom.et/float-management/floatReport | |
| web | Pass | CTAPP Back Office Portal | https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/posOutletManagement<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/shopVisit<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/configuration/campaignTypes<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/configuration/categories<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/configuration/channelTypes<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/configuration/visitQuestionnaires<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/configuration/questionAnswers<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/configuration/caseManagement<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/report/crm<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/report/tNc<br>https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/dsa-map | Requires Wakanda/SSO for access |
| web | Not working wihout wakanda | shopVisit | https://safaricom-partner-hub-ctapp-backoffice-management.prod.sma2.safaricomet.net/shopVisit | |
| web | Pass / Not working wihout wakanda | Mpesa Support | https://mpesa-product-support-portal.oat.sma2.safaricomet.net/login | |

## Mobile CTAPP

| Platform | Status | Module | URL(s) | Notes |
|---|---|---|---|---|
| Mobile CTAPP | Pass | Login/Logout | CTAPP Login | |
| Mobile CTAPP |  | Login/Logout | CTAPP Logout | |
| Mobile CTAPP | Pass | POS Outlet Visit | MM Visit | |
| Mobile CTAPP | Pass | POS Outlet Onboaring | MM onboaring | |
| Mobile CTAPP | Pass | BA Onboarding | Agent Onbaording | |
| Mobile CTAPP | Pass | Business Mapping | mapping mm | |

---

### Test Execution
- To run all regression modules:

```bash
npx playwright test tests/regression/modules
```

- To run only dashboard-related modules:

```bash
npx playwright test tests/regression/modules/dashboard
```

- To run a single module file:

```bash
npx playwright test tests/regression/modules/partner-management/partner-management-flow.spec.ts
```

- To run tagged regression suites:

```bash
npx playwright test --grep @regression
```

- Ensure environment variables are set:
  - `LOGIN_USERNAME` or `GMAIL_USER`
  - `LOGIN_PASSWORD`
  - `GMAIL_USER`, `GMAIL_APP_PASS`
  - Optional: `BASE_URL` (overrides the Playwright base URL for full endpoint testing)
  - Optional: `GMAIL_SUBJECT_FILTER`, `GMAIL_SENDER_FILTER`
