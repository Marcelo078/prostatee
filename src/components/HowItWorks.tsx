import { Leaf, Droplet, Target } from "lucide-react";
import prostaViveSingle from "@/assets/prostavive-single-bottle.png";

const steps = [
  {
    icon: Leaf,
    title: "Natural Compounds",
    description: "Contains powerful plant extracts including saw palmetto, cordyceps, and panax ginseng"
  },
  {
    icon: Droplet,
    title: "Cellular Support",
    description: "Works at the cellular level to maintain healthy prostate tissue and function"
  },
  {
    icon: Target,
    title: "Targeted Results",
    description: "Supports healthy urinary flow, prostate size, and overall male wellness"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How Does ProstaVive Work?
          </h2>
          <p className="text-lg text-muted-foreground">
            A scientifically-formulated blend that addresses prostate health from multiple angles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--gradient-hero)" }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <img
              src={prostaViveSingle}
              alt="ProstaVive bottle with natural ingredients"
              className="w-full max-w-sm h-auto"
              style={{
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.15))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
