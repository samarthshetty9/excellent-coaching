'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup on mount
        setIsOpen(true);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 max-w-lg w-full relative"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center leading-tight">
                            Welcome to Excellent Coaching Classes!
                        </h2>

                        <p className="text-[#941932] font-bold text-lg mb-4 uppercase tracking-wide">
                            ADMISSION ARE OPEN
                        </p>

                        <div className="flex items-center justify-between">
                            <button
                                onClick={closePopup}
                                className="text-[#941932] font-bold text-sm sm:text-base hover:opacity-80 transition-opacity"
                            >
                                Close
                            </button>

                            <Link
                                href="/contact"
                                className="bg-[#7F1D1D] hover:bg-[#941932] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-md"
                            >
                                Enquire Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
