import Navbar from "@/components/common/Navbar";
import AboutSection from "@/components/about/AboutSection";
import Milestones from "@/components/about/Milestones";
import TogetherSection from "@/components/about/TogetherSection";
import MissionVision from "@/components/about/MissionVision";
import ChairmanSection from "@/components/about/ChairmanSection";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function About() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <AboutSection />
            <Milestones />
            <TogetherSection />
            <MissionVision />
            <ChairmanSection />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
