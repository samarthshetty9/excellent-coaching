'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrophyIcon, LightBulbIcon } from '@heroicons/react/24/solid';

export default function IntegrationSection() {
    return (
        <div className="bg-white py-12 sm:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A] leading-tight mb-8">
                            Experience the integration of traditional wisdom and modern educational practices at our institution.
                        </h2>

                        <div className="space-y-6 text-gray-600 mb-10">
                            <p className="leading-relaxed">
                                <span className="font-semibold text-gray-800">Learnability in teachers</span> - teachers with learnability ensure continuous growth and adaptation to evolving educational needs.
                            </p>
                            <p className="font-bold text-black border-l-4 border-[#941932] pl-3">
                                A good teacher is one who can learn
                            </p>

                            <p className="leading-relaxed">
                                <span className="font-semibold text-gray-800">Teachability in students</span> - teachability in students cultivates a mindset of openness and eagerness to learn, enhancing their educational journey.
                            </p>
                            <p className="font-bold text-black border-l-4 border-[#941932] pl-3">
                                A good student is one who can teach
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                            {/* Feature 1 */}
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <TrophyIcon className="w-10 h-10 text-yellow-500" />
                                </div>
                                <h3 className="text-[#941932] font-bold text-xl">Higher Success</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    At Higher Success, we empower school students to achieve academic excellence and personal growth through comprehensive coaching classes.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <LightBulbIcon className="w-10 h-10 text-blue-400" />
                                </div>
                                <h3 className="text-[#941932] font-bold text-xl">Improved Skills</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    "Improved Skills offers targeted training to enhance your abilities and excel in your endeavors."
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT: Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative flex justify-center"
                    >
                        <div className="relative w-full max-w-lg aspect-[4/3]">

                            {/* Paper Plane Path (Decorative SVG) */}
                            <div className="absolute -top-24 -left-12 w-64 h-32 z-0 hidden lg:block opacity-60 text-[#941932]">
                                <svg viewBox="0 0 200 100" className="w-full h-full fill-none stroke-current" strokeWidth="2" strokeDasharray="6 6">
                                    <path d="M10,90 Q50,90 80,50 T180,10" />
                                    {/* Plane Icon */}
                                    <path d="M180,10 L160,20 L165,0 Z" fill="currentColor" stroke="none" />
                                </svg>
                            </div>

                            {/* Dot Pattern (Bottom Right) */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 z-0 text-purple-400">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor">
                                    <pattern id="blue-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="2" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#blue-dots)" />
                                </svg>
                            </div>

                            {/* Main Image */}
                            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl z-10 bg-gray-100 border-4 border-white">
                                <Image
                                    src="/assets/card4.jpg"
                                    alt="Yoga / Meditation"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
