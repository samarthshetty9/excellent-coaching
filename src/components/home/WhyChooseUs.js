'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    ShieldCheckIcon,
    MapPinIcon,
    UserGroupIcon,
    BuildingLibraryIcon,
    HomeModernIcon,
    AcademicCapIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/solid';

const features = [
    "Excellence in Academics",
    "City Centre Campus",
    "Friendly and Parental Environment",
    "Separate Residential Facilities",
    "Dedicated Non-Residential Spaces"
];

export default function WhyChooseUs() {
    return (
        <div className="bg-white py-12 sm:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 relative flex justify-center"
                    >
                        <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px]">

                            {/* Main Image - Full Composition */}
                            <div className="relative w-full h-full z-10">
                                <Image
                                    src="/assets/img8.png"
                                    alt="Classroom"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2"
                    >
                        <h4 className="text-[#941932] font-bold text-sm uppercase tracking-wide mb-2">
                            Explore Excellent Academy
                        </h4>
                        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                            Why Choose <span className="text-[#941932]">Us?</span>
                        </h2>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Only Institution to send highest number of students to sainik school since 20 years
                        </p>

                        <ul className="space-y-4 mb-10">
                            {features.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-black"></div>
                                    <span className="text-base font-bold text-gray-900">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.a
                            href="/assets/Excellent_BROCHURE.pdf"
                            download="Excellent_BROCHURE.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#941932] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-[#7F1D1D] transition-colors uppercase inline-block"
                        >
                            Our Brochure
                        </motion.a>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}
