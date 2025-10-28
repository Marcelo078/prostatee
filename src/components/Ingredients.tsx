import { Card, CardContent } from "@/components/ui/card";

const ingredients = [
  {
    name: "Saw Palmetto",
    benefit: "Supports healthy prostate size and urinary function*"
  },
  {
    name: "Cordyceps",
    benefit: "Promotes energy, stamina, and male vitality*"
  },
  {
    name: "Panax Ginseng",
    benefit: "Enhances overall energy and supports immune health*"
  },
  {
    name: "Neem Extract",
    benefit: "Provides antioxidant support for cellular health*"
  },
  {
    name: "Maca Root",
    benefit: "Supports hormonal balance and energy levels*"
  },
  {
    name: "Nettle Root",
    benefit: "Maintains healthy urinary tract function*"
  }
];

export const Ingredients = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powerful Natural Ingredients
          </h2>
          <p className="text-lg text-muted-foreground">
            Each serving contains a potent blend of clinically studied compounds
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all"
            >
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 text-primary">
                  {ingredient.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {ingredient.benefit}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </section>
  );
};
