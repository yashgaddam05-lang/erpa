import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Blog & Insights | ERP Industry News and Expert Analysis",
  description: "Expert insights on Workday, AWS, PeopleSoft, cloud migration, digital transformation, and enterprise technology trends from ERPA's team of 500+ consultants.",
  keywords: ["ERP blog", "Workday insights", "PeopleSoft tips", "cloud migration guide", "enterprise technology trends", "digital transformation articles"],
};

const categoryColors: Record<string, string> = {
  "Workday": "bg-blue-500/10 text-blue-700",
  "PeopleSoft": "bg-red-500/10 text-red-700",
  "AWS": "bg-orange-500/10 text-orange-700",
  "AI & Innovation": "bg-purple-500/10 text-purple-700",
  "Strategy": "bg-emerald-500/10 text-emerald-700",
  "Government": "bg-amber-500/10 text-amber-700",
};

const blogPosts = [
  { title: "Workday 2026R1 Release: What Higher Education Needs to Know", category: "Workday", date: "May 2026", excerpt: "A comprehensive guide to the latest Workday release features and how they impact higher education institutions.", readTime: "8 min", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80" },
  { title: "Innovating with Workday Extend: Build Apps That Scale", category: "Workday", date: "April 2026", excerpt: "How organizations are using Workday Extend to build custom, secure applications within the Workday platform.", readTime: "6 min", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
  { title: "How Workday AI Illuminate Transforms Finance Operations", category: "AI & Innovation", date: "March 2026", excerpt: "Exploring how AI-powered features in Workday are helping finance teams automate processes and improve decision-making.", readTime: "7 min", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80" },
  { title: "5 Signs Your PeopleSoft Environment Needs Modernization", category: "PeopleSoft", date: "March 2026", excerpt: "Key indicators that your PeopleSoft infrastructure is holding your organization back, and what to do about it.", readTime: "5 min", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80" },
  { title: "AWS Migration for Higher Education: A Step-by-Step Guide", category: "AWS", date: "February 2026", excerpt: "A practical guide for colleges and universities considering moving their PeopleSoft or other campus applications to AWS.", readTime: "10 min", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" },
  { title: "PeopleSoft vs. Workday: Making the Right Choice for Your Organization", category: "Strategy", date: "January 2026", excerpt: "An objective comparison of PeopleSoft and Workday to help organizations make informed decisions about their ERP future.", readTime: "12 min", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80" },
  { title: "The Total Cost of Workday Ownership: What to Expect", category: "Workday", date: "January 2026", excerpt: "Breaking down the real costs of Workday implementation, ongoing support, and optimization to help with budget planning.", readTime: "8 min", image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80" },
  { title: "Best Practices for PeopleSoft Managed Services", category: "PeopleSoft", date: "December 2025", excerpt: "How to get the most value from your PeopleSoft managed services engagement with proven strategies and tips.", readTime: "6 min", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" },
  { title: "Cloud-First ERP Strategy for Government Agencies", category: "Government", date: "November 2025", excerpt: "How state and local government agencies can adopt a cloud-first ERP strategy while meeting compliance requirements.", readTime: "9 min", image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=400&q=80" },
  { title: "Workday Illuminate AI Agents: What You Need to Know in 2026", category: "AI & Innovation", date: "June 2026", excerpt: "A complete guide to Workday's new AI agents for HR, finance, and student operations. What they do, how to deploy them, and how ERPA can help.", readTime: "10 min", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80" },
  { title: "How ActiveGenie AI Transforms Cloud Operations", category: "AI & Innovation", date: "May 2026", excerpt: "Inside ERPA's proprietary AI-powered cloud platform: self-healing infrastructure, predictive scaling, and automated cost optimization.", readTime: "7 min", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" },
  { title: "AI in ERP: Beyond the Hype — What Actually Works in 2026", category: "AI & Innovation", date: "April 2026", excerpt: "62% of ERP spending will include AI by 2027. We separate real AI capabilities from marketing buzzwords and show what delivers actual ROI.", readTime: "12 min", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { title: "Agentic AI for Enterprise: How Autonomous Workflows Are Changing ERP", category: "AI & Innovation", date: "March 2026", excerpt: "Agentic AI can monitor processes, trigger actions, and coordinate tasks across departments without manual intervention.", readTime: "8 min", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { title: "AI Readiness Assessment: Is Your Organization Ready for Enterprise AI?", category: "AI & Innovation", date: "February 2026", excerpt: "A practical framework for evaluating your data maturity, platform readiness, and organizational culture for AI adoption.", readTime: "6 min", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" },
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHero
        label="Blog & Insights"
        title="Expert Perspectives on Enterprise Technology"
        description="Insights, guides, and analysis from ERPA's team of 500+ consultants on Workday, AWS, PeopleSoft, cloud migration, and digital transformation."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "Workday", "PeopleSoft", "AWS", "AI & Innovation", "Strategy", "Government"].map((cat) => (
              <button key={cat} className="px-4 py-2 text-sm font-medium rounded-full border border-gray-200 text-erpa-gray-600 hover:border-erpa-light-blue hover:text-erpa-light-blue transition-colors first:bg-erpa-navy first:text-white first:border-erpa-navy">
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article */}
          <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all mb-10 cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden relative">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] || "bg-gray-100 text-gray-700"}`}>{featured.category}</span>
                  <span className="text-xs text-erpa-gray-600">{featured.date}</span>
                  <span className="text-xs text-erpa-gray-600">{featured.readTime} read</span>
                </div>
                <h2 className="text-2xl font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors">{featured.title}</h2>
                <p className="mt-3 text-erpa-gray-600 leading-relaxed">{featured.excerpt}</p>
                <p className="mt-5 text-sm font-semibold text-erpa-light-blue flex items-center gap-1">
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </p>
              </div>
            </div>
          </article>

          {/* Blog grid + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rest.map((post) => (
                <article key={post.title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer card-gradient-border">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"} bg-white/90 backdrop-blur-sm`}>{post.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-erpa-gray-600">{post.date}</span>
                      <span className="text-xs text-erpa-gray-600">{post.readTime} read</span>
                    </div>
                    <h3 className="font-bold text-erpa-navy group-hover:text-erpa-light-blue transition-colors leading-snug">{post.title}</h3>
                    <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-8">
              <LeadForm title="Subscribe to Insights" subtitle="Get expert analysis delivered to your inbox." compact />
              <div className="bg-erpa-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-erpa-navy mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Workday Implementation", "PeopleSoft Modernization", "AWS Migration", "Higher Education", "Government ERP", "AI in ERP", "Change Management", "Cloud Strategy"].map((topic) => (
                    <span key={topic} className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full text-erpa-gray-600 hover:border-erpa-light-blue hover:text-erpa-light-blue cursor-pointer transition-colors">{topic}</span>
                  ))}
                </div>
              </div>
              <div className="bg-erpa-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-erpa-navy mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><Link href="/resources/case-studies" className="text-sm text-erpa-light-blue hover:text-erpa-orange transition-colors flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>Case Studies</Link></li>
                  <li><Link href="/resources/insights" className="text-sm text-erpa-light-blue hover:text-erpa-orange transition-colors flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>Industry Insights</Link></li>
                  <li><Link href="/contact" className="text-sm text-erpa-light-blue hover:text-erpa-orange transition-colors flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>Schedule a Consultation</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection title="Get Expert Guidance" description="Schedule a consultation with one of our enterprise technology experts." primaryCta={{ text: "Schedule a Consultation", href: "/contact" }} />
    </>
  );
}
