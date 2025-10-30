# TriMesa Capital Partners - PESO Fund Website

An institutional-grade website for TriMesa Capital Partners presenting the Private Emerging Special Opportunities I (PESO) fund. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

This website serves as the primary digital presence for PESO, a Cayman Islands Exempted Limited Partnership (ELP) targeting capital appreciation and income through equity investments in sustainable African businesses.

**Target Audience:** Institutional and accredited investors only.

## Technology Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Routing:** Wouter (client-side routing)
- **Build Tool:** Vite

## Project Structure

```
client/
  public/
    brand/              # TriMesa logo and brand assets
    documents/          # PDF fund documents
    sitemap.xml         # SEO sitemap
    robots.txt          # Search engine directives
  src/
    components/         # Reusable UI components
      Header.tsx        # Navigation header
      Footer.tsx        # Footer with confidential disclaimer
      CookieBanner.tsx  # Cookie consent banner
      ui/               # shadcn/ui components
    pages/              # Page-level components
      Home.tsx          # Landing page
      PesoFund.tsx      # Fund details page
      GovernanceESG.tsx # Governance & ESG page
      Insights.tsx      # Insights/articles page
      Contact.tsx       # Contact form page
    App.tsx             # Routes & layout
    index.css           # Global styles & theme
```

## Design System

### Brand Colors

- **Navy:** `#0C1E2C` (Primary background)
- **Gold:** `#C9A646` (Accents, CTAs)
- **Slate:** `#4E5D6C` (Secondary text)
- **Off-white:** `#F9FAFB` (Background)

### Typography

- **Headings & Body:** Noto Sans
- **Numbers & Data:** Inter

### Theme

The site uses a light theme optimized for institutional audiences. All colors are defined as CSS variables in `client/src/index.css` for easy customization.

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Navigate to project directory
cd trimesa-peso-fund

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Server will run at http://localhost:3000
```

### Build

```bash
# Create production build
pnpm build

# Preview production build locally
pnpm preview
```

## Content Management

### Updating Fund Information

Fund data is sourced from the PDF documents and hardcoded in the respective page components:

- **Key numbers:** `client/src/pages/PesoFund.tsx` (lines 6-14)
- **Pipeline deals:** `client/src/pages/PesoFund.tsx` (lines 28-39)
- **Team information:** `client/src/pages/GovernanceESG.tsx` (lines 5-17)

To update fund terms or portfolio information, edit these arrays directly in the source files.

### Adding New Insights Articles

Edit `client/src/pages/Insights.tsx` to add new articles to the `articles` array. Each article requires:

- `title`: Article headline
- `slug`: URL-friendly identifier
- `excerpt`: Brief description
- `date`: Publication date
- `category`: Article category

### PDF Documents

Fund documents are located in `client/public/documents/`:

- `PESO-Fund-Overview.pdf`
- `PESO-Principal-Terms.pdf`

To update documents, replace these files with new versions (keep the same filenames).

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect the Next.js configuration
5. Click "Deploy"

**Environment Variables:**

The following environment variables are automatically injected by the Manus platform:

- `VITE_APP_TITLE` - Website title
- `VITE_APP_LOGO` - Logo path
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

No additional environment variables are required for basic deployment.

### Deploy to Other Platforms

The site can be deployed to any static hosting platform that supports Node.js:

- **Netlify:** Connect repository and deploy
- **Cloudflare Pages:** Connect repository and deploy
- **AWS Amplify:** Connect repository and deploy

Build settings:
- **Build command:** `pnpm build`
- **Output directory:** `client/dist`
- **Node version:** 22.x

## SEO & Analytics

### SEO Configuration

- **Sitemap:** Available at `/sitemap.xml`
- **Robots.txt:** Available at `/robots.txt`
- **Meta tags:** Update in individual page components

### Analytics

Analytics are integrated via the Manus platform. The analytics script is automatically injected in `client/index.html`.

## Compliance & Legal

### Confidential Disclaimer

Every page includes a footer disclaimer:

> "CONFIDENTIAL DOCUMENT. Not an offer to sell securities. Service providers and terms per governing documents. Securities are offered only through confidential private placement memorandum."

This disclaimer is rendered in `client/src/components/Footer.tsx`.

### Cookie Banner

A minimal cookie consent banner is implemented in `client/src/components/CookieBanner.tsx`. User consent is stored in localStorage.

### Investor Eligibility

The website clearly states that PESO is available only to institutional and accredited investors. The contact form includes investor type selection to qualify inquiries.

## Redirects

The following redirects are implemented in `client/src/App.tsx`:

- `/platform` → `/peso-fund`
- `/funds` → `/peso-fund`

These are 301 redirects implemented via JavaScript navigation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The site follows WCAG 2.2 AA guidelines:

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators on interactive elements
- Sufficient color contrast ratios
- Responsive design for all screen sizes

## Performance

Optimizations included:

- Lazy loading for images
- Prefetching for internal links
- Optimized font loading via Google Fonts
- Minimal JavaScript bundle size
- Static asset caching

## Support

For technical issues or questions about the website, contact the development team.

For investor inquiries, use the contact form at `/contact` or email investors@trimesacapital.com.

## License

© 2025 TriMesa Capital Partners. All rights reserved.

This website and its content are confidential and proprietary. Unauthorized use, distribution, or reproduction is strictly prohibited.
