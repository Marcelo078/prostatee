import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ProstaVive?",
    answer: "ProstaVive is an advanced dietary supplement formulated to support healthy prostate size and function in men, particularly those over 40. It contains a blend of natural ingredients including saw palmetto, cordyceps, panax ginseng, and other plant-based compounds."
  },
  {
    question: "How do I take ProstaVive?",
    answer: "The recommended dosage is typically included on the product label. Generally, supplements like this are taken daily with water, preferably with a meal. Always follow the specific instructions on your bottle and consult your healthcare provider before starting any new supplement."
  },
  {
    question: "Is ProstaVive worth it?",
    answer: "ProstaVive is formulated with clinically studied ingredients known to support prostate health. Many men over 40 experience prostate-related concerns, and natural supplements can be a valuable part of a proactive health routine. Results may vary individually."
  },
  {
    question: "Are there any side effects?",
    answer: "ProstaVive is made with natural ingredients and is generally well-tolerated. However, as with any supplement, some individuals may experience mild digestive discomfort. If you have existing health conditions or take medications, consult your healthcare provider before use."
  },
  {
    question: "How long does it take to see results?",
    answer: "Individual results vary, but many users report noticing positive changes within 2-4 weeks of consistent use. For optimal results, it's recommended to take ProstaVive daily for at least 60-90 days while maintaining a healthy lifestyle."
  },
  {
    question: "Where is ProstaVive manufactured?",
    answer: "ProstaVive is manufactured in FDA-approved facilities following strict quality control standards. The product adheres to Good Manufacturing Practices (GMP) to ensure safety and efficacy."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about ProstaVive
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
