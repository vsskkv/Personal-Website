export interface Industry {
  slug: string;
  name: string;
  title: string;
  heroText: string;
  problems: string[];
  solutions: {
    title: string;
    description: string;
    icon: string;
  }[];
  outcomes: string[];
  ctaText: string;
}

export const industries: Industry[] = [
  {
    slug: "solicitors",
    name: "Solicitors",
    title: "Microsoft 365 Automation for Solicitors & Law Firms",
    heroText: "Automate case management, document generation, and compliance workflows within your existing Microsoft 365 environment.",
    problems: [
      "Case tracking happening in disconnected spreadsheets",
      "Manual document generation leading to high risk of error",
      "Compliance and audit trails difficult to maintain",
      "Chasing internal approvals slowing down case progress",
      "Client onboarding taking hours of manual admin time"
    ],
    solutions: [
      {
        icon: "📄",
        title: "Automated Document Generation",
        description: "Generate contracts, letters, and forms instantly using Power Automate and SharePoint templates."
      },
      {
        icon: "⚖️",
        title: "Case Management Workflows",
        description: "Track every stage of a case with automated notifications and deadline reminders."
      },
      {
        icon: "🛡️",
        title: "Compliance & Audit Trails",
        description: "Automatically log every action and approval for total compliance and easy auditing."
      },
      {
        icon: "🤝",
        title: "Secure Client Onboarding",
        description: "Streamline the collection of client info and ID documents through secure, automated portals."
      }
    ],
    outcomes: [
      "Reduced case turnaround time by up to 40%",
      "Elimination of manual document errors",
      "Full transparency on case progress across the firm",
      "Significantly reduced admin overhead for fee-earners"
    ],
    ctaText: "Get a Case Automation Audit"
  },
  {
    slug: "accountants",
    name: "Accountants",
    title: "Streamline Accounting Operations with Power Platform",
    heroText: "Remove the manual data entry and 'chasing clients' from your firm. Automate onboarding, reporting, and task management.",
    problems: [
      "Constant email chasing for client records and documents",
      "Manual data entry between different accounting software",
      "Inconsistent client onboarding experience",
      "Difficulty tracking internal tasks across multiple staff members",
      "Time-consuming manual creation of monthly management reports"
    ],
    solutions: [
      {
        icon: "📊",
        title: "Automated Management Reporting",
        description: "Connect your accounting data directly to Power BI for instant, real-time client dashboards."
      },
      {
        icon: "📥",
        title: "Smart Document Collection",
        description: "Automate the request and storage of client tax records and bank statements."
      },
      {
        icon: "🔄",
        title: "Client Onboarding Flow",
        description: "Ensure every new client is setup in every system correctly, with zero manual steps."
      },
      {
        icon: "⏰",
        title: "Deadline Tracking & Alerts",
        description: "Never miss a VAT or Year-End deadline with automated internal and client reminders."
      }
    ],
    outcomes: [
      "Saved days of manual reporting time every month",
      "Professional, consistent onboarding for every client",
      "Significant reduction in client chasing via email",
      "Improved staff capacity without increasing headcount"
    ],
    ctaText: "Reclaim Your Reporting Time"
  },
  {
    slug: "recruiters",
    name: "Recruiters",
    title: "Microsoft 365 Automation for Recruitment Agencies",
    heroText: "Stop tracking candidates in spreadsheets. Automate interview scheduling, document collection, and onboarding workflows.",
    problems: [
      "Candidates and clients lost in 'inbox chaos'",
      "Manual scheduling of interviews taking up hours every day",
      "Compliance documents (IDs, visas) missing or out of date",
      "Poor hand-off between sales and delivery teams",
      "New hires waiting for days for access to internal systems"
    ],
    solutions: [
      {
        icon: "📅",
        title: "Automated Interview Scheduling",
        description: "Sync calendars and automate the back-and-forth of scheduling interviews with clients and candidates."
      },
      {
        icon: "🗂️",
        title: "Compliance Management",
        description: "Automate the collection, verification, and storage of candidate ID and right-to-work documents."
      },
      {
        icon: "🚀",
        title: "Internal Onboarding Flow",
        description: "Get new recruiters productive from Day 1 with automated system access and training tasks."
      },
      {
        icon: "📈",
        title: "Placement Dashboards",
        description: "Real-time visibility into your pipeline, billings, and team performance in Power BI."
      }
    ],
    outcomes: [
      "Interview booking time reduced by 70%",
      "100% compliance on placement documentation",
      "Better candidate and client experience",
      "Clear visibility of placement pipeline for management"
    ],
    ctaText: "Speed Up Your Placements"
  },
  {
    slug: "estate-agents",
    name: "Estate Agents",
    title: "Automate Property Management & Sales Admin",
    heroText: "Free your team from paperwork and manual property updates. Use Microsoft 365 to handle the admin while you sell properties.",
    problems: [
      "Manual property maintenance requests causing backlog",
      "Compliance docs for landlords tracking in multiple places",
      "Slow hand-off from offer accepted to sales progression",
      "Manual generation of property particulars and brochures",
      "Inconsistent follow-up with viewing enquiries"
    ],
    solutions: [
      {
        icon: "🏠",
        title: "Maintenance Request System",
        description: "Automate the intake, approval, and contractor dispatch for property maintenance."
      },
      {
        icon: "📋",
        title: "Landlord Compliance Audit",
        description: "Automated tracking and renewal alerts for Gas Safety, EPCs, and EICRs."
      },
      {
        icon: "🏎️",
        title: "Sales Progression Tracker",
        description: "A clear, automated workflow to move properties from 'Under Offer' to 'Exchange' faster."
      },
      {
        icon: "📬",
        title: "Viewing Lead Automation",
        description: "Instantly capture portal enquiries and automate initial booking responses."
      }
    ],
    outcomes: [
      "Faster sales progression and reduced fall-throughs",
      "Total compliance on property portfolios",
      "Reduced admin workload for property managers",
      "Improved responsiveness to potential buyers/tenants"
    ],
    ctaText: "Streamline Property Admin"
  },
  {
    slug: "construction",
    name: "Construction",
    title: "Connected Data for Construction & Engineering",
    heroText: "Stop managing multi-million pound projects from messy email threads. Automate site reports, safety checks, and vendor approvals.",
    problems: [
      "Site reports delayed due to manual paperwork",
      "Health & Safety compliance tracking is inconsistent",
      "Slow vendor invoice approvals causing project delays",
      "Disconnected data between office and site teams",
      "Difficulty tracking asset and equipment locations"
    ],
    solutions: [
      {
        icon: "🏗️",
        title: "Mobile Site Reporting",
        description: "Custom Power Apps for site teams to submit daily logs and photos directly to SharePoint."
      },
      {
        icon: "👷",
        title: "Safety Compliance App",
        description: "Automate H&S checklists and instant incident reporting with automated escalation."
      },
      {
        icon: "💰",
        title: "Invoice & Expense Approval",
        description: "Digital approval workflows for vendor payments, integrated with your finance data."
      },
      {
        icon: "📍",
        title: "Asset & Tool Tracking",
        description: "A simple, centralised system to track where your high-value equipment is located."
      }
    ],
    outcomes: [
      "Real-time visibility into project progress",
      "100% compliance on safety documentation",
      "Reduced back-office admin time by 50%",
      "Faster payment cycles for better vendor relations"
    ],
    ctaText: "Digitise Your Site Workflow"
  },
  {
    slug: "manufacturers",
    name: "Manufacturers",
    title: "Operational Efficiency for UK Manufacturers",
    heroText: "Bridge the gap between your shop floor and office. Automate quality checks, inventory alerts, and production reporting.",
    problems: [
      "Quality control records stored in paper folders",
      "Inventory levels tracked manually, leading to stockouts",
      "Slow communication between production and sales",
      "Difficulty tracking maintenance schedules for machinery",
      "Manual production reporting taking hours every week"
    ],
    solutions: [
      {
        icon: "🏭",
        title: "Digital Quality Logs",
        description: "Replace paper forms with tablets running custom Power Apps for instant quality data."
      },
      {
        icon: "📦",
        title: "Smart Inventory Alerts",
        description: "Automated notifications when raw materials hit re-order levels."
      },
      {
        icon: "🔧",
        title: "Maintenance Scheduling",
        description: "Track machine hours and automate service requests to prevent downtime."
      },
      {
        icon: "📈",
        title: "Production Dashboards",
        description: "Real-time OEE and production volume tracking in Power BI."
      }
    ],
    outcomes: [
      "Reduced production downtime via proactive maintenance",
      "Zero paperwork on the shop floor",
      "Better inventory accuracy and cash flow",
      "Instant, accurate production reporting"
    ],
    ctaText: "Optimise Your Production"
  },
  {
    slug: "health-clinics",
    name: "Health Clinics",
    title: "Secure Automation for Health & Wellness Clinics",
    heroText: "Focus on patients, not paperwork. Automate patient onboarding, consent forms, and staff scheduling securely.",
    problems: [
      "Patient intake forms causing waiting room bottlenecks",
      "Manual tracking of staff certifications and renewals",
      "Patient records stored in unsecure, disconnected systems",
      "Slow processes for follow-up and appointment reminders",
      "Chasing staff for training and compliance updates"
    ],
    solutions: [
      {
        icon: "🏥",
        title: "Digital Patient Intake",
        description: "Secure, mobile-friendly forms for patient info and consent, syncing directly to your records."
      },
      {
        icon: "📜",
        title: "Credential Management",
        description: "Automated alerts for staff insurance and certification renewals."
      },
      {
        icon: "🔒",
        title: "Secure Document Storage",
        description: "Structured, compliant storage for patient data within Microsoft 365."
      },
      {
        icon: "💬",
        title: "Automated Follow-ups",
        description: "Send automated after-care instructions and feedback requests to patients."
      }
    ],
    outcomes: [
      "Reduced patient waiting times",
      "100% compliance on staff credentials",
      "Total peace of mind on data security",
      "Better patient experience and engagement"
    ],
    ctaText: "Focus More on Patients"
  },
  {
    slug: "smes",
    name: "SMEs",
    title: "Scaling UK Small Businesses with Microsoft 365",
    heroText: "Stop using 'big company' tools in 'small company' ways. Automate your operations and grow without increasing your overhead.",
    problems: [
      "Owners and managers buried in low-value admin",
      "Data hidden in individual employee inboxes",
      "Processes that break when someone is on holiday",
      "Paying for software that nobody knows how to use",
      "No clear visibility of business performance"
    ],
    solutions: [
      {
        icon: "🚀",
        title: "General Process Automation",
        description: "Custom workflows for whatever repetitive task is slowing you down today."
      },
      {
        icon: "🤝",
        title: "Centralised Data Hub",
        description: "Get everyone working from the same data in SharePoint and Teams."
      },
      {
        icon: "📊",
        title: "Business Health Dashboards",
        description: "A single view of your sales, costs, and operations in Power BI."
      },
      {
        icon: "🛡️",
        title: "Simple Governance",
        description: "Set the rules for how your business uses M365 to keep it clean and secure."
      }
    ],
    outcomes: [
      "Reclaimed hours every week for strategic growth",
      "Processes that run on autopilot",
      "Clear visibility of business health",
      "Maximum ROI from your M365 subscription"
    ],
    ctaText: "Get an SME Automation Audit"
  }
];
