import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StudentFeatures from "@/components/home/StudentFeatures";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IntegrationSection from "@/components/home/IntegrationSection";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import HomePopup from "@/components/home/HomePopup";

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
