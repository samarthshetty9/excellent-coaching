import Navbar from "@/components/common/Navbar";
import GallerySection from "@/components/gallery/GallerySection";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

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
