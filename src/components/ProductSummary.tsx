import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export const ProductSummary = () => {
  const handleCTAClick = () => {
    window.open("https://ea3fdchmz1lhpleguk64879r1b.hop.clickbank.net", "_blank");
  };

  return (
    <section className="py-16 md:py-24" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary" style={{ boxShadow: "var(--shadow-card)" }}>
            <CardContent className="pt-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
                ProstaVive Product Summary
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6" />
                    Pros
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Natural, plant-based ingredient formula</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Supports prostate health and urinary function</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Manufactured in FDA-approved facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Clinically studied ingredients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Supports energy and overall vitality</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-destructive flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Cons
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Results may vary by individual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Requires consistent daily use for best results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>May take several weeks to notice benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">✗</span>
                      <span>Not a replacement for medical treatment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Bottom Line
                </h3>
                <p className="text-muted-foreground mb-4">
                  ProstaVive is a comprehensive prostate health supplement designed for men over 40 who want to maintain healthy prostate function naturally. With its blend of clinically studied ingredients including saw palmetto, cordyceps, and panax ginseng, it addresses multiple aspects of prostate wellness, urinary tract health, and male vitality. While individual results may vary, the natural formulation and quality manufacturing standards make it a solid choice for men looking to proactively support their prostate health.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Best suited for: Men 40+ experiencing or wanting to prevent prostate-related concerns, looking for a natural supplement to support overall male health and wellness.
                </p>
              </div>

              <div className="text-center">
                <Button
                  onClick={handleCTAClick}
                  size="lg"
                  className="text-lg px-8 py-6 h-auto font-bold hover:scale-105 transition-all"
                  style={{
                    background: "var(--gradient-cta)",
                    boxShadow: "var(--shadow-cta)",
                  }}
                >
                  👉 Check Current Pricing & Availability
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
