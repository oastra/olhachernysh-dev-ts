import type { Metadata } from 'next';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
