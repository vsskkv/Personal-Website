"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';
import { SimpleAvatar } from '@/components/SimpleAvatar';
import StructuredData from '@/components/StructuredData';

export default function VentureConsultancyClient() {
  const faqs = [
    {
      question: "What can be automated with Microsoft 365?",
      answer: "Approvals, onboarding, document handling, notifications, reporting, and many admin-heavy processes using Power Automate, SharePoint, and Power Apps."
    },
    {
      question: "Do I need new Microsoft licences?",
      answer: "In most cases, no. I focus on getting value from the licences you already pay for by utilising the Power Platform features included in your subscription."
    },
    {
      question: "Do you work with small businesses only?",
      answer: "Yes — I specialise in UK-based SMEs who want practical automation without the enterprise complexity or overhead."
    },
    {
      question: "Is the health check really free?",
      answer: "Yes. It is a no-obligation 15-minute call to identify quick wins and next steps for your Microsoft 365 setup."
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      <StructuredData />
      <BinaryBackground intensity="low" speed="slow" className="text-gray-400" />
      <FloatingBinary intensity="low" speed="slow" color="text-gray-300" />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="/Venture Consultancy logo RB.png" 
                alt="Microsoft 365 automation consultant for UK small businesses" 
                className="max-w-xs sm:max-w-sm md:max-w-md h-auto"
              />
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Power Platform & Microsoft 365 Automation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">UK Small Businesses</span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-indigo-600 font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Turn Microsoft 365 into a time-saving engine for your business.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              You are already paying for Microsoft 365. I help you actually get value from it by eliminating manual admin and repetitive tasks that waste the time of your team.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/venture-consultancy/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              Book Your Free 15-Minute Audit
            </Link>
            <Link
              href="/venture-consultancy/services"
              className="border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 text-center"
            >
              View M365 Automation Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEO Location Signal Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 font-medium">
            I work with small and medium businesses across the UK, providing Microsoft 365 automation and Power Platform solutions remotely and locally where required. Supporting UK SMEs to scale without extra overhead.
          </p>
        </div>
      </section>

      {/* Filtering Section (Is this for you?) */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-green-500 text-3xl">✓</span> This is for you if...
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>You are a <strong>small business (5–100 staff)</strong> based in the UK.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>You already use <strong>Microsoft 365</strong> but feel you are only using 10% of its power.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>Admin, approvals, and chasing paperwork waste hours of the week of your team.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>You want automation <strong>without enterprise complexity</strong> or expensive new software.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-red-500 text-3xl">×</span> This probably is not for you if...
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg opacity-80">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span>You do not use Microsoft 365 (Google Workspace / Other).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span>You are looking for a £99 quick fix for a complex problem.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span>You are looking for a generic IT support/helpdesk contract.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Outcome-Led Services Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How I Help Small Businesses Automate Microsoft 365</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">I solve business pains, not just &quot;build apps&quot;. People buy relief from pain, not Power Automate. Here is how I help.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "⚙️",
              title: "Power Automate Process Automation",
              outcome: "Eliminate manual admin, approvals, and email chasing — saving the team hours every week.",
              seo: "I help UK small businesses automate approvals, document workflows, and repetitive admin using Microsoft Power Automate and SharePoint — reducing errors and saving hours each week.",
              tech: "Expert Power Automate & SharePoint Workflows",
              slug: "process-automation"
            },
            {
              icon: "📋",
              title: "Power Platform Onboarding Automation",
              outcome: "Ensure every new hire is set up perfectly and every exit is handled securely, without manual checklists.",
              seo: "Streamline employee lifecycle management with automated M365 onboarding. Remove the risk of manual checklists and ensure 100% data security during offboarding using the Power Platform.",
              tech: "Using Power Apps, Power Automate & MS Forms",
              slug: "onboarding-offboarding"
            },
            {
              icon: "🏗️",
              title: "SharePoint Automation & Clean-Up",
              outcome: "Turn a messy file system into an intuitive, searchable digital workspace that the team actually uses.",
              seo: "Transform chaotic SharePoint sites into structured, secure automation hubs. I help UK firms organise document libraries and implement metadata for faster file retrieval.",
              tech: "Using SharePoint & Teams",
              slug: "sharepoint-cleanup"
            },
            {
              icon: "📊",
              title: "Microsoft 365 Licence Optimisation",
              outcome: "Stop paying for 3rd party tools you do not need. I identify what can be built for free inside your current licence.",
              seo: "Identify unnecessary software spend. Many UK businesses pay for Zoom or Trello when they already own equivalent tools within their existing Microsoft 365 subscription.",
              tech: "Licence & Feature Optimisation",
              slug: "licence-optimisation"
            },
            {
              icon: "🛡️",
              title: "Power Platform Governance & Security",
              outcome: "Identify who is building what and ensure company data is not being leaked through rogue automations.",
              seo: "Secure your environment with proper Power Platform governance. I help IT leaders implement Centre of Excellence (CoE) policies to prevent data leaks and maintain control.",
              tech: "Centre of Excellence & Security Policies",
              slug: "governance-security"
            },
            {
              icon: "🤝",
              title: "MSP Partner Support (UK)",
              outcome: "Outsourced Power Platform expertise for IT providers who need specialist skills for their own clients.",
              seo: "Specialist white-label Power Platform consultancy for UK Managed Service Providers (MSPs). Unlock high-value automation projects for your clients without full-time hiring.",
              tech: "White-label Technical Consultancy",
              slug: "msp-partner"
            }
          ].map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-indigo-600 font-bold mb-4 italic">&quot;{service.outcome}&quot;</p>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{service.seo}</p>
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  href={`/venture-consultancy/services/#${service.slug}`}
                  className="text-indigo-600 font-semibold hover:underline text-sm flex items-center gap-2"
                >
                  Learn about {service.title.split(' ')[0]} automation →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-indigo-50/30">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SimpleAvatar 
              src="/images/avatar.png" 
              alt="Vikram Singh Kainth - Microsoft 365 Automation Consultant UK" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">I prefer simple, practical solutions over enterprise fluff.</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I work with UK small businesses because they already pay for powerful tools — they are just not set up properly.              My background as a Senior Developer means I know the complex stuff, but I choose to build solutions that are 
              <strong> easy to use, documented, and maintainable.</strong>
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I do not sell licences and I do not upsell software. My goal is to help you get maximum value from 
              what you have already invested in.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 font-semibold">
              <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full">5+ Years Experience</span>
              <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full">UK Based</span>
              <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full">Microsoft Certified</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Simple Process. No Surprises.
          </motion.h2>
          <p className="text-gray-600 text-center mb-12 text-lg">People want to know what happens next. Here is my 4-step approach.</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free 15-min call",
                description: "Understand your setup and identify your biggest pain points. No sales pitch."
              },
              {
                step: "2",
                title: "Quick Audit",
                description: "I identify 2-3 clear automation opportunities within your existing M365 setup."
              },
              {
                step: "3",
                title: "Fixed Proposal",
                description: "A clear, fixed-scope recommendation. You know exactly what it costs and what you get."
              },
              {
                step: "4",
                title: "Build & Handover",
                description: "Documentation and handover. Easy to use, supported, and you own the solution."
              }
            ].map((step, idx) => (
              <motion.div
                key={step.step}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section id="industries" className="relative z-10 py-16 px-4 sm:px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Industries I Work With
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I specialise in the UK industries that are drowning in document workflows, approvals, and compliance admin.
          </motion.p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Solicitors", slug: "solicitors" },
              { name: "Accountants", slug: "accountants" },
              { name: "Recruiters", slug: "recruiters" },
              { name: "Estate Agents", slug: "estate-agents" },
              { name: "Construction", slug: "construction" },
              { name: "Manufacturers", slug: "manufacturers" },
              { name: "Health Clinics", slug: "health-clinics" },
              { name: "SMEs", slug: "smes" }
            ].map((industry, idx) => (
              <motion.div
                key={industry.name}
                className="bg-white rounded-lg p-6 text-center border border-gray-200 h-full flex items-center justify-center shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="font-bold text-indigo-900">{industry.name} Automation</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Social Proof Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            className="text-2xl font-medium italic mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            &quot;Vikram helped us automate onboarding and approvals — we saved several hours per week almost immediately. No fluff, just practical results.&quot;
          </motion.p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold">SB</div>
            <div className="text-left">
              <p className="font-bold">Small Business Owner</p>
              <p className="text-sm opacity-80 text-indigo-200 uppercase tracking-widest">UK-Based Services Firm</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="font-bold text-xl uppercase tracking-widest">Power Platform</div>
            <div className="font-bold text-xl uppercase tracking-widest">Microsoft 365</div>
            <div className="font-bold text-xl uppercase tracking-widest">SharePoint</div>
            <div className="font-bold text-xl uppercase tracking-widest">Power Automate</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Microsoft 365 Automation FAQs
          </motion.h2>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Check CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Free Microsoft 365 Health Check
          </motion.h2>
          <motion.p
            className="text-xl mb-10 opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get a quick review of your setup, identify 2-3 clear automation opportunities, and get honest advice. <strong>No sales pitch. No obligation.</strong>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/venture-consultancy/contact"
              className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block text-lg"
            >
              Book Your Free M365 Audit
            </Link>
            <Link
              href="/venture-consultancy/health-check"
              className="bg-indigo-500/30 backdrop-blur-sm border-2 border-white text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-block text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact Navigation */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <img src="/Venture Consultancy logo RB.png" alt="Venture Consultancy Logo" className="h-10 w-auto mb-4" />
            <p className="text-gray-500 font-medium">Practical Microsoft 365 &amp; Power Platform automation for UK businesses.</p>
          </div>
          <div className="flex gap-8">
            <Link href="/venture-consultancy/services" className="text-gray-600 hover:text-indigo-600 font-medium">Services</Link>
            <Link href="/venture-consultancy/health-check" className="text-gray-600 hover:text-indigo-600 font-medium">Health Check</Link>
            <Link href="/venture-consultancy/contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
