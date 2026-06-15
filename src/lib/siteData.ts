export const siteConfig = {
  name: "ERPA",
  tagline: "Empowering Progress. Moving You Forward.",
  description:
    "Leading enterprise application management, cloud hosting, and consulting services for Workday, AWS, and PeopleSoft.",
  url: "https://www.erpa.com",
  phone: "1-866-960-3772",
  email: "info@erpa.com",
  locations: [
    "Dublin, OH (HQ)",
    "Tampa, FL",
    "Dallas, TX",
  ],
  stats: {
    yearsInBusiness: "25+",
    organizationsServed: "1,100+",
    successfulPartnerships: "1,000+",
    consultants: "500+",
  },
};

export const navigation = {
  solutions: [
    {
      name: "Workday Solutions",
      href: "/solutions/workday",
      description: "Implementation, support, consulting, and optimization",
      children: [
        { name: "Implementation Services", href: "/solutions/workday/implementation" },
        { name: "Managed Services (AMS)", href: "/solutions/workday/managed-services" },
        { name: "Optimization & Integrations", href: "/solutions/workday/optimization" },
      ],
    },
    {
      name: "AWS Solutions",
      href: "/solutions/aws",
      description: "Cloud migration, modernization, and managed services",
      children: [
        { name: "Migration & Modernization", href: "/solutions/aws/migration" },
        { name: "Cloud Managed Services", href: "/solutions/aws/cloud-managed-services" },
      ],
    },
    {
      name: "PeopleSoft Solutions",
      href: "/solutions/peoplesoft",
      description: "Managed services, consulting, and modernization",
      children: [
        { name: "Managed Services", href: "/solutions/peoplesoft/managed-services" },
        { name: "Modernization with AWS", href: "/solutions/peoplesoft/modernization" },
      ],
    },
    {
      name: "Staffing Solutions",
      href: "/solutions/staffing",
      description: "Expert consultants for Workday, PeopleSoft, and more",
    },
    {
      name: "AI & Innovation",
      href: "/solutions/ai-innovation",
      description: "Workday Illuminate, ActiveGenie AI, and AI strategy",
    },
  ],
  industries: [
    { name: "Higher Education", href: "/industries/higher-education" },
    { name: "State & Local Government", href: "/industries/government" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Retail & Hospitality", href: "/industries/retail-hospitality" },
  ],
  resources: [
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Blog & Insights", href: "/resources/blog" },
    { name: "Webinars & Events", href: "/resources/webinars" },
    { name: "News & Press", href: "/resources/news" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export const caseStudies = [
  {
    client: "MSCI",
    industry: "Financial Services",
    solution: "Workday",
    headline: "100% Payroll Success Rate at Global Scale",
    description:
      "ERPA helped MSCI achieve flawless payroll transformation across multiple countries with zero errors.",
    metric: "100%",
    metricLabel: "Payroll Accuracy",
  },
  {
    client: "Illinois State University",
    industry: "Higher Education",
    solution: "AWS + PeopleSoft",
    headline: "Cloud Migration Increases Availability and Agility",
    description:
      "ISU gained 30-minute infrastructure scaling during peak demand after migrating to AWS.",
    metric: "30 min",
    metricLabel: "Scaling Time",
  },
  {
    client: "City of Boston",
    industry: "Government",
    solution: "AWS + PeopleSoft",
    headline: "Modernizes PeopleSoft With AWS Cloud",
    description:
      "Consolidated over 20 contracts into a single agreement while modernizing critical city systems.",
    metric: "20+",
    metricLabel: "Contracts Consolidated",
  },
  {
    client: "P.F. Chang's",
    industry: "Retail & Hospitality",
    solution: "Workday",
    headline: "From Reactive Ticketing to Proactive Strategy",
    description:
      "Shifted from reactive support to a proactive strategic model, optimizing HR and operations.",
    metric: "100%",
    metricLabel: "Strategic Shift",
  },
  {
    client: "AARP",
    industry: "Non-Profit",
    solution: "AWS + PeopleSoft",
    headline: "98% of Batch Processes Under 15 Minutes",
    description:
      "Boosted performance and scalability by migrating PeopleSoft workloads to AWS cloud.",
    metric: "98%",
    metricLabel: "Batch Efficiency",
  },
  {
    client: "Acenda",
    industry: "Healthcare",
    solution: "Workday",
    headline: "Open Enrollment in 7 Days",
    description:
      "Workday optimization slashed the open enrollment cycle from weeks to just 7 days.",
    metric: "7 days",
    metricLabel: "Enrollment Cycle",
  },
];

export const testimonials = [
  {
    quote:
      "We got into a relationship with ERPA because we had confidence in their ability to help us leverage AWS, and they had the transparency we were looking for.",
    author: "CIO",
    company: "Fortune 500 Company",
  },
  {
    quote:
      "The complex PeopleSoft infrastructure and application stacks mean that ERPA's in-depth knowledge has been critical to us when we run into new and complex technical issues.",
    author: "Director of IT",
    company: "State Government Agency",
  },
  {
    quote:
      "ERPA's responsiveness and flexibility has improved confidence levels for our users.",
    author: "VP of Technology",
    company: "Public Sector Organization",
  },
  {
    quote:
      "Automating student sponsorship invoicing with ERPA's help has been a game-changer for our finance team.",
    author: "CFO",
    company: "Kansas City University",
  },
];
