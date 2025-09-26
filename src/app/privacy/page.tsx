'use client';
import React from 'react';
import {
  IconArrowLeft,
  IconShield,
  IconEye,
  IconLock,
  IconCookie,
  IconDatabase,
  IconMail,
  IconWorld,
} from '@tabler/icons-react';

const PrivacyPolicy = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-[60px] max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className="mr-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <IconArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-h1 font-bold text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-white/70">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <IconShield className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  1. Introduction
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                At <strong>OlhaChernysh.dev</strong>, we are committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our website, applications, and services (collectively, the{' '}
                {'Service'}).
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <IconDatabase className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  2. Information We Collect
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                    <IconEye className="w-5 h-5 mr-2" />
                    Personal Information You Provide
                  </h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>
                      • Account information (name, email address, username)
                    </li>
                    <li>• Profile information and preferences</li>
                    <li>
                      • Content you create, upload, or share through the Service
                    </li>
                    <li>
                      • Communications with us (support requests, feedback)
                    </li>
                    <li>
                      • Payment information (processed securely by third-party
                      providers)
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                    <IconWorld className="w-5 h-5 mr-2" />
                    Automatically Collected Information
                  </h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>
                      • Device information (IP address, browser type, operating
                      system)
                    </li>
                    <li>
                      • Usage data (pages visited, features used, time spent)
                    </li>
                    <li>• Log files and analytics data</li>
                    <li>• Cookies and similar tracking technologies</li>
                    <li>• Location information (if you grant permission)</li>
                  </ul>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                    <IconMail className="w-5 h-5 mr-2" />
                    Information from Third Parties
                  </h3>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>
                      • Social media login information (if you choose to connect
                      accounts)
                    </li>
                    <li>
                      • Information from business partners or service providers
                    </li>
                    <li>
                      • Publicly available information from social media
                      platforms
                    </li>
                    <li>• Analytics and advertising partners</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We use the information we collect for various purposes,
                including:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Service Operation
                    </h4>
                    <p className="text-white/70 text-sm">
                      Provide, maintain, and improve our Service functionality
                    </p>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Communication
                    </h4>
                    <p className="text-white/70 text-sm">
                      Send updates, notifications, and respond to inquiries
                    </p>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Personalization
                    </h4>
                    <p className="text-white/70 text-sm">
                      Customize content and features based on your preferences
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                    <h4 className="font-medium text-white mb-2">Security</h4>
                    <p className="text-white/70 text-sm">
                      Protect against fraud, abuse, and security threats
                    </p>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                    <h4 className="font-medium text-white mb-2">Analytics</h4>
                    <p className="text-white/70 text-sm">
                      Analyze usage patterns to improve our services
                    </p>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Legal Compliance
                    </h4>
                    <p className="text-white/70 text-sm">
                      Meet legal obligations and enforce our terms
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                4. How We Share Your Information
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may
                share your information in the following circumstances:
              </p>

              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-yellow-400/50">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Service Providers
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Third-party companies that help us operate our Service
                    (hosting, analytics, payment processing)
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-red-400/50">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Legal Requirements
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    When required by law, court order, or to protect our rights
                    and safety
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-blue-400/50">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Business Transfers
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    In connection with mergers, acquisitions, or asset sales
                    (with notice to users)
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-green-400/50">
                  <h3 className="text-lg font-medium text-white mb-2">
                    With Your Consent
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    When you explicitly agree to share information with third
                    parties
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <IconLock className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  5. Data Security
                </h2>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                <p className="text-white/80 leading-relaxed text-sm">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconLock className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">Encryption</h4>
                  <p className="text-white/70 text-sm">
                    Data encrypted in transit and at rest
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconShield className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">
                    Access Controls
                  </h4>
                  <p className="text-white/70 text-sm">
                    Limited access to authorized personnel
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconDatabase className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-medium text-white mb-2">
                    Regular Audits
                  </h4>
                  <p className="text-white/70 text-sm">
                    Ongoing security assessments
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <IconCookie className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  6. Cookies and Tracking
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our Service:
              </p>

              <div className="space-y-3">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">
                      Essential Cookies
                    </h4>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                      Required
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Necessary for basic website functionality and security
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">
                      Analytics Cookies
                    </h4>
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                      Optional
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Help us understand how users interact with our Service
                  </p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">
                      Preference Cookies
                    </h4>
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                      Optional
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Remember your settings and personalize your experience
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Under Australian Privacy Principles (APPs) and applicable
                privacy laws, you have certain rights regarding your personal
                information:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-3">Data Rights</h4>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate data</li>
                    <li>• Request deletion of your data</li>
                    <li>• Data portability</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-3">
                    Communication Preferences
                  </h4>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Opt-out of marketing emails</li>
                    <li>• Manage notification settings</li>
                    <li>• Control cookie preferences</li>
                    <li>• Account deactivation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>How to Exercise Your Rights:</strong> Contact us at
                  info@olhachernysh.com or use the account settings in your
                  profile. We will respond within 30 days.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                8. Data Retention
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We retain your personal information only as long as necessary
                for the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 border border-white/10">
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>
                    • <strong>Account Data:</strong> Until account deletion + 30
                    days
                  </li>
                  <li>
                    • <strong>Transaction Records:</strong> 7 years for
                    tax/legal purposes
                  </li>
                  <li>
                    • <strong>Analytics Data:</strong> Aggregated data retained
                    indefinitely
                  </li>
                  <li>
                    • <strong>Support Communications:</strong> 3 years after
                    resolution
                  </li>
                </ul>
              </div>
            </section>

            {/* International Transfers */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-white/80 leading-relaxed">
                Your information may be transferred to and processed in
                countries other than Australia. We ensure appropriate safeguards
                are in place to protect your information in accordance with
                Australian Privacy Principles and applicable data protection
                laws.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                10. Children&apos;s Privacy
              </h2>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-white/80 leading-relaxed">
                  Our Service is not intended for children under 18 years of
                  age. We do not knowingly collect personal information from
                  children under 18. If we become aware that we have collected
                  personal information from a child under 18, we will take steps
                  to delete such information.
                </p>
              </div>
            </section>

            {/* Updates to Policy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                11. Updates to This Policy
              </h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes by posting the new Privacy
                Policy on this page and updating the {'Last updated'} date. We
                encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                12. Contact Information
              </h2>
              <div className="bg-slate-700/50 rounded-lg p-4 border border-white/10">
                <p className="text-white/80 leading-relaxed mb-2">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us at:
                </p>
                <div className="text-white/70 space-y-1 text-sm">
                  <p>
                    <strong>Company:</strong> OlhaChernysh.dev
                  </p>
                  <p>
                    <strong>ABN:</strong> 52 699 655 692
                  </p>
                  <p>
                    <strong>Email:</strong> info@olhachernysh.com
                  </p>
                  <p>
                    <strong>Location:</strong> Pyrmont, Sydney, NSW, Australia
                  </p>
                  <p>
                    <strong>Privacy Officer:</strong> info@olhachernysh.com
                  </p>
                </div>
              </div>
            </section>

            {/* Australian Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                13. Australian Privacy Compliance
              </h2>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-white/80 leading-relaxed text-sm">
                  This Privacy Policy is designed to comply with the Australian
                  Privacy Principles (APPs) under the Privacy Act 1988 (Cth). If
                  you believe we have breached your privacy, you can make a
                  complaint to us directly or to the Office of the Australian
                  Information Commissioner (OAIC).
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            This privacy policy is effective as of{' '}
            {new Date().toLocaleDateString()} and will remain in effect except
            with respect to any changes in its provisions in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
