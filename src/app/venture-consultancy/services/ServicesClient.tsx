"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

export default function ServicesClient() {
  const serviceCategories = [
    {
      name: "🧠 Core Automation Services",
      description: "Directly eliminate manual work and free up your team's time.",
      services: [
        {
          id: "process-automation",
          icon: "⚙️",
          title: "Process Automation",
          badge: "Most Popular",
          outcome: "Remove repetitive admin, approvals, and email chasing — freeing up hours every week.",
          problems: [
            "Chasing managers for approvals",
            "Manually copying data between systems",
            "Missing deadlines due to manual tracking",
            "Employees wasting hours on 'copy-paste' tasks"
          ],
          details: [
            "Document approval workflows",
            "Request management systems",
            "Email & notification automation",
            "Form processing automation"
          ],
          result: "Faster approvals, fewer errors, and significantly less email traffic."
        },
        {
          id: "onboarding-offboarding",
          icon: "👥",
          title: "Onboarding & Offboarding",
          badge: "Best for Growing Teams",
          outcome: "Ensure every new hire is set up perfectly and every exit is secure, without manual checklists.",
          problems: [
            "New starters waiting days for system access",
            "HR tracking onboarding in messy spreadsheets",
            "Leavers keeping access to systems for weeks",
            "Important equipment or training steps getting missed"
          ],
          details: [
            "Automated provisioning for M365",
            "Equipment & asset tracking",
            "Document collection workflows",
            "Secure exit & access revocation"
          ],
          result: "A professional first impression for staff and total security for your data."
        },
        {
          id: "power-apps",
          icon: "📱",
          title: "Power Apps Development",
          outcome: "Build custom business tools that solve specific operational headaches, without the 'big software' price tag.",
          problems: [
            "Using paper forms or outdated Excel sheets",
            "Processes that only work if you're in the office",
            "Double-handling data across different platforms",
            "Needing a custom tool but lacking a developer"
          ],
          details: [
            "Mobile-friendly business apps",
            "Inventory & field service tools",
            "Client portals & request forms",
            "Secure database (Dataverse) apps"
          ],
          result: "Custom tools that fit your business perfectly, accessible from any device."
        }
      ]
    },
    {
      name: "🏗️ Platform Foundations",
      description: "Optimise the tools you already own for better security and efficiency.",
      services: [
        {
          id: "licence-optimisation",
          icon: "📊",
          title: "Microsoft 365 Optimisation",
          outcome: "Stop paying for 3rd party tools you don't need. Get maximum value from your existing licences.",
          problems: [
            "Paying for Zoom, Calendly, or Monday.com unnecessarily",
            "Teams only being used for 'chat' and nothing else",
            "Unsure if you're on the right licence for your needs",
            "User frustration with 'too many icons' they don't use"
          ],
          details: [
            "Licence usage & cost analysis",
            "Feature implementation roadmap",
            "User adoption & training",
            "ROI optimisation planning"
          ],
          result: "Lower software costs and a team that actually understands their tools."
        },
        {
          id: "sharepoint-cleanup",
          icon: "🗂️",
          title: "SharePoint Clean-Up",
          outcome: "Turn a chaotic file system into an intuitive, searchable digital workspace that your team actually uses.",
          problems: [
            "Can't find documents when you need them",
            "Multiple 'Final' versions of the same file",
            "Folders-within-folders-within-folders",
            "Sensitive data shared with the wrong people"
          ],
          details: [
            "Site structure & navigation redesign",
            "Document library organisation",
            "Permission & security review",
            "Metadata (no more folders) setup"
          ],
          result: "A single source of truth for all company documents, secured and searchable."
        },
        {
          id: "governance-security",
          icon: "🛡️",
          title: "Governance & CoE",
          badge: "Best for IT Leaders",
          outcome: "Regain control over your digital environment and ensure your data isn't being leaked through rogue automations.",
          problems: [
            "Uncontrolled growth of 'Citizen Developer' apps",
            "Data being shared outside the business by mistake",
            "Broken automations with no one to fix them",
            "No clear policy on who can build what"
          ],
          details: [
            "Centre of Excellence (CoE) setup",
            "Data Loss Prevention (DLP) policies",
            "Environment security strategy",
            "Monitoring & audit reporting"
          ],
          result: "Total visibility and peace of mind over your Power Platform environment."
        }
      ]
    },
    {
      name: "📊 Insight & Partners",
      description: "Data-driven decisions and specialist support for IT providers.",
      services: [
        {
          id: "power-bi",
          icon: "📈",
          title: "Power BI Dashboards",
          outcome: "Turn your raw data into actionable insights and make decisions based on facts, not gut feeling.",
          problems: [
            "Manual reporting taking days every month",
            "Data scattered across 10 different spreadsheets",
            "Hard to see real-time performance of the business",
            "Inconsistent data reporting across teams"
          ],
          details: [
            "Executive & operational dashboards",
            "Real-time data visualisation",
            "Automated report delivery",
            "Cross-system data integration"
          ],
          result: "Instant visibility into your KPIs, saving days of manual report-building."
        },
        {
          id: "msp-partner",
          icon: "🔧",
          title: "MSP Partner Support",
          outcome: "White-label Power Platform expertise for IT providers who need specialist skills for their own clients.",
          problems: [
            "Clients asking for Power Apps you can't build",
            "Lack of internal Power Platform expertise",
            "Turning down projects due to skill gaps",
            "Governance questions you can't answer"
          ],
          details: [
            "Outsourced project delivery",
            "Technical troubleshooting support",
            "Governance & security consulting",
            "White-label / Behind-the-scenes"
          ],
          result: "Retain your clients and unlock high-value projects without hiring full-time."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      <BinaryBackground intensity="low" speed="slow" className="text-gray-400" />
      <FloatingBinary intensity="low" speed="slow" color="text-gray-300" />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              Practical Microsoft 365 & Power Platform Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              You already pay for Microsoft 365 — I help you turn it into real time-saving systems. 
              From approvals and onboarding to dashboards and governance, everything here is designed to 
              <strong> reduce admin, remove manual work, and scale without extra licences.</strong>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/venture-consultancy/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block text-lg"
              >
                Book a Free 15-Minute Audit
              </Link>
              <p className="text-sm text-gray-500 mt-3 italic">No sales pitch. No obligation. Just practical advice.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grouped Services Sections */}
      {serviceCategories.map((category, catIdx) => (
        <section key={category.name} className={`relative z-10 py-16 px-4 sm:px-6 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-indigo-50/30'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">{category.description}</p>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {category.services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  id={service.id}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group scroll-mt-24"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {service.badge && (
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-6 leading-relaxed italic">&quot;{service.outcome}&quot;</p>
                  
                  <div className="mb-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <p className="text-sm font-bold text-red-700 mb-2 uppercase tracking-wider">Common problems I fix:</p>
                    <ul className="space-y-1">
                      {service.problems.map((prob, i) => (
                        <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                          <span className="flex-shrink-0 mt-1">•</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">What's Included:</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm font-bold text-green-700 flex items-center gap-2">
                      <span className="text-lg">🎯</span>
                      <span>RESULT: {service.result}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Trust signals section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Work With Venture Consultancy?</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { label: "Experience", text: "5+ years Power Platform expertise" },
              { label: "Specialist", text: "Focus purely on M365 automation" },
              { label: "Honest", text: "No licence selling or upselling" },
              { label: "SME-Focused", text: "Built for small & medium businesses" },
              { label: "Fixed-Scope", text: "Clear, fixed pricing & delivery" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-indigo-600 text-2xl font-bold mb-2">✓</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{item.label}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassuring How It Works Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">A simple, transparent process to get you results fast.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Free 15-Minute Audit",
              description: "Quick review of your Microsoft 365 setup and pain points. No prep needed, just an honest conversation."
            },
            {
              step: "2",
              title: "Clear Proposal",
              description: "Fixed scope, clear pricing, and honest advice — even if the answer is &quot;don't do this yet&quot;."
            },
            {
              step: "3",
              title: "Implementation",
              description: "Build, test, and deploy with regular updates and minimal disruption to your daily operations."
            },
            {
              step: "4",
              title: "Handover & Support",
              description: "Detailed documentation, team training, and optional ongoing support to ensure long-term success."
            }
          ].map((step, idx) => (
            <motion.div
              key={step.step}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Improved Final CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to reclaim your team's time?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book a free 15-minute audit to discuss your specific challenges. 
            I'll show you exactly how to get more value from the tools you already own.
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/venture-consultancy/contact"
              className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block text-lg"
            >
              Book Your Free 15-Minute Audit
            </Link>
            <div className="flex flex-col items-center gap-1 opacity-90">
              <p className="text-sm font-semibold italic text-indigo-100 tracking-wide">No sales pitch. No obligation. Just practical advice.</p>
              <div className="w-24 h-0.5 bg-indigo-400/30 rounded-full mt-1"></div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/venture-consultancy/health-check"
                className="text-white font-semibold border-b border-white/40 hover:border-white transition-colors"
              >
                Learn more about Health Checks →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
