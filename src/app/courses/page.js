import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Courses() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <CoursesSection />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
