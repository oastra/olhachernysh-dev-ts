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
  return (
    <html lang="en">
      <body>
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
