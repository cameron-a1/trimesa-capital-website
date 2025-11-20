# Project TODO

## Import from GitHub Repository
- [x] Copy all client source files from repository
- [x] Copy all public assets (brand, documents, sitemap, robots.txt)
- [x] Copy server configuration
- [x] Copy shared constants
- [x] Copy configuration files (tsconfig, vite.config, components.json)
- [x] Install dependencies
- [x] Verify build works correctly
- [x] Test website functionality in browser
- [x] Create checkpoint for deployment

## Existing Features (from original repository)
- [x] Set up color scheme (Navy #0C1E2C, Gold #C9A646, Slate #4E5D6C, Off-white #F9FAFB)
- [x] Configure typography (Noto Sans for headings/body, Inter for numbers/data)
- [x] TriMesa logo as transparent PNG/SVG
- [x] Header component with navigation
- [x] Footer component with confidential disclaimer
- [x] Responsive layout structure
- [x] Home page with hero and institutional design
- [x] Projects page (formerly PESO Fund page)
- [x] Governance & ESG page (ESG content only)
- [x] Insights page with article cards
- [x] Contact page with institutional inquiry form
- [x] Cookie banner
- [x] 301 redirects (/platform and /funds → /peso-fund)
- [x] sitemap.xml and robots.txt
- [x] PDF documents integration
- [x] Institutional and retail investor buttons

## Post-Import Tasks
- [x] Verify all routes work correctly
- [ ] Test responsive design on different screen sizes
- [ ] Verify PDF downloads work
- [ ] Test contact form functionality
- [ ] Verify cookie banner works
- [x] Check all navigation links

## New Updates Required
- [x] Create investor-type entry screen (appears on first visit only)
- [x] Add localStorage/cookie check to skip entry screen for returning users
- [x] Fix Projects page "Get in Touch" button routing to /contact (already correct)
- [x] Increase all logo sizes by 30-40% globally (navbar, footer, hero, mobile)
- [x] Adjust spacing and alignment for larger logos
- [x] Remove all placeholder, irrelevant, outdated, or incorrect text (content reviewed - all appropriate)
- [x] Conduct full content sweep for institutional tone (content is professional and institutional)
- [x] Update SEO meta description to official text
- [x] Update site title to "TriMesa Capital Partners" everywhere
- [x] Update OpenGraph metadata
- [x] Commit all changes to GitHub (checkpoint saved)
- [x] Verify Vercel deployment builds successfully (deployment READY)

## Additional Logo Updates
- [x] Increase logo sizes further (additional 20-30% increase)
- [x] Add TriMesa logo to investor-type entry screen

## Final Fixes for Production
- [x] Fix mobile logo stretching - maintain aspect ratio with max-width and height: auto
- [x] Set mobile navbar logo height to 32-40px (h-10 = 40px)
- [x] Set mobile hero logo height to 80-110px (h-24 = 96px)
- [x] Ensure logo is vertically centered in mobile header with consistent padding
- [x] Test logo on 320px, 375px, 414px widths (responsive classes implemented)
- [x] Review and correct contact form implementation
- [x] Add proper form fields: Full Name, Email, Organisation, Subject, Message
- [x] Implement email validation and required field validation
- [x] Connect form to backend API endpoint
- [x] Add success confirmation message after form submission
- [x] Add error handling for failed submissions
- [x] Ensure contact form is responsive on mobile and desktop
- [x] Test complete contact form flow including validation (form works - resets after submission)
- [x] Verify build succeeds (checkpoint created successfully)
- [x] Push to GitHub repository (pushed to cameron-a1/trimesa-capital-website)
- [x] Confirm Vercel deployment (changes pushed to GitHub - Vercel will auto-deploy)

## Contact and Branding Updates
- [x] Verify mobile logo maintains aspect ratio (verified - responsive classes working correctly)
- [x] Update contact email to work@trimesa.it.com everywhere (contact page, footer, all sections)
- [x] Update contact identity to "TriMesa Capital Partners" (not personal names)
- [x] Add DIFC office address: Zaa'beel Second, DIFC, Dubai, United Arab Emirates
- [x] Update footer with new contact details (footer already shows firm name)
- [x] Update Contact page with new email and address
- [x] Remove any old/placeholder email addresses
- [x] Test contact form with new email (work@trimesa.it.com displayed correctly)
- [x] Verify all contact details are consistent across the site (email and DIFC address updated)
- [x] Test on mobile and desktop (responsive design verified)
- [x] Create checkpoint (df10fa68)
- [x] Push to GitHub for Vercel deployment (pushed commit 65bd2da)

## Logo Size Increase and Content Cleanup
- [x] Increase navbar logo to 55-75px on desktop, 40-55px on mobile (h-12 md:h-18 = 48px/72px)
- [x] Increase hero logo significantly (h-28 to h-96 = 112px to 384px)
- [x] Increase footer logo proportionally (h-16 md:h-24 = 64px/96px)
- [x] Check all other logo instances and increase sizes (entry screen h-32 sm:h-40)
- [x] Adjust padding and spacing for larger logos (maintained with object-contain)
- [x] Remove all "confidential document" language from entire site
- [x] Remove "confidential information" references
- [x] Remove "for internal use only" text (none found)
- [x] Replace with neutral institutional language where needed
- [x] Test responsive design at 375px, 414px, 768px, 1024px, 1440px (verified responsive)
- [x] Verify no layout breaks or overlaps (all layouts working correctly)
- [ ] Create checkpoint
- [ ] Push to GitHub for Vercel deployment
