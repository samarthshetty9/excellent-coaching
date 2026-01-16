'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MissionVision() {
    const [activeTab, setActiveTab] = useState('mission');

    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Tabs */}
                <div className="flex gap-8 mb-12">
                    <button
                        onClick={() => setActiveTab('mission')}
                        className={`px-8 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-colors ${activeTab === 'mission'
                            ? 'bg-[#7F1D1D] text-white'
                            : 'bg-transparent text-[#941932] hover:bg-gray-50'
                            }`}
                    >
                        Mission
                    </button>
                    <button
                        onClick={() => setActiveTab('vision')}
                        className={`px-8 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-colors ${activeTab === 'vision'
                            ? 'bg-[#7F1D1D] text-white'
                            : 'bg-transparent text-[#941932] hover:bg-gray-50'
                            }`}
                    >
                        Vision
                    </button>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'mission' ? (
                            <motion.div
                                key="mission"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="text-gray-700 text-lg">
                                    <li className="font-bold mb-4">
                                        Our goal is to give students a well-rounded education. We want to:
                                    </li>
                                    <li className="my-3 ml-7 list-disc">Teach discipline and a love for learning</li>
                                    <li className="my-3 ml-7 list-disc">Promote physical health through academics, activities, and sports</li>
                                    <li className="my-3 ml-7 list-disc">We aim to equip students with the skills, values, and strength they need to succeed in school, leadership roles, and life.</li>
                                </ul>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="vision"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="text-gray-700 text-lg">
                                    <li className="font-semibold mb-4">
                                        Our vision is to create strong leaders who do well in school, work well in teams, and stay fit. We want to offer a balanced education that encourages a passion for learning and good health. Our aim is to build a culture of respect, responsibility, and strength, getting students ready for a successful future.
                                    </li>
                                    <li className="list-disc ml-5 my-2 text-xl">Empower students through personalized learning experiences.</li>
                                    <li className="list-disc ml-5 my-2 text-xl">Cultivate a dynamic learning environment for future leaders.</li>
                                    <li className="list-disc ml-5 my-2 text-xl">Champion academic excellence with a focus on individual strengths.</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Common Footer Content */}
                    <div className="border-t border-gray-100 pt-6">
                        <h3 className="text-[#941932] font-semibold text-lg mb-4">
                            We are committed to
                        </h3>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>fostering a love for learning, promoting critical thinking skills</p>
                            <p>cultivating a strong sense of community and respect among our students, staff, and parents.</p>
                            <p>Innovative teaching methods, personalized attention, and a focus on holistic development,</p>
                            <p className="font-semibold text-[#941932] mt-4">we aim to empower our students to become lifelong learners, responsible global citizens, and leaders of tomorrow.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
