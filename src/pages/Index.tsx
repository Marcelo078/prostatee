import { SEOHead } from "@/components/SEOHead";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Ingredients } from "@/components/Ingredients";
import { ProductSummary } from "@/components/ProductSummary";
import { FAQ } from "@/components/FAQ";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEOHead />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Ingredients />
      <ProductSummary />
      <FAQ />
      <FloatingCTA />
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            *These statements have not been evaluated by the Food and Drug Administration.
          </p>
          <p className="text-sm opacity-90 mt-2">
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="text-xs opacity-75 mt-4">
            © 2025 ProstaVive Review. All rights reserved. | Health & Fitness / Men's Health
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
