import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <ContactInfo />
            <ContactForm />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
