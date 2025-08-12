export const metadata = {
  title: "Gosheaper - AI-Powered Business Automation",
  description: "AI-Powered Business Automation",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import FAQs from "@/components/faqs";
import AutomationForm from "@/components/automation-form";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <FAQs />
      <AutomationForm />
    </>
  );
}
