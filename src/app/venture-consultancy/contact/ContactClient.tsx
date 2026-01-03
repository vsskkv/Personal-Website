"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

export default function ContactClient() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      <BinaryBackground intensity="low" speed="slow" className="text-gray-400" />
      <FloatingBinary intensity="low" speed="slow" color="text-gray-300" />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img 
              src="/Venture Consultancy logo RB.png" 
              alt="Venture Consultancy Logo" 
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto"
            />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book Your Free 15-Minute Microsoft 365 Audit
          </motion.h1>
          <motion.p
            className="text-lg text-indigo-600 font-semibold uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            No sales pitch. No pressure. Just honest advice.
          </motion.p>
        </div>
      </section>

      {/* Trust & Process Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-indigo-900 rounded-2xl p-8 text-white shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6">What happens next?</h2>
          <ul className="space-y-4">
            {[
              "I will review your message personally (I work directly with clients, no hand-offs)",
              "You will hear back within 24–48 hours",
              "If it makes sense, we will book a free 15-minute call",
              "No obligation to proceed with any paid work"
            ].map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-indigo-100">
                <span className="text-indigo-400 text-xl flex-shrink-0">✓</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              action="https://formspree.io/f/xeozrore"
              method="POST"
              className="flex flex-col gap-6"
            >
              <input 
                type="hidden" 
                name="_redirect" 
                value="https://vikramsinghkainth.com/venture-consultancy/contact?success=true" 
              />
              <input 
                type="hidden" 
                name="_subject" 
                value="Venture Consultancy - New Contact Form Submission" 
              />

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500"
                    placeholder="Your Company (Optional)"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500"
                    placeholder="+44 123 456 7890"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                  What are you interested in? *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 bg-white"
                  defaultValue="health-check"
                >
                  <option value="health-check">Free 15-Minute Health Check</option>
                  <option value="process-automation">Process Automation</option>
                  <option value="onboarding-offboarding">Onboarding &amp; Offboarding</option>
                  <option value="m365-optimisation">Microsoft 365 Optimisation</option>
                  <option value="sharepoint-cleanup">SharePoint Clean-Up</option>
                  <option value="governance-coe">Governance &amp; CoE</option>
                  <option value="msp-partner">MSP Partner Support</option>
                  <option value="power-apps">Power Apps Development</option>
                  <option value="power-bi">Power BI Dashboards</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  What is taking the most time or causing frustration right now? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none text-gray-900 placeholder-gray-500"
                  placeholder="Tell me about your current setup, or what challenges you are facing. (e.g. 'Approvals take too long', 'SharePoint is messy')"
                />
                <p className="mt-2 text-xs text-gray-500 italic">
                  Examples: Approvals take too long • Onboarding is manual • SharePoint is messy • Unsure what we are paying for in M365
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg"
                >
                  Book My Free Audit
                </button>
                <p className="text-sm text-gray-500 font-medium">
                  No spam. No follow-ups you did not ask for.
                </p>
              </div>
            </form>
          </motion.div>

          {/* This is for you if... section */}
          <motion.div
            className="mt-16 grid md:grid-cols-2 gap-8 text-left border-t border-gray-200 pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">✓</span> This is a good fit if:
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• You already use Microsoft 365</li>
                <li>• You want to reduce admin and manual work</li>
                <li>• You prefer practical solutions over sales talk</li>
                <li>• You want to work directly with a specialist</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <p className="text-indigo-900 font-medium italic">
                &quot;I work directly with small businesses — no account managers, no handoffs. You get senior expertise from start to finish.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="relative z-10 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="/venture-consultancy"
              className="border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300"
            >
              Back to Consultancy Home
            </Link>
            <Link
              href="/venture-consultancy/services"
              className="border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
