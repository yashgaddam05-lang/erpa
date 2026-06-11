import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PartnerBadges from "@/components/PartnerBadges";
import { siteConfig } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "About ERPA | Mission, Values & Leadership",
  description: "ERPA is a customer-centered technology services firm modernizing enterprise applications since 1999. 500+ consultants, 1,100+ organizations served across Workday, AWS, and PeopleSoft.",
  keywords: ["about ERPA", "ERPA consulting company", "enterprise technology consulting firm", "Workday partner"],
};

const leadership = [
  { name: "Steve Sanchez", role: "President & CEO", bio: "25+ years leading enterprise technology consulting, driving ERPA's vision to empower organizations through Workday, AWS, and PeopleSoft solutions.", initials: "SS", color: "bg-blue-600" },
  { name: "Chad Smith", role: "Chief Operating Officer", bio: "Oversees operations, delivery, and partner ecosystem. Champion of ERPA's OPTIMA methodology and client success.", initials: "CS", color: "bg-emerald-600" },
  { name: "Mike Buford", role: "SVP, Cloud Services", bio: "Leads AWS and cloud modernization practice. Architect of ActiveGenie, ERPA's AI-powered cloud platform.", initials: "MB", color: "bg-purple-600" },
  { name: "Jennifer Bauer", role: "SVP, Workday Practice", bio: "Leads Workday implementation, AMS, and optimization services. 15+ years of Workday expertise across HCM, Finance, and Student.", initials: "JB", color: "bg-orange-600" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About ERPA"
        title="Empowering Progress. Moving You Forward."
        description="ERPA is a customer-centered technology services firm modernizing and maximizing your company's investment in enterprise applications such as PeopleSoft, Workday, and Amazon Web Services."
      />

      {/* Story + Photo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading label="Our Story" title="25+ Years of Enterprise Excellence" centered={false} />
              <div className="mt-6 space-y-4 text-erpa-gray-600 leading-relaxed">
                <p>Founded in 1999, ERPA has grown into one of the leading enterprise application consulting firms in North America. We directly employ over 500 consultants with regional headquarters in Dublin, Ohio; Tampa, Florida; and Dallas, Texas.</p>
                <p>Our vision is to deliver peace of mind by exceeding expectations as a proven technology partner to North American organizations. From Fortune 500 companies to state governments and leading universities, over 1,100 organizations trust ERPA.</p>
                <p>What makes us different? We bring deep platform expertise across Workday, AWS, and PeopleSoft — the only mid-market firm covering all three at depth. And our consultants average 8 years of experience, 5 certifications, and 20+ deployments each.</p>
              </div>
            </div>
            <div className="relative">
              {/* Photo placeholder with branded overlay */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="ERPA team collaboration"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Collaboration drives everything we do</p>
                  <p className="text-gray-300 text-sm mt-1">500+ consultants across 3 offices</p>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-erpa-orange/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-erpa-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-erpa-navy">1,100+</p>
                    <p className="text-xs text-erpa-gray-600">Organizations Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: siteConfig.stats.yearsInBusiness, label: "Years in Business", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: siteConfig.stats.organizationsServed, label: "Organizations Served", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" },
              { value: siteConfig.stats.consultants, label: "Expert Consultants", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { value: "3", label: "Regional Offices", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
            ].map((stat) => (
              <div key={stat.label} className="bg-erpa-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-erpa-light-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-erpa-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-erpa-orange">{stat.value}</div>
                <div className="mt-1 text-sm text-erpa-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Values" title="The ERPA Framework" description="Our name defines our values — they guide every decision and every engagement." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { letter: "E", title: "Empathy", desc: "To put ourselves in others' shoes. We seek the greater good and embrace humility.", color: "from-blue-500 to-blue-700" },
              { letter: "R", title: "Responsibility", desc: "To execute thoroughly and seek excellence. We go the extra mile through teamwork.", color: "from-emerald-500 to-emerald-700" },
              { letter: "P", title: "Passion", desc: "To be excited about providing innovative solutions. We foster creative environments.", color: "from-purple-500 to-purple-700" },
              { letter: "A", title: "Agility", desc: "To listen, innovate, and respond. We adapt to changing conditions and evolving needs.", color: "from-orange-500 to-orange-700" },
            ].map((value) => (
              <div key={value.letter} className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                  {value.letter}
                </div>
                <h3 className="mt-5 text-lg font-bold text-erpa-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Leadership" title="Meet Our Team" description="Experienced leaders driving enterprise technology innovation." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Photo area */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-erpa-navy to-erpa-blue">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full ${person.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                      {person.initials}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-erpa-navy/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-white">{person.name}</h3>
                    <p className="text-sm text-erpa-gold font-medium">{person.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-erpa-gray-600 leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-erpa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Partnerships" title="Technology Partnerships" description="Certified by the industry's leading platforms." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { partner: "Workday", status: "Services Partner", desc: "Certified deployment, AMS, and advisory services across the full Workday platform including HCM, Finance, Student, and Illuminate AI.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "from-blue-500 to-blue-700" },
              { partner: "Amazon Web Services", status: "Advanced Tier Partner", desc: "Cloud migration, modernization, and managed services with Professional Solutions Architect and DevOps certifications.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", color: "from-orange-500 to-amber-600" },
              { partner: "Oracle", status: "Platinum Partner", desc: "25 years of PeopleSoft expertise with multiple specializations across HCM, Finance, and Campus Solutions.", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", color: "from-red-500 to-red-700" },
            ].map((p) => (
              <div key={p.partner} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-erpa-navy">{p.partner}</h3>
                <p className="text-sm font-semibold text-erpa-orange mt-1">{p.status}</p>
                <p className="mt-3 text-sm text-erpa-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations with photos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Locations" title="Where We Are" description="Three offices across the United States serving organizations nationwide." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: "Dublin, Ohio", type: "Headquarters", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
              { city: "Tampa, Florida", type: "Regional Office", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" },
              { city: "Dallas, Texas", type: "Regional Office", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80" },
            ].map((loc) => (
              <div key={loc.city} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={loc.image}
                    alt={`${loc.city} office`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <p className="text-xs font-semibold text-erpa-orange uppercase tracking-wider">{loc.type}</p>
                  <p className="mt-1 text-lg font-bold text-erpa-navy">{loc.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Join the 1,100+ Organizations That Trust ERPA" description="Schedule a consultation to learn how ERPA can help your organization move forward." primaryCta={{ text: "Contact Us", href: "/contact" }} secondaryCta={{ text: "Explore Solutions", href: "/solutions/workday" }} />
    </>
  );
}
