# AdSense Owner Recheck

Use this checklist after deploying the code changes and before requesting another AdSense review. Replace `Pending` only after saving the evidence described in the row. Code changes do not prove account status, traffic quality, regional consent behavior, or live ad placement.

## Account and ownership

| ID | Check | How to verify | Pass evidence | Status |
| --- | --- | --- | --- | --- |
| ADS-ELIG-01 | Applicant is at least 18, or a guardian owns the account | Check the legal name and date of birth associated with the Google payments profile | Screenshot or written confirmation stored privately | Pending |
| ADS-ELIG-02 | Publisher has only one AdSense account | Sign in to the account used for this site and confirm no second account exists under the same payee | Account email and publisher ID recorded privately | Pending |
| ADS-OWN-01 | Site owner can edit every page head | Confirm a production deployment can change the shared Astro layout | Deployed verification tag or source change visible | Pending |
| ADS-OWN-02 | Domain and DNS are controlled by the applicant | Open the registrar and DNS provider dashboards | Registrar account and DNS-zone screenshot stored privately | Pending |
| ADS-SITE-01 | Domain is added to the AdSense Sites list | Open AdSense → Sites and locate `meccachameleon.com` | Status screenshot and review date | Pending |
| ADS-SITE-02 | At least one ownership method is active | Confirm AdSense code, meta tag, or `ads.txt` method in the AdSense workflow | Successful verification message | Pending |

## Traffic and publisher behavior

| ID | Check | How to verify | Pass evidence | Status |
| --- | --- | --- | --- | --- |
| ADS-PROG-01 | No self-clicking or artificial impressions | Confirm the owner and collaborators never click live ads; use publisher testing tools where available | Written team rule and invalid-traffic monitoring note | Pending |
| ADS-PROG-04 | Traffic sources are legitimate | Review analytics acquisition reports for paid-to-click, exchange, spam email, bot, or junk-comment traffic | Export showing source/medium distribution for the review period | Pending |

## Advertising implementation — GPT unchanged by request

The current GPT/AdSense implementation was deliberately left unchanged. These rows require visual and account-side review and must not be marked passed based only on the repository test.

| ID | Check | How to verify | Pass evidence | Status |
| --- | --- | --- | --- | --- |
| ADS-UX-06 | Layout is not ad-first or confusing | Inspect representative desktop and mobile pages with filled ads | Screenshots showing content remains primary | Owner review required — GPT unchanged by request |
| ADS-PROG-03 | Ads are distinguishable from content | Check every format for neutral labeling and spacing from editorial elements | Screenshots of banner, anchor, rail, and interstitial formats | Owner review required — GPT unchanged by request |
| ADS-PROG-05 | Official ad code is not manipulated | Compare deployed GPT and AdSense configuration with account-generated code and unit paths | Saved comparison with matching publisher and network IDs | Owner review required — GPT unchanged by request |
| ADS-PROG-06 | Ads appear only in allowed contexts | Test content, search, legal, simulator, embedded-game, and error pages | Page-by-page placement inventory | Owner review required — GPT unchanged by request |
| ADS-PUB-10 | Ads do not cover navigation or content | Trigger each format at common viewport sizes and test close controls | Desktop/mobile recording without obstruction | Owner review required — GPT unchanged by request |
| ADS-PUB-11 | No ads on low-value pages | Recount visible editorial copy and inspect all pages that can serve ads | URL inventory showing adequate content or documented suppression | Owner review required — Workshop content expanded; GPT unchanged |
| ADS-PUB-12 | Ads do not appear outside a meaningful context | Check background tabs, route loads, and out-of-page placements | Test notes for each GPT format | Owner review required — GPT unchanged by request |
| ADS-REST-08 | No prohibited overlay/sticky-video behavior | Inspect anchor, interstitial, rails, and any video placements against Google format rules | Screenshots and account-format list | Owner review required — GPT unchanged by request |

## Privacy, consent, and targeting

| ID | Check | How to verify | Pass evidence | Status |
| --- | --- | --- | --- | --- |
| ADS-PRIV-03 | No PII enters ad requests | Inspect production URLs, data layer, GPT targeting, and network requests for email addresses, phone numbers, or user identifiers | Sanitized network-request capture | Pending |
| ADS-PRIV-04 | Certified CMP covers EEA, UK, and Switzerland | Configure a Google-certified European regulations message, then test from each applicable region | CMP name, configuration screenshot, and regional test captures | Pending |
| ADS-PRIV-05 | Precise location is not collected without consent | Search code and browser permissions; test that no geolocation prompt appears | Source-search output and browser test | Pending |
| ADS-PRIV-07 | Site does not set or alter cookies on Google domains | Inspect application code and browser storage/network activity | Network and cookie audit notes | Pending |
| ADS-PRIV-08 | Sensitive data is not used for audiences | Review AdSense/Ad Manager audiences, key-values, and connected analytics audiences | Audience inventory with no sensitive segments | Pending |
| ADS-PRIV-09 | Restricted housing/employment/credit targeting is not used | Review campaigns and targeting if the publisher also buys ads | Account review note, or `Not applicable — no such campaigns` | Pending |
| ADS-PRIV-10 | Personalized advertising has a lawful basis and disclosure | Confirm CMP consent, vendor configuration, and Privacy Policy agree | Policy URL, CMP capture, and account configuration screenshot | Pending |

## Brand and identity

| ID | Check | How to verify | Pass evidence | Status |
| --- | --- | --- | --- | --- |
| ADS-PUB-02 | Trademark use does not imply ownership or endorsement | Review the home disclosure, footer, About, Copyright, and Steam-source attribution | Production screenshots and URLs | Pending |
| ADS-PUB-05 | Site purpose and affiliation are clear | Ask a new visitor to identify whether the site is official from the first screen and footer | Home screenshot plus reviewer note | Pending |

## Final deployment checks

- [ ] `https://meccachameleon.com/ads.txt` contains the expected Google authorization line.
- [ ] Privacy Policy shows the 2026-07-20 update and the third-party advertising disclosure.
- [ ] Both retained beginner URLs return 200 and have distinct title, H1, description, and purpose.
- [ ] Workshop index and Police Station guide contain at least 800 words of useful editorial content.
- [ ] Header and footer use `Browser Practice`, while `/play-game` remains the URL.
- [ ] Google-certified CMP appears and exposes privacy options for applicable regional visitors.
- [ ] No checklist row is marked `Pass` without stored evidence.
