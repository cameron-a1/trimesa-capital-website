import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, Shield, Network } from "lucide-react";

export default function Home() {
  const pillars = [
    {
      icon: Network,
      title: "Permanent African Presence",
      description: "Unlike fly-in-fly-out funds, TriMesa maintains full-time operating partners embedded in Zambia, Kenya, and Tanzania. We are members of local business ecosystems with trusted relationships built over years, not quarters. This permanent presence is essential for executing in frontier African markets.",
    },
    {
      icon: Shield,
      title: "Africa Infrastructure Focus",
      description: "We specialize in essential infrastructure and services across African emerging markets: cold chain logistics, renewable energy, water infrastructure, and hospitality. These sectors address critical market gaps and deliver resilient returns regardless of macroeconomic volatility.",
    },
    {
      icon: TrendingUp,
      title: "Proprietary African Deal Flow",
      description: "Our on-the-ground teams source off-market opportunities unavailable to international funds. We access African businesses at attractive entry valuations (4-7x EBITDA) while global funds compete at inflated multiples (10-15x+). This sourcing advantage is structural, not cyclical.",
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
              Africa-Focused
              <span className="block text-[rgb(var(--gold))]">Emerging Markets Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              TriMesa Capital Partners is a specialized financial services firm delivering institutional-grade private equity solutions exclusively in African emerging markets. Our permanent on-the-ground presence in Zambia, Kenya, and Tanzania provides unmatched market access and proprietary deal flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/peso-fund">
                <Button
                  size="lg"
                  className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
                >
                  Explore PESO Fund
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  Investor Access
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
              Our Africa Emerging Markets Advantage
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-3xl mx-auto">
              As a dedicated African emerging markets financial services firm, we provide access to opportunities that global generalist funds cannot reach. Our full-time presence and deep local expertise create structural advantages.
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

      {/* Key Stats Section */}
      <section className="py-20 bg-[rgb(var(--off-white))]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                $35M
              </div>
              <div className="text-sm text-[rgb(var(--slate))] font-medium">
                Target Fund Size
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                25%
              </div>
              <div className="text-sm text-[rgb(var(--slate))] font-medium">
                Target Gross IRR
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                4-7
              </div>
              <div className="text-sm text-[rgb(var(--slate))] font-medium">
                Year Hold Period
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--gold))] mb-2 font-data">
                $1-3M
              </div>
              <div className="text-sm text-[rgb(var(--slate))] font-medium">
                Ticket Size
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[rgb(var(--navy))] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Specialized African Emerging Markets Expertise
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            TriMesa Capital Partners operates the PESO fund, a CIMA-regulated Cayman Islands ELP with Mauritius GBC1 holdings structures. We serve institutional and accredited investors seeking dedicated African emerging markets exposure.
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
