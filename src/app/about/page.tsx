"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-white to-purple-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* 1. Engaging Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <img src="/globe.svg" alt="Vikram Singh Kainth" className="w-32 h-32 rounded-full shadow-lg border-4 border-indigo-200" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">Vikram Singh Kainth</h1>
            <h2 className="text-lg md:text-xl text-indigo-500 font-semibold mb-2">Senior Developer & Power Platform Specialist</h2>
            <p className="text-gray-700 mb-2">I help businesses automate, analyze, and grow with modern web and Power Platform solutions.</p>
            <div className="flex gap-3 mt-2">
              <Link href="/projects" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 rounded shadow hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm">View Projects</Link>
              <Link href="/blog" className="bg-indigo-50 text-indigo-700 font-semibold px-4 py-2 rounded shadow text-sm hover:bg-indigo-100">Read Blog</Link>
              <a href="/resume.pdf" className="bg-purple-50 text-purple-700 font-semibold px-4 py-2 rounded shadow text-sm hover:bg-purple-100" download>Download Résumé</a>
            </div>
          </div>
        </div>

        {/* 2. Personal Story & Professional Narrative */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">My Story</h3>
          <p className="text-gray-800 mb-4">
            With over 5 years of experience in software development, I’ve built solutions for startups, enterprises, and everything in between. My journey began with a passion for technology and a drive to solve real-world problems. Today, I specialize in Power Platform, React, and modern web technologies, blending technical expertise with a people-first approach.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Led automation projects that saved clients 1000+ hours annually</li>
            <li>Built data dashboards for actionable business insights</li>
            <li>Mentored junior developers and led cross-functional teams</li>
          </ul>
        </section>

        {/* 3. Skills & Specializations */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">Skills & Specializations</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs font-mono">Power Apps</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-mono">Power Automate</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-xs font-mono">Power BI</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-xs font-mono">React</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-mono">SharePoint</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-mono">TypeScript</span>
            <span className="bg-black text-white px-3 py-1 rounded text-xs font-mono">Expo</span>
          </div>
        </section>

        {/* 4. Credibility & Social Proof */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">What Clients Say</h3>
          <div className="bg-indigo-50 rounded p-4 mb-3">
            <p className="italic text-indigo-900">“Vikram’s solutions transformed our workflow. We saved hundreds of hours and gained real-time insights.”</p>
            <span className="block text-xs text-indigo-700 mt-2">— Client, Acme Corp</span>
          </div>
          <div className="bg-purple-50 rounded p-4 mb-3">
            <p className="italic text-purple-900">“A true professional—creative, reliable, and always focused on results.”</p>
            <span className="block text-xs text-purple-700 mt-2">— Project Manager, Tech Solutions</span>
          </div>
        </section>

        {/* 5. Next Steps & Contact */}
        <section className="mb-4">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">Let’s Connect</h3>
          <p className="text-gray-800 mb-4">Ready to collaborate or want to learn more? Reach out or explore my work below.</p>
          <div className="flex gap-3">
            <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 rounded shadow hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm">Contact Me</Link>
            <a href="mailto:your@email.com" className="bg-indigo-50 text-indigo-700 font-semibold px-4 py-2 rounded shadow text-sm hover:bg-indigo-100">Email</a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded shadow text-sm hover:bg-blue-100">LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
} 