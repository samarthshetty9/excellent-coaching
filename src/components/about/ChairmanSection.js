'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ChairmanSection() {
    return (
        <div className="bg-white py-14">
            <div className="mt-14 lg:ml-20 flex flex-col lg:flex-row p-5">

                {/* LEFT: Chairman Image & Name */}
                <div className="flex flex-col">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:max-w-80 w-96 mt-6 lg:mt-0 object-cover"
                        src="/assets/chairman.f88627fc979b5645d232.png"
                        alt="Shree. BASAVARAJ KOULAGI"
                    />
                    <h1 className="lg:ml-16 ml-16 my-3 font-semibold text-[#941932]">
                        Shree. BASAVARAJ KOULAGI
                    </h1>
                    <p className="lg:ml-28 ml-28 font-semibold text-gray-600">Hon . Chairman</p>
                </div>

                {/* RIGHT: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:ml-20 max-w-4xl"
                >
                    <h1 className="text-3xl font-semibold text-[#941932] underline lg:ml-0 ml-24 lg:mt-0 mt-4">
                        Chairman
                    </h1>

                    <p className="text-xl font-semibold my-4 text-black">
                        Success in Excellent Education is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.
                    </p>

                    <div className="text-gray-900">
                        <p>
                            Mr. Basavaraj Koulagi, the eminent educationalist in Karnataka, is the founding chairman of the Excellent Group of Institutions. The journey began modestly in 1996 with just four students in a single room. Over the span of 28 years, the Excellent Group has flourished remarkably, now serving over 10,000 students. Its branches are strategically dispersed across the state, making quality education accessible to a wide spectrum of learners.
                        </p>
                        <p className="my-5">
                            One notable achievement of the Excellent Group is its coaching arm, Excellent Coaching Classes. For the past 25 years, it has maintained a distinguished record of sending the highest number of students to prestigious institutions like Sainik School and Navodaya in the state. This remarkable feat underscores the institution's commitment to academic excellence and its pivotal role in shaping the educational landscape of Karnataka.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
