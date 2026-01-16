import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Milestones from "@/components/Milestones";
import TogetherSection from "@/components/TogetherSection";
import MissionVision from "@/components/MissionVision";
import ChairmanSection from "@/components/ChairmanSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
