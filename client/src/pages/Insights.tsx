import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const articles = [
  {
    title: "Why Resilience Beats Growth in Frontier Markets",
    slug: "resilience-beats-growth-frontier-markets",
    excerpt: "In volatile emerging markets, businesses focused on essential services demonstrate superior downside protection and consistent returns regardless of macroeconomic conditions.",
    date: "Coming Soon",
    category: "Investment Strategy",
  },
  {
    title: "Cold Chain Infrastructure: Africa's Hidden Yield Engine",
    slug: "cold-chain-infrastructure-africa-yield",
    excerpt: "The structural deficit in cold storage and ice production across East and Southern Africa creates persistent market failures—and exceptional investment opportunities for patient capital.",
    date: "Coming Soon",
    category: "Sector Analysis",
  },
  {
    title: "The Structural Advantage of Local Presence",
    slug: "structural-advantage-local-presence",
    excerpt: "Why permanent on-the-ground teams in Zambia, Kenya, and Tanzania generate proprietary deal flow and access to off-market opportunities at attractive valuations.",
    date: "Coming Soon",
    category: "Market Access",
  },
  {
    title: "Renewable Energy in Underserved Markets",
    slug: "renewable-energy-underserved-markets",
    excerpt: "Solar power economics in markets with chronic electricity shortages and high energy costs. How renewable infrastructure investments deliver both impact and returns.",
    date: "Coming Soon",
    category: "Sector Analysis",
  },
  {
    title: "Navigating Political Risk in Emerging Markets",
    slug: "navigating-political-risk-emerging-markets",
    excerpt: "Risk mitigation strategies through sector selection, local authority engagement, and alignment with national development priorities in frontier economies.",
    date: "Coming Soon",
    category: "Risk Management",
  },
  {
    title: "The Economics of Niche Market Leadership",
    slug: "economics-niche-market-leadership",
    excerpt: "How USD 1-3 million ticket sizes enable portfolio companies to achieve minimum efficient scale and build defensible market positions in underserved segments.",
    date: "Coming Soon",
    category: "Investment Strategy",
  },
];

export default function Insights() {
  const handleArticleClick = (slug: string) => {
    toast.info("Article coming soon", {
      description: "This content is currently being developed.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Perspectives on emerging markets private equity, frontier market investing, and the structural opportunities in underserved African economies.
          </p>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="border-2 hover:border-[rgb(var(--gold))] transition-all hover:shadow-lg cursor-pointer"
                onClick={() => handleArticleClick(article.slug)}
              >
                <CardHeader>
                  <div className="text-xs font-medium text-[rgb(var(--gold))] mb-2 uppercase tracking-wide">
                    {article.category}
                  </div>
                  <CardTitle className="text-[rgb(var(--navy))] text-xl leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(var(--slate))] mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[rgb(var(--slate))] font-medium">
                      {article.date}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold))]/80 hover:bg-[rgb(var(--gold))]/10"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-4">
              Stay Informed
            </h2>
            <p className="text-[rgb(var(--slate))] mb-8">
              Subscribe to receive updates on new insights, market analysis, and portfolio developments.
            </p>
            <Button
              size="lg"
              className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90"
              onClick={() => {
                toast.info("Newsletter subscription coming soon");
              }}
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
