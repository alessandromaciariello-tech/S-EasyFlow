import { HeroSection } from "@/components/sections/hero";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { FeaturesSection } from "@/components/sections/bento-features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FaqSection } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoTicker />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />

      {/* Simple Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4">
        <div className="container mx-auto max-w-[1400px] flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-4 h-4 rounded bg-[var(--color-accent)]" />
            <span className="font-semibold text-slate-900 tracking-tight text-lg">EasyFlow</span>
          </div>
          <p>© {new Date().getFullYear()} EasyFlow Systems. One timeline. Zero chaos.</p>
        </div>
      </footer>
    </>
  );
}
