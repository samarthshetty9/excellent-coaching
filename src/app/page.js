import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StudentFeatures from "@/components/StudentFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
import IntegrationSection from "@/components/IntegrationSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomePopup from "@/components/HomePopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomePopup />
      <Navbar />
      <Hero />
      <Features />
      <StudentFeatures />
      <WhyChooseUs />
      <IntegrationSection />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
