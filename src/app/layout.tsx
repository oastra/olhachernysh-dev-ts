import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Web Developer Sydney — Olha Chernysh | Custom Websites',
  description:
    'Freelance web developer in Sydney building fast, custom websites, landing pages and e-commerce stores for small businesses and founders. Next.js, React, Node.js. Get a fixed-price quote.',
  keywords: [
    'web developer Sydney',
    'freelance web developer Sydney',
    'hire web developer Sydney',
    'custom website developer Sydney',
    'small business website Sydney',
    'e-commerce website developer Sydney',
    'website redesign Sydney',
    'landing page developer Sydney',
    'Next.js developer Sydney',
    'React developer Sydney',
    'Shopify alternative developer',
    'custom web app development',
    'MVP developer for startups',
    'website for small business Australia',
    'Olha Chernysh',
  ],
  authors: [{ name: 'Olha Chernysh', url: 'https://olhachernysh.dev' }],
  creator: 'Olha Chernysh',
  metadataBase: new URL('https://olhachernysh.dev'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Web Developer Sydney — Olha Chernysh | Custom Websites',
    description:
      'Freelance web developer in Sydney. Custom websites, landing pages and online stores built in Next.js, React and Node.js — designed to win clients and rank on Google.',
    url: 'https://olhachernysh.dev',
    siteName: 'Olha Chernysh — Web Developer Sydney',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Olha Chernysh Portfolio Preview',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },

  // ✅ Favicon & Manifest
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', rel: 'shortcut icon' }, // fallback
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',

  // ✅ Facebook Domain Verification
  verification: {
    google: 'km_qNRA1DJxmOfjzjJ8NrELAgi70BmdI9iIjEoVK7J8',
    other: {
      'facebook-domain-verification': 'wgkrfydrd2rpfihgk47e2j09ebnayr',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://olhachernysh.dev/#website',
    url: 'https://olhachernysh.dev/',
    name: 'Olha Chernysh — Web Developer Sydney',
    description:
      'Freelance web developer in Sydney building custom websites, landing pages and e-commerce stores for small businesses and founders.',
    inLanguage: 'en',
    publisher: { '@id': 'https://olhachernysh.dev/#me' },
  };

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://olhachernysh.dev/#me',
    name: 'Olha Chernysh',
    url: 'https://olhachernysh.dev/',
    jobTitle: 'Freelance Web Developer (Sydney)',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressCountry: 'AU',
    },
    worksFor: { '@id': 'https://olhachernysh.dev/#org' },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://olhachernysh.dev/#org',
    name: 'Olha Chernysh',
    url: 'https://olhachernysh.dev/',
    logo: 'https://olhachernysh.dev/apple-touch-icon.png',
    founder: { '@id': 'https://olhachernysh.dev/#me' },
    areaServed: 'AU',
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero-img-1.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Cloudflare Turnstile — only needed for contact form, defer until idle */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SBM45GGPYP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBM45GGPYP');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
