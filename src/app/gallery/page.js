import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Gallery() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <GallerySection />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
