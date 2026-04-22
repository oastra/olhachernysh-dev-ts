import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Olha Chernysh | Software Engineer & Web Developer',
  description:
    'Portfolio of Olha Chernysh, a Sydney-based Software Engineer specializing in modern web technologies including JavaScript, React, Node.js, Next.js, and scalable custom solutions.',
  keywords: [
    'Olha Chernysh',
    'Software Engineer',
    'Web Developer',
    'Full-Stack Developer',
    'JavaScript Engineer',
    'Next.js',
    'Node.js',
    'React',
    'Tailwind CSS',
    'Custom Web Development',
    'Sydney Developer',
    'Frontend Developer',
    'Backend Developer',
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
    title: 'Olha Chernysh | Software Engineer & Web Developer',
    description:
      'Sydney-based Software Engineer crafting modern, high-performance websites and applications using React, Next.js, Node.js, and more.',
    url: 'https://olhachernysh.dev',
    siteName: 'Olha Chernysh – Software Engineer Portfolio',
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
    name: 'Olha Chernysh — Software Engineer',
    description:
      'Portfolio of Olha Chernysh, a Sydney-based Software Engineer building custom web applications with React, Next.js and Node.js.',
    inLanguage: 'en',
    publisher: { '@id': 'https://olhachernysh.dev/#me' },
  };

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://olhachernysh.dev/#me',
    name: 'Olha Chernysh',
    url: 'https://olhachernysh.dev/',
    jobTitle: 'Software Engineer & Web Developer',
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
        {/* Cloudflare Turnstile script */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
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
