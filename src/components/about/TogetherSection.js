'use client';
import { motion } from 'framer-motion';

export default function TogetherSection() {
    return (
        <div className="bg-white py-12 sm:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-[#941932] font-semibold text-lg mb-4">
                            At Excellent Coaching classes
                        </h3>

                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 leading-tight">
                            Together we build a brighter future for every student
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-lg max-w-lg">
                            Join us at Excellent Coaching classes and embark a journey of discovery growth and success
                        </p>
                    </motion.div>

                    {/* RIGHT: Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-md">
                            <img
                                src="/assets/logo1.666630931f2f122f1973.png"
                                alt="Excellent Coaching Classes"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
