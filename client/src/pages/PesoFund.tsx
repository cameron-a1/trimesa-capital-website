import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

// Source: _PESOfundoverview@TCP(9).pdf, page 3
const keyNumbers = [
  { label: "Target Fund Size", value: "USD 35,000,000" },
  { label: "GP Commitment", value: "USD 700,000 (2%)" },
  { label: "Management Fee", value: "2.25% (investment) / 1.25% (harvest) / 0.25% (extensions)" },
  { label: "Carried Interest", value: "30% over 14% preferred return, 100% catch-up" },
  { label: "Target Returns", value: "25% gross IRR / 18%+ net IRR" },
  { label: "Fund Term", value: "12 years + up to 4×12-month extensions" },
  { label: "Investment Period", value: "5 years from Final Closing" },
  { label: "Ticket Size", value: "USD 1.00 - 3.00 million per transaction" },
];

// Source: _PESOfundoverview@TCP(9).pdf, page 3
const sectors = [
  "Renewable Energy",
  "Critical Infrastructure",
  "Real Estate",
  "Hospitality",
  "Technology",
];

// Source: _PESOfundoverview@TCP(9).pdf, page 3
const geography = [
  "Zambia",
  "Kenya",
  "Tanzania",
  "DP World Economic Zones",
];

// Source: _PESOfundoverview@TCP(9).pdf and PESOtermsTRIMESACAPITAL(10).pdf, page 4
const pipeline = [
  { name: "Ice Cube Production", location: "Zambia", sector: "Critical Infrastructure - Water Infrastructure" },
  { name: "Dry & Cold Storage", location: "Berbera Economic Zone", sector: "Critical Infrastructure - Cold Chain and Dry Storage" },
  { name: "Luxury Nature Lodge 1", location: "Zambia-Kenya", sector: "Hospitality - Eco-Tourism" },
  { name: "Solar Farm", location: "DP World Free Zone, Horn of Africa", sector: "Renewables - Solar Energy" },
  { name: "Private Chauffeur SaaS", location: "Kenya", sector: "Technology - SAAS" },
  { name: "Luxury Lodge 2", location: "Kenya", sector: "Hospitality - Luxury Hotels" },
  { name: "Luxury Residential Real Estate", location: "Zanzibar", sector: "Real Estate - Luxury Residential" },
  { name: "Commercial Real Estate and Hotels", location: "Zanzibar, Tanzania", sector: "Hospitality - Luxury Hotels" },
  { name: "Cold Storage", location: "Zambia", sector: "Critical Infrastructure - Cold Chain" },
  { name: "Commercial Real Estate", location: "Nairobi, Kenya", sector: "Critical Infrastructure - Warehouses and Storage" },
  { name: "Nightclub", location: "Zambia", sector: "Hospitality - Entertainment" },
  { name: "HNW AI Microfinance", location: "Kenya", sector: "Technology - FinTech" },
];

// Source: PESOtermsTRIMESACAPITAL(10).pdf, page 3
const concentrationLimits = [
  { limit: "≤17%", description: "Single asset (no more than 17% of total commitments to a single portfolio business)" },
  { limit: "≤35%", description: "Country (no more than 35% of total commitments in any single country)" },
  { limit: "≤27.5%", description: "Sector (no more than 27.5% of total commitments in any single defined sector)" },
];

export default function PesoFund() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PESO Fund
          </h1>
          <p className="text-xl text-gray-300">
            Private Emerging Special Opportunities I — Dedicated African Emerging Markets Private Equity
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-6">
            Africa-Dedicated Private Equity Strategy
          </h2>
          <div className="prose max-w-none text-[rgb(var(--slate))] leading-relaxed space-y-4">
            <p>
              TriMesa Capital Partners operates PESO as a <strong>specialized African emerging markets financial services platform</strong>. The fund is structured as a Cayman Islands Exempted Limited Partnership (ELP), CIMA-regulated, with holdings via Mauritius GBC1 (TCP Holdings Limited) and Mauritius SPVs for underlying investments. This structure provides institutional-grade governance while optimizing for African market execution.
            </p>
            <p>
              PESO generates capital appreciation and income through equity investments in sustainable African businesses addressing critical infrastructure gaps. Our focus is exclusively on <strong>Zambia, Kenya, Tanzania, and strategic DP World Economic Zones</strong>—markets where permanent local presence and deep relationships are prerequisites for success. We do not compete with generalist emerging markets funds; we operate where they cannot.
            </p>
            <p>
              With full-time operating partners embedded on the ground, TriMesa sources proprietary deal flow unavailable to international funds. We acquire minority or majority stakes in scalable African SMEs at <strong>ticket sizes of USD 1–3 million</strong> and target hold periods of <strong>4–7 years</strong>. Our permanent African presence is not a cost center—it is our competitive advantage and the foundation of our sourcing, execution, and value creation capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Numbers Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            Key Fund Terms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyNumbers.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-sm text-[rgb(var(--slate))] mb-1">
                        {item.label}
                      </div>
                      <div className="text-lg font-bold text-[rgb(var(--navy))] font-data">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors & Geography Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[rgb(var(--navy))] mb-6">
                Sector Focus
              </h2>
              <div className="space-y-3">
                {sectors.map((sector, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[rgb(var(--off-white))] rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-[rgb(var(--gold))]" />
                    <span className="text-[rgb(var(--navy))] font-medium">{sector}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[rgb(var(--navy))] mb-6">
                Geographic Focus
              </h2>
              <div className="space-y-3">
                {geography.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-[rgb(var(--off-white))] rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-[rgb(var(--gold))]" />
                    <span className="text-[rgb(var(--navy))] font-medium">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concentration Limits Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            Concentration & Risk Limits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {concentrationLimits.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-[rgb(var(--gold))] mb-3 font-data">
                    {item.limit}
                  </div>
                  <p className="text-sm text-[rgb(var(--slate))]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why PESO Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            The TriMesa Africa Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--navy))]">
                  Frontier Africa Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[rgb(var(--slate))]">
                  While most African PE funds concentrate in South Africa, Nigeria, and Egypt, TriMesa specializes in frontier markets: Zambia, Tanzania, Kenya, and DP World Economic Zones. These underserved African markets require permanent presence, local expertise, and operational execution that generalist funds cannot provide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--navy))]">
                  Africa Infrastructure Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[rgb(var(--slate))]">
                  TriMesa focuses on essential African infrastructure: cold chain logistics, renewable energy, water systems, and hospitality. These sectors address critical market gaps across African emerging markets and deliver resilient returns regardless of macroeconomic volatility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--navy))]">
                  Institutional Governance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[rgb(var(--slate))]">
                  TriMesa brings institutional-grade governance to African emerging markets. Deal Committees (SDC/NDC), Investment Committee with supermajority thresholds, LPACC oversight, conflict protocols, and Key Person provisions ensure disciplined execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            Current Pipeline
          </h2>
          <div className="grid gap-4">
            {pipeline.map((deal, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[rgb(var(--navy))] mb-1">
                        {deal.name}
                      </h3>
                      <p className="text-sm text-[rgb(var(--slate))]">
                        {deal.location}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-[rgb(var(--gold))] bg-[rgb(var(--gold))]/10 px-4 py-2 rounded-full whitespace-nowrap">
                      {deal.sector}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-8">
            Fund Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[rgb(var(--gold))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[rgb(var(--navy))] mb-2">
                      PESO Fund Overview
                    </h3>
                    <p className="text-sm text-[rgb(var(--slate))] mb-4">
                      Comprehensive overview of the fund strategy, team, investment policy, and portfolio management approach.
                    </p>
                    <a
                      href="/documents/PESO-Fund-Overview.pdf"
                      download
                      className="inline-block"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[rgb(var(--gold))] text-[rgb(var(--gold))] hover:bg-[rgb(var(--gold))]/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[rgb(var(--gold))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[rgb(var(--navy))] mb-2">
                      PESO Principal Terms
                    </h3>
                    <p className="text-sm text-[rgb(var(--slate))] mb-4">
                      Detailed terms including vehicle structure, fees, governance, key persons, and service providers.
                    </p>
                    <a
                      href="/documents/PESO-Principal-Terms.pdf"
                      download
                      className="inline-block"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[rgb(var(--gold))] text-[rgb(var(--gold))] hover:bg-[rgb(var(--gold))]/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgb(var(--navy))] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Request LP Materials
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            For institutional and accredited investors interested in PESO, please contact us to receive the full private placement memorandum and subscription documents.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
