import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Snowflake, Home, Droplets, Sun, Building2 } from "lucide-react";

// Featured Projects with impact stories
const featuredProjects = [
  {
    icon: Sun,
    name: "Solar Farm - DP World Free Zone",
    location: "Horn of Africa",
    sector: "Renewable Energy",
    description: "A 5MW solar installation providing clean, reliable power to businesses in the DP World Economic Zone. This project eliminates diesel generator dependency, reduces energy costs by 40%, and cuts CO2 emissions by 3,500 tons annually.",
    impact: ["3,500 tons CO2 reduced annually", "40% energy cost savings", "24/7 reliable power for 50+ businesses"],
  },
  {
    icon: Snowflake,
    name: "Cold Chain Infrastructure",
    location: "Zambia & Berbera Economic Zone",
    sector: "Food Security",
    description: "State-of-the-art cold storage and ice production facilities serving farmers, fishermen, and food distributors. Our cold chain network reduces post-harvest losses by 30%, extends shelf life, and enables smallholder farmers to access premium markets.",
    impact: ["30% reduction in food waste", "500+ farmers connected to markets", "200 direct jobs created"],
  },
  {
    icon: Home,
    name: "Luxury Eco-Lodges",
    location: "Zambia & Kenya",
    sector: "Sustainable Tourism",
    description: "Boutique eco-tourism lodges showcasing Africa's wildlife and natural beauty. Built with local materials and powered by solar energy, these lodges employ and train local staff, source from community suppliers, and fund conservation programs.",
    impact: ["150 local jobs created", "100% solar powered", "$200K+ to conservation annually"],
  },
];

// Pipeline Projects
const pipeline = [
  { name: "Ice Cube Production Facility", location: "Zambia", sector: "Water Infrastructure", status: "Development" },
  { name: "Dry & Cold Storage Hub", location: "Berbera Economic Zone", sector: "Cold Chain Logistics", status: "Construction" },
  { name: "Luxury Nature Lodge", location: "Zambia-Kenya Border", sector: "Eco-Tourism", status: "Operating" },
  { name: "Solar Farm Phase II", location: "DP World Free Zone", sector: "Solar Energy", status: "Development" },
  { name: "Private Chauffeur Platform", location: "Kenya", sector: "Technology / SaaS", status: "Operating" },
  { name: "Boutique Hotel", location: "Kenya", sector: "Hospitality", status: "Development" },
  { name: "Luxury Residential Development", location: "Zanzibar", sector: "Real Estate", status: "Planning" },
  { name: "Commercial Real Estate & Hotels", location: "Zanzibar, Tanzania", sector: "Mixed-Use Development", status: "Development" },
  { name: "Cold Storage Expansion", location: "Zambia", sector: "Cold Chain", status: "Operating" },
  { name: "Warehouse & Distribution Center", location: "Nairobi, Kenya", sector: "Logistics", status: "Construction" },
  { name: "Entertainment Venue", location: "Zambia", sector: "Hospitality", status: "Operating" },
  { name: "AI Microfinance Platform", location: "Kenya", sector: "FinTech", status: "Development" },
];

// Sectors we focus on
const sectors = [
  { icon: Zap, name: "Renewable Energy", description: "Solar farms, distributed energy systems" },
  { icon: Snowflake, name: "Cold Chain & Food Security", description: "Cold storage, ice production, logistics" },
  { icon: Home, name: "Hospitality & Tourism", description: "Eco-lodges, hotels, sustainable tourism" },
  { icon: Droplets, name: "Water Infrastructure", description: "Water treatment, distribution, sanitation" },
  { icon: Building2, name: "Commercial Real Estate", description: "Warehouses, mixed-use developments" },
];

export default function PesoFund() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300">
            Transformative infrastructure development across Zambia, Kenya, and Tanzania
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--navy))] mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-3xl mx-auto">
              Real infrastructure solving real problems across Africa. Each project creates jobs, addresses market gaps, and delivers measurable community impact.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-[rgb(var(--gold))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-[rgb(var(--navy))] mb-2">
                          {project.name}
                        </CardTitle>
                        <div className="flex flex-wrap gap-3 text-sm text-[rgb(var(--slate))]">
                          <span className="flex items-center gap-1">
                            📍 {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            🏭 {project.sector}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[rgb(var(--slate))] mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="bg-[rgb(var(--off-white))] rounded-lg p-4">
                      <h4 className="font-bold text-[rgb(var(--navy))] mb-3">Impact Highlights:</h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[rgb(var(--slate))]">
                            <span className="text-[rgb(var(--gold))] mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-4">
              Focus Sectors
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-2xl mx-auto">
              We concentrate on essential infrastructure that addresses critical market gaps across East and Southern Africa
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card key={index} className="text-center border-2 hover:border-[rgb(var(--gold))] transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[rgb(var(--gold))]" />
                    </div>
                    <h3 className="font-bold text-[rgb(var(--navy))] mb-2">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-[rgb(var(--slate))]">
                      {sector.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-4">
              Project Pipeline
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-2xl mx-auto">
              12 active projects across Zambia, Kenya, and Tanzania in various stages of development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipeline.map((project, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-[rgb(var(--navy))] flex-1">
                      {project.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Operating' 
                        ? 'bg-green-100 text-green-700' 
                        : project.status === 'Construction'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-[rgb(var(--slate))] mb-2">
                    📍 {project.location}
                  </p>
                  <p className="text-sm text-[rgb(var(--slate))]">
                    🏭 {project.sector}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgb(var(--navy))] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner in Building Africa's Future
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            TriMesa Capital Partners works with institutional and accredited investors who share our vision for sustainable African infrastructure development.
          </p>
          <Button
            size="lg"
            className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
