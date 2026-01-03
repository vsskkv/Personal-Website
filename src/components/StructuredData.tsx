export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Venture Consultancy",
    "image": "https://vikramsinghkainth.com/Venture%20Consultancy%20logo%20RB.png",
    "description": "Venture Consultancy: Expert Power Platform and Microsoft 365 automation for UK small businesses. Specialising in Power Automate workflows, Power Apps development, and Power BI reporting.",
    "brand": {
      "@type": "Brand",
      "name": "Venture Consultancy"
    },
    "serviceType": [
      "Power Platform Consulting",
      "Microsoft Power Automate Automation",
      "Power Apps Development",
      "Power BI Business Intelligence",
      "M365 Process Optimisation"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    },
    "url": "https://vikramsinghkainth.com/venture-consultancy",
    "telephone": "",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:30"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

