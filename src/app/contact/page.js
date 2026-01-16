import Navbar from "@/components/common/Navbar";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

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
