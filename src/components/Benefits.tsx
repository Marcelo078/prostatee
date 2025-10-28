import { Activity, Heart, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Activity,
    title: "Prostate Health Support",
    description: "Helps maintain optimal prostate size and function for men over 40*"
  },
  {
    icon: Heart,
    title: "Urinary Tract Flow",
    description: "Promotes healthy urinary tract function and comfortable bathroom visits*"
  },
  {
    icon: Zap,
    title: "Energy & Vitality",
    description: "Boosts overall energy levels and supports male vitality*"
  },
  {
    icon: Shield,
    title: "Natural Ingredients",
    description: "Formulated with clinically studied natural compounds and plant extracts"
  }
];

export const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose ProstaVive?
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive formula designed to support men's prostate health and overall well-being
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all hover:scale-105"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <CardContent className="pt-6 text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ background: "var(--gradient-hero)" }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
