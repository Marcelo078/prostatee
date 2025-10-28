import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Award } from "lucide-react";
import prostaViveBottles from "@/assets/prostavive-bottles.png";

export const Hero = () => {
  const handleCTAClick = () => {
    window.open("https://ea3fdchmz1lhpleguk64879r1b.hop.clickbank.net", "_blank");
  };

  return (
    <section 
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 order-2 md:order-1">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Advanced Formula
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ProstaVive
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Supports Healthy Prostate Size & Function*
            </p>
            
            <div className="space-y-3">
              {["Promotes Prostate Health", "Maintains Urinary Tract Flow", "Boosts Overall Energy"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="text-lg px-8 py-6 h-auto font-bold hover:scale-105 transition-all"
                style={{
                  background: "var(--gradient-cta)",
                  boxShadow: "var(--shadow-cta)",
                }}
              >
                👉 See Current Offers & Pricing
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-5 w-5" />
                <span>FDA Approved Facility</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div 
              className="relative"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
              }}
            >
              <img
                src={prostaViveBottles}
                alt="ProstaVive supplement bottles - supports healthy prostate size and function"
                className="w-full max-w-md h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
