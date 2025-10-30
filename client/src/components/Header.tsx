import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "PESO Fund", href: "/peso-fund" },
  { name: "Governance & ESG", href: "/governance-esg" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <img
            src="/brand/trimesa-logo-transparent.png"
            alt="TriMesa Capital Partners"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === item.href
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
