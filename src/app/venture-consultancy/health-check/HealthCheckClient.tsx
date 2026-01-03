"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

export default function HealthCheckClient() {
  const checklistItems = [
    {
      category: "Automation Opportunities",
      impact: "Identify where manual work is slowing your business down — and how much time automation could save.",
      items: [
        "Review of repetitive manual tasks",
        "Identification of automation candidates",
        "Time-saving potential analysis",
        "ROI estimates for automation projects"
      ]
    },
    {
      category: "Microsoft 365 Usage",
      impact: "Discover if you&apos;re paying for tools you don&apos;t use and identify features that could replace expensive 3rd party software.",
      items: [
        "Licence utilisation review",
        "Feature adoption assessment",
        "Unused capability identification",
        "Best practice recommendations"
      ]
    },
    {
      category: "SharePoint & Document Management",
      impact: "Assess if your digital workspace is helping or hindering your team&apos;s productivity and security.",
      items: [
        "Site structure evaluation",
        "Document organisation review",
        "Permission audit",
        "Navigation and usability assessment"
      ]
    },
    {
      category: "Power Platform Environment",
      impact: "Ensure your environment is set up for growth without creating security or governance risks.",
      items: [
        "Environment setup review",
        "Governance assessment",
        "Security and compliance check",
        "Citizen developer landscape"
      ]
    },
    {
      category: "Process Optimisation",
      impact: "Find the bottlenecks in your core processes and learn how to streamline them using tools you already own.",
      items: [
        "Workflow bottlenecks identification",
        "Approval process review",
        "Integration opportunities",
        "Process improvement recommendations"
      ]
    },
    {
      category: "Training & Adoption",
      impact: "Identify where your team is struggling and what enablement is needed to get them working faster.",
      items: [
        "User adoption assessment",
        "Training needs analysis",
        "Knowledge gaps identification",
        "Enablement strategy recommendations"
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
              Free Microsoft 365 &amp; Power Platform Health Check
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Find out where you&apos;re wasting time, which processes can be automated, and how to get more value from the Microsoft 365 licences you already pay for.
            </motion.p>
            <motion.p
              className="text-lg text-indigo-600 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Free 15-minute audit • No obligation • No sales pitch
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filtering Section (Who this is for) */}
      <section className="relative z-10 py-12 px-4 sm:px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-green-500 text-3xl">✓</span> This health check is ideal if:
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>You&apos;re a <strong>small or medium business (5–150 staff)</strong> based in the UK.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>You already use <strong>Microsoft 365</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>Admin, approvals, onboarding, or reporting feel manual and slow.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                <span>You suspect you&apos;re not using everything you already pay for.</span>
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
              <span className="text-red-500 text-3xl">×</span> This probably isn&apos;t for you if:
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg opacity-80">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span>You don&apos;t use Microsoft 365.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span>You&apos;re looking for a generic IT support or helpdesk contract.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span>You want a sales demo rather than practical, honest advice.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What&apos;s Included in Your Health Check
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {checklistItems.map((category, idx) => (
              <motion.div
                key={category.category}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                <p className="text-sm text-indigo-700 font-medium mb-4 italic leading-relaxed">{category.impact}</p>
                <ul className="space-y-2 flex-grow">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-indigo-600 mt-1 flex-shrink-0">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tangible Examples Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-indigo-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Examples of what clients often discover:
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Approval processes taking days that could take minutes",
              "Onboarding tracked in spreadsheets instead of workflows",
              "Licences paid for but never used by any staff",
              "SharePoint sites people actively avoid because they&apos;re messy",
              "Manual monthly reporting that could be automated in Power BI",
              "Data security risks from uncontrolled automation"
            ].map((example, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100 flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-orange-500 text-xl flex-shrink-0">⚠️</span>
                <span className="text-gray-700 font-medium">{example}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honesty Block (What this is NOT) */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What this health check is NOT
          </motion.h2>
          <div className="grid gap-6">
            {[
              { icon: "✗", title: "No licence upselling", text: "I don&apos;t make money from selling you software." },
              { icon: "✗", title: "No pressure to buy anything", text: "This is a standalone value call, not a sales pitch." },
              { icon: "✗", title: "No long reports you won&apos;t read", text: "I provide practical, immediate advice you can actually use." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-red-500 text-2xl font-bold flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-indigo-300 font-medium">Just clear, honest advice — even if that means doing nothing.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book Your Session",
                description: "Schedule a 15-minute call at a time that works for you. No preparation needed."
              },
              {
                step: "2",
                title: "Quick Discussion",
                description: "I&apos;ll ask about your current setup, pain points, and what you&apos;d like to achieve."
              },
              {
                step: "3",
                title: "Review & Recommendations",
                description: "I&apos;ll give you clear, practical recommendations during the call — focusing on what&apos;s realistic and worth doing."
              },
              {
                step: "4",
                title: "Follow-Up Summary",
                description: "Receive a short written summary with key findings and next steps (if you want them)."
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
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            After the call, you&apos;ll leave with:
          </motion.h2>

          <motion.div
            className="bg-indigo-50 rounded-xl p-8 border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-4">
              {[
                "3–5 clear automation or improvement opportunities",
                "An understanding of what&apos;s worth fixing now vs later",
                "Clarity on whether Power Platform is the right fit for your business",
                "Optional next steps (only if you want them)",
                "Immediate feedback on your current M365 usage",
                "No obligation to proceed with any paid work"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-indigo-600 text-xl flex-shrink-0">🎯</span>
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Light Authority Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why this works
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            I specialise in helping small businesses get real value from Microsoft 365 and the Power Platform — 
            focusing on practical automation, not enterprise complexity. With 5+ years of experience building solutions 
            for UK businesses, I know how to spot the quick wins that save your team hours every week.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready for Your Free Health Check?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book a 15-minute call. No sales pitch, no pressure — just honest, practical advice about your Microsoft 365 setup.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <Link
              href="/venture-consultancy/contact"
              className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block text-lg"
            >
              Book Your Free Health Check
            </Link>
            <p className="text-sm font-semibold italic text-indigo-100 opacity-90">No obligation • No sales pitch • Just practical advice</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
