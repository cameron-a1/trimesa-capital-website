import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    investorType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.investorType || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real implementation, this would send to a backend
    toast.success("Inquiry submitted successfully", {
      description: "We will review your request and respond within 2 business days.",
    });

    // Reset form
    setFormData({
      name: "",
      organization: "",
      email: "",
      investorType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            Africa Emerging Markets Expertise — Institutional & Accredited Investors
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-6">
                Investor Inquiry
              </h2>
              <p className="text-[rgb(var(--slate))] mb-8">
                TriMesa Capital Partners serves institutional and accredited investors seeking dedicated African emerging markets exposure. Our team will respond to qualified inquiries within 2 business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[rgb(var(--navy))]">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="organization" className="text-[rgb(var(--navy))]">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Your organization name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[rgb(var(--navy))]">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="investorType" className="text-[rgb(var(--navy))]">
                    Investor Type *
                  </Label>
                  <Select
                    value={formData.investorType}
                    onValueChange={(value) => setFormData({ ...formData, investorType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select investor type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family-office">Family Office</SelectItem>
                      <SelectItem value="institutional">Institutional Investor</SelectItem>
                      <SelectItem value="pension-fund">Pension Fund</SelectItem>
                      <SelectItem value="endowment">Endowment / Foundation</SelectItem>
                      <SelectItem value="dfi">Development Finance Institution</SelectItem>
                      <SelectItem value="fund-of-funds">Fund of Funds</SelectItem>
                      <SelectItem value="hnwi">High Net Worth Individual (Accredited)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[rgb(var(--navy))]">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your investment interests and any specific questions about PESO..."
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90"
                >
                  Submit Inquiry
                </Button>

                <p className="text-xs text-[rgb(var(--slate))] mt-4">
                  By submitting this form, you confirm that you are an institutional or accredited investor and acknowledge that PESO is offered only through confidential private placement memorandum.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[rgb(var(--navy))] mb-1">
                          Email
                        </h3>
                        <p className="text-[rgb(var(--slate))]">
                          investors@trimesacapital.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[rgb(var(--navy))] mb-1">
                          Locations
                        </h3>
                        <p className="text-[rgb(var(--slate))] text-sm">
                          <strong>Cayman Islands:</strong> Registered Office<br />
                          <strong>Kenya:</strong> Nairobi (Operating Partner)<br />
                          <strong>Zambia:</strong> Lusaka (Operating Partner)<br />
                          <strong>Tanzania:</strong> Dar es Salaam (Operating Partner)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[rgb(var(--navy))] mb-1">
                          Phone
                        </h3>
                        <p className="text-[rgb(var(--slate))]">
                          Available upon request to qualified investors
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-[rgb(var(--gold))]/10 border-l-4 border-[rgb(var(--gold))] p-6 rounded-lg">
                <h3 className="font-bold text-[rgb(var(--navy))] mb-2">
                  Important Notice
                </h3>
                <p className="text-sm text-[rgb(var(--slate))]">
                  This is not an offer to sell securities. Securities are offered only through confidential private placement memorandum to institutional and accredited investors who meet the eligibility criteria set forth in the fund's governing documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
