"use client";
import Link from "next/link";
import { motion } from 'framer-motion';
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

export default function AboutPage() {
  // Timeline data
  const timeline = [
    {
      year: "2025",
      title: "Senior Developer",
      company: "Valcon",
      description: "Leading the design and delivery of enterprise Power Platform solutions for major clients, transforming manual processes into seamless digital workflows. Architecting scalable Power Apps and automated workflows using Power Automate.",
      skills: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "Mentoring"]
    },
    {
      year: "2023-2025",
      title: "Consultant",
      company: "Computacenter",
      description: "Delivered tailored Power Platform solutions as a consultant across various business units, driving automation and data-led decision-making. Introduced workflow automations that reduced processing time by up to 70%.",
      skills: ["Power Platform", "Power Apps", "Power Automate", "Dataverse", "Consulting"]
    },
    {
      year: "2022-2023",
      title: "Implementation Specialist",
      company: "Computacenter",
      description: "Extensively cultivated competencies in Power Platform suite, designing and managing solutions to optimise business processes. Created intricate flows and Power BI dashboards for comprehensive process automation.",
      skills: ["Power Platform", "Power Apps", "Power Automate", "Power BI", "Integration"]
    },
    {
      year: "2021-2022",
      title: "Technical Graduate",
      company: "Computacenter",
      description: "Strategy and Problem Management focus. Developed foundational skills in technical problem-solving and business process optimisation.",
      skills: ["Strategy", "Problem Management", "Technical Analysis", "Business Processes"]
    },
    {
      year: "2019-2020",
      title: "Global Technical Innovation Specialist",
      company: "Intel Corporation",
      description: "Led full-stack web development projects and managed system programmes. Developed data-driven dashboards using Power BI, translating complex data into actionable insights.",
      skills: ["Web Development", "Power BI", "Data Analysis", "Hardware Integration"]
    }
  ];

  // Skills with categories
  const skillCategories = [
    {
      category: "Power Platform",
      skills: [
        { name: "Power Apps", projects: 15, color: "bg-blue-500" },
        { name: "Power Automate", projects: 12, color: "bg-indigo-500" },
        { name: "Power BI", projects: 8, color: "bg-yellow-500" },
        { name: "Dataverse", projects: 10, color: "bg-purple-500" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", projects: 8, color: "bg-cyan-500" },
        { name: "TypeScript", projects: 6, color: "bg-blue-600" },
        { name: "Next.js", projects: 5, color: "bg-gray-800" },
        { name: "Tailwind CSS", projects: 7, color: "bg-teal-500" }
      ]
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "SharePoint", projects: 12, color: "bg-green-500" },
        { name: "Expo/React Native", projects: 3, color: "bg-black" },
        { name: "Git", projects: 20, color: "bg-orange-500" },
        { name: "Agile/Scrum", projects: 15, color: "bg-red-500" }
      ]
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-4 relative">
      <BinaryBackground intensity="low" speed="slow" />
      <FloatingBinary intensity="low" speed="slow" color="text-gray-300" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white mx-auto">
              <img 
                src="/images/avatar.png" 
                alt="Vikram Singh Kainth - Power Platform Specialist" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'block';
                  }
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold" style={{ display: 'none' }}>
                VK
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Vikram Singh Kainth
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-indigo-600 font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Senior Developer & Power Platform Specialist
          </motion.h2>
          
                    <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I transform businesses through intelligent automation, data-driven insights, and modern web solutions.
            With 5+ years of experience, I bridge the gap between complex technical challenges and practical business outcomes.
            I hold a BSc in Computer Science from Aston University, where I studied software engineering, algorithms, 
            data structures, and artificial intelligence. During my studies, I was actively involved as the Chess Society Treasurer 
            and completed a Chinese for Beginners certificate, demonstrating my commitment to both technical excellence and 
            continuous learning.
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Projects Delivered" },
            { number: "1000+", label: "Hours Automated" },
            { number: "15+", label: "Happy Clients" }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Career Timeline */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">My Career Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                className={`relative mb-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex items-center`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 + idx * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-indigo-600">{item.year}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIdx) => (
                        <span key={skillIdx} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + catIdx * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                                 <div className="space-y-4">
                   {category.skills.map((skill, skillIdx) => (
                     <div key={skill.name}>
                       <div className="flex justify-between mb-2">
                         <span className="font-medium text-gray-700">{skill.name}</span>
                         <span className="text-sm text-gray-500">{skill.projects}+ projects</span>
                       </div>
                       <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                         <motion.div
                           className={`h-3 rounded-full ${skill.color}`}
                           initial={{ width: 0 }}
                           animate={{ width: `${(skill.projects / 20) * 100}%` }}
                           transition={{ duration: 1, delay: 1.6 + skillIdx * 0.1 }}
                         />
                       </div>
                     </div>
                   ))}
                 </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Licenses & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Microsoft Certified: Power Platform Functional Consultant Associate",
                issuer: "Microsoft",
                issued: "Oct 2024",
                expires: "Oct 2025",
                status: "active",
                skills: ["Power Platform", "Functional Consulting", "Solution Architecture"]
              },
              {
                title: "Microsoft Certified: Power Platform App Maker Associate",
                issuer: "Microsoft",
                issued: "Jan 2024",
                expires: "Jan 2026",
                status: "active",
                skills: ["Power Apps", "Power Automate", "Dataverse"]
              },
              {
                title: "Microsoft Certified: Power Platform Fundamentals",
                issuer: "Microsoft",
                issued: "Oct 2021",
                expires: null,
                credentialId: null,
                status: "active",
                skills: ["Power Platform", "Fundamentals", "Microsoft 365"]
              }
            ].map((cert, idx) => (
              <motion.div
                key={cert.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + idx * 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{cert.title}</h3>
                    <p className="text-indigo-600 font-semibold text-sm">{cert.issuer}</p>
                  </div>
                  <div className="ml-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      cert.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {cert.status === 'active' ? 'Active' : 'Expired'}
                    </span>
                  </div>
                </div>
              
                
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What I Do Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "Automation Solutions",
                description: "Build intelligent workflows that eliminate repetitive tasks and streamline business processes using Power Automate and custom solutions."
              },
              {
                icon: "📊",
                title: "Data Visualisation",
                description: "Create compelling dashboards and reports that turn complex data into actionable insights using Power BI and modern web technologies."
              },
              {
                icon: "💻",
                title: "Web Applications",
                description: "Develop modern, responsive web applications using React, Next.js, and TypeScript for optimal performance and user experience."
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + idx * 0.2 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What I Solve Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Problems Do I Solve?</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">I help businesses overcome common challenges through intelligent automation, data-driven insights, and modern web solutions.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⏰",
                title: "Time-Consuming Manual Processes",
                problem: "Employees spending hours on repetitive tasks",
                solution: "Automate workflows with Power Automate, reducing manual work by 80%+",
                benefit: "Free up time for strategic work"
              },
              {
                icon: "📊",
                title: "Poor Data Visibility",
                problem: "Business decisions made without real-time insights",
                solution: "Create interactive dashboards with Power BI and custom web apps",
                benefit: "Make data-driven decisions faster"
              },
              {
                icon: "🔄",
                title: "Disconnected Systems",
                problem: "Data scattered across multiple platforms",
                solution: "Integrate systems using Power Platform and custom APIs",
                benefit: "Single source of truth for all data"
              },
              {
                icon: "📱",
                title: "Outdated User Interfaces",
                problem: "Poor user experience limiting adoption",
                solution: "Build modern, responsive web applications with React",
                benefit: "Increase user adoption and satisfaction"
              },
              {
                icon: "🔒",
                title: "Security & Compliance Issues",
                problem: "Manual processes creating security risks",
                solution: "Implement secure, compliant automation solutions",
                benefit: "Reduce risk and ensure compliance"
              },
              {
                icon: "📊",
                title: "High Operational Costs",
                problem: "Expensive manual processes and inefficiencies",
                solution: "Optimise workflows and reduce operational overhead",
                benefit: "Significant cost savings and ROI"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 + idx * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-red-600">Problem:</span>
                    <p className="text-gray-700 text-sm">{item.problem}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-green-600">Solution:</span>
                    <p className="text-gray-700 text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600">Benefit:</span>
                    <p className="text-gray-700 text-sm">{item.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how I can help bring your ideas to life.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/#contact" className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  Get In Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/projects" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
                  View My Work
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 
