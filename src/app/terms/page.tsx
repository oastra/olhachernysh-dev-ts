'use client';
import React from 'react';
import {
  IconArrowLeft,
  IconShield,
  IconUser,
  IconAlertTriangle,
  IconFileText,
} from '@tabler/icons-react';

const TermsOfService = () => {
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
              Terms of Service
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
                <IconFileText className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  1. Introduction
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                Welcome to our service. These Terms of Service ({'Terms'})
                govern your use of our website, applications, and services
                (collectively, the {'Service'}) operated by{' '}
                <strong>OLHACHERNYSH.DEV</strong>
                (ABN: 52 699 655 692) ({'we'}, {'us'}, or {'our'}). By accessing
                or using our Service, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Acceptance */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <IconUser className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  2. Acceptance of Terms
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                By creating an account, accessing, or using our Service, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms. If you do not agree to these Terms, you
                may not use our Service.
              </p>
              <p className="text-white/80 leading-relaxed">
                You must be at least 18 years old to use this Service. By using
                the Service, you represent and warrant that you meet this age
                requirement.
              </p>
            </section>

            {/* User Accounts */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                3. User Accounts
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-blue-400/50">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Account Creation
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    To access certain features of our Service, you must create
                    an account. You agree to provide accurate, current, and
                    complete information during registration.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-green-400/50">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Account Security
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    You are responsible for safeguarding your account
                    credentials and for all activities that occur under your
                    account. Notify us immediately of any unauthorized use.
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <IconShield className="w-6 h-6 text-yellow-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  4. Acceptable Use Policy
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                You agree not to use the Service for any unlawful purpose or in
                any way that could damage, disable, overburden, or impair the
                Service. Prohibited activities include, but are not limited to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Violating any applicable laws or regulations</li>
                    <li>
                      • Impersonating others or providing false information
                    </li>
                    <li>• Distributing malware or harmful code</li>
                    <li>• Attempting unauthorized access to systems</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Harassment, abuse, or threatening behavior</li>
                    <li>• Spam or unsolicited communications</li>
                    <li>• Copyright or trademark infringement</li>
                    <li>• Data scraping or automated data collection</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Service Availability */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                5. Service Availability
              </h2>
              <p className="text-white/80 leading-relaxed">
                We strive to maintain the availability of our Service, but we do
                not guarantee uninterrupted access. The Service may be
                temporarily unavailable due to maintenance, updates, or
                circumstances beyond our control. We reserve the right to modify
                or discontinue the Service at any time.
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                6. Privacy
              </h2>
              <p className="text-white/80 leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, use, and protect your information when you use our
                Service. By using the Service, you consent to the collection and
                use of information in accordance with our Privacy Policy.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                The Service and its original content, features, and
                functionality are owned by <strong>OLHACHERNYSH.DEV</strong>
                (ABN: 52 699 655 692) and are protected by international
                copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-white/80 text-sm">
                  <strong>User Content:</strong> You retain ownership of content
                  you submit to the Service. However, by submitting content, you
                  grant us a worldwide, non-exclusive, royalty-free license to
                  use, modify, and distribute your content in connection with
                  the Service.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <IconAlertTriangle className="w-6 h-6 text-orange-400 mr-3" />
                <h2 className="text-xl font-semibold text-white m-0">
                  8. Disclaimers
                </h2>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <p className="text-white/80 leading-relaxed text-sm">
                  THE SERVICE IS PROVIDED {'AS IS'}AND {'AS AVAILABLE'} WITHOUT
                  WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                  IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                  A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-white/80 leading-relaxed">
                To the fullest extent permitted by law, we shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-xl font-semibred text-white mb-4">
                10. Termination
              </h2>
              <p className="text-white/80 leading-relaxed">
                We may terminate or suspend your account and access to the
                Service immediately, without prior notice, for conduct that we
                believe violates these Terms or is harmful to other users, us,
                or third parties.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-white/80 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify users of significant changes via email or through the
                Service. Your continued use of the Service after such
                modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                12. Contact Information
              </h2>
              <div className="bg-slate-700/50 rounded-lg p-4 border border-white/10">
                <p className="text-white/80 leading-relaxed mb-2">
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <div className="text-white/70 space-y-1 text-sm">
                  <p>
                    <strong>Company:</strong> [YOUR COMPANY NAME]
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
                    <strong>Website:</strong> [YOUR WEBSITE URL]
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                13. Governing Law
              </h2>
              <p className="text-white/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of <strong>New South Wales, Australia</strong>,
                without regard to its conflict of law principles. Any disputes
                arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts in{' '}
                <strong>New South Wales, Australia</strong>.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            These terms are effective as of {new Date().toLocaleDateString()}{' '}
            and will remain in effect except with respect to any changes in
            their provisions in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
