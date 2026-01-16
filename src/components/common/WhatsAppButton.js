import Image from 'next/image';

export default function WhatsAppButton() {
    return (
        <div className="flex justify-end bottom-10 right-5 fixed z-50 object-contain">
            <a
                href="https://wa.me/+919538001300"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="/assets/whatsapp.png"
                    className="lg:w-20 lg:h-20 w-16 h-16 lg:mb-0 mb-0 shadow-2xl rounded-full"
                    alt="WhatsApp"
                />
            </a>
        </div>
    );
}
