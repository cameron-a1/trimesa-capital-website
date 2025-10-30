import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, Shield, Network } from "lucide-react";

export default function Home() {
  const pillars = [
    {
      icon: Network,
      title: "Renewable Energy Projects",
      description: "Building solar farms and distributed energy systems across Zambia, Kenya, and Tanzania. Our projects bring reliable electricity to remote communities and businesses, replacing expensive diesel generators with clean, affordable power. We've helped electrify schools, health clinics, and small businesses in areas where the grid doesn't reach.",
    },
    {
      icon: Shield,
      title: "Cold Chain & Food Security",
      description: "Developing cold storage facilities and ice production plants that preserve food, reduce waste, and support local agriculture. Our cold chain infrastructure enables farmers to store produce longer, reach distant markets, and earn higher incomes. We're building the backbone of food security across East Africa.",
    },
    {
      icon: TrendingUp,
      title: "Hospitality & Tourism",
      description: "Creating luxury eco-lodges and sustainable tourism experiences that showcase Africa's natural beauty while creating local employment. Our hospitality projects train and employ local staff, source from local suppliers, and reinvest tourism revenue into community development. We're proving that conservation and prosperity go hand in hand.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/brand/trimesa-logo-transparent.png"
                alt="TriMesa Capital Partners"
                className="h-40 w-auto mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Africa's
              <span className="block text-[rgb(var(--gold))]">Essential Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              From solar farms powering remote communities to cold chain logistics preserving food security, TriMesa Capital Partners develops transformative infrastructure projects across Zambia, Kenya, and Tanzania. We don't just invest—we build, operate, and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/peso-fund">
                <Button
                  size="lg"
                  className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
                >
                  View Our Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[rgb(var(--navy))] text-lg px-8"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--navy))] mb-4">
              Transformative Projects Across Africa
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-3xl mx-auto">
              We develop and operate essential infrastructure that powers economic growth, creates jobs, and improves quality of life across East and Southern Africa. Every project addresses a critical market gap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[rgb(var(--gold))]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[rgb(var(--navy))] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-[rgb(var(--slate))] leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--navy))] mb-4">
              Creating Measurable Impact
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-2xl mx-auto">
              Our projects deliver tangible results for African communities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                500+
              </div>
              <div className="text-sm text-[rgb(var(--slate))]">
                Jobs Created
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                12
              </div>
              <div className="text-sm text-[rgb(var(--slate))]">
                Active Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                3
              </div>
              <div className="text-sm text-[rgb(var(--slate))]">
                African Countries
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                50K+
              </div>
              <div className="text-sm text-[rgb(var(--slate))]">
                Lives Impacted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[rgb(var(--navy))] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner in Africa's Growth Story
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            TriMesa Capital Partners develops transformative infrastructure projects across Zambia, Kenya, and Tanzania. We work with institutional and accredited investors who share our vision for sustainable African development.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
            >
              Request LP Materials
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
