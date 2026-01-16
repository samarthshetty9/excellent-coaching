import Navbar from "@/components/common/Navbar";
import CoursesSection from "@/components/courses/CoursesSection";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

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
