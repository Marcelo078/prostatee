import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open("https://ea3fdchmz1lhpleguk64879r1b.hop.clickbank.net", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      style={{
        background: "var(--gradient-cta)",
        boxShadow: "var(--shadow-floating)",
      }}
      aria-label="Get ProstaVive Now"
    >
      <span className="flex items-center gap-2 px-6 py-4 rounded-full text-white font-bold text-sm md:text-base hover:scale-105 transition-transform">
        <ShoppingCart className="h-5 w-5" />
        <span className="hidden sm:inline">Get ProstaVive Now</span>
        <span className="sm:hidden">Order Now</span>
      </span>
    </button>
  );
};
