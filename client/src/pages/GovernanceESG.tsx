import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Leaf, Target } from "lucide-react";

export default function GovernanceESG() {
  const keyPersons = [
    {
      name: "Jens-Peter Dyrbak",
      title: "Operating Partner",
      description: "10 years in African private equity and emerging markets investing. Full-time on-the-ground presence in Kenya. Key Person designation with suspension mechanics per fund terms.",
    },
    {
      name: "Tazana Kamanga-Dyrbak",
      title: "Operating Partner",
      description: "4 years in African private equity and 3 years in African entrepreneurship. Full-time on-the-ground presence in Zambia and Tanzania. Key Person designation with suspension mechanics per fund terms.",
    },
  ];

  const esgFocusAreas = [
    {
      icon: Leaf,
      title: "Energy Access",
      description: "Investments in renewable energy and grid infrastructure to expand electricity access in underserved markets.",
    },
    {
      icon: Users,
      title: "Job Creation",
      description: "Supporting scalable businesses that create sustainable employment opportunities in local communities.",
    },
    {
      icon: Shield,
      title: "Governance Standards",
      description: "Embedding institutional governance practices in portfolio companies through board representation and operational leadership.",
    },
    {
      icon: Target,
      title: "Climate Resilience",
      description: "Focus on essential services and infrastructure that enhance climate adaptation and reduce environmental impact.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Governance & ESG
          </h1>
          <p className="text-xl text-gray-300">
            Institutional-grade governance and impact by design
          </p>
        </div>
      </section>

      {/* Governance Structure Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            Governance Structure
          </h2>
          
          <div className="prose max-w-none text-[rgb(var(--slate))] leading-relaxed space-y-6 mb-12">
            <p>
              PESO operates under a multi-layered governance framework designed to ensure institutional-grade oversight, conflict management, and alignment with limited partner interests.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))]">
                    Legal Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[rgb(var(--slate))] space-y-2">
                  <p><strong>Fund Vehicle:</strong> Cayman Islands Exempted Limited Partnership (ELP)</p>
                  <p><strong>GP:</strong> TriMesa Capital Partners (Cayman) Limited, CIMA-regulated</p>
                  <p><strong>Holding Structure:</strong> Mauritius GBC1 (TCP Holdings Limited)</p>
                  <p><strong>Execution:</strong> Mauritius SPVs and local SPVs for underlying investments</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))]">
                    Decision-Making Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[rgb(var(--slate))] space-y-2">
                  <p><strong>Deal Committees:</strong> Southern Deal Committee (SDC) and Northern Deal Committee (NDC) for regional origination and screening</p>
                  <p><strong>Investment Committee:</strong> Final approval authority with supermajority thresholds for investment decisions</p>
                  <p><strong>LPACC:</strong> Limited Partners Advisory & Conflicts Committee for oversight and conflict resolution</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-[rgb(var(--gold))]/10 border-l-4 border-[rgb(var(--gold))] p-6 rounded-lg">
            <p className="text-[rgb(var(--navy))] font-medium text-lg">
              Conflict protocols ensure that all material conflicts of interest are disclosed, reviewed by LPACC, and managed in accordance with governing documents.
            </p>
          </div>
        </div>
      </section>

      {/* Key Person Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            Key Person Commitment
          </h2>
          
          <p className="text-[rgb(var(--slate))] mb-8 max-w-3xl">
            PESO's Key Person provisions ensure continuity of the investment strategy and on-the-ground presence that defines the fund's competitive advantage. Key Person suspension mechanics are triggered if designated individuals are no longer devoting sufficient time to fund activities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {keyPersons.map((person, index) => (
              <Card key={index} className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))]">
                    {person.name}
                  </CardTitle>
                  <p className="text-[rgb(var(--gold))] font-medium">{person.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--slate))]">
                    {person.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG & Impact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-4">
              ESG & Impact Framework
            </h2>
            <p className="text-xl text-[rgb(var(--slate))] max-w-3xl mx-auto">
              Impact by Design — Not by Appendage
            </p>
          </div>

          <div className="prose max-w-none text-[rgb(var(--slate))] leading-relaxed mb-12">
            <p>
              PESO's ESG framework is aligned with IFC Performance Standards and embedded throughout the investment lifecycle: from due diligence through 100-Day plans to ongoing monitoring and reporting. Environmental, social, and governance considerations are not add-ons—they are integral to investment selection, value creation, and exit execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {esgFocusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[rgb(var(--gold))]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[rgb(var(--navy))] mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[rgb(var(--slate))]">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Approach Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            Impact Integration
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--navy))]">
                  Due Diligence
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[rgb(var(--slate))]">
                <p>
                  ESG risks and opportunities assessed during initial screening. IFC-aligned due diligence identifies material environmental, social, and governance factors before investment approval.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--navy))]">
                  100-Day Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[rgb(var(--slate))]">
                <p>
                  Post-investment action plans embed governance improvements, operational enhancements, and impact metrics into portfolio company management from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--navy))]">
                  Monitoring & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[rgb(var(--slate))]">
                <p>
                  Ongoing tracking of ESG performance indicators. Quarterly reporting to LPs includes impact metrics alongside financial performance data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-16 bg-[rgb(var(--navy))] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Targeting sectors which are underinvested yet needed by local communities
            </h2>
            <p className="text-lg text-gray-300">
              PESO creates real social impact and economic development whilst insulating political and sovereign risk through strategic sector selection and local authority engagement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
