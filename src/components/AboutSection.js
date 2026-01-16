'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section className="bg-white ">
            <div className="grid max-w-screen-xl px-5 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                {/* Image */}
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    {/* Using img50.png as placeholder for logo13/img51.png */}
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-3/4"
                        src="/assets/img51.6509cd577e92c3bb9c68.png"
                        alt="About Us"
                    />
                </div>

                {/* Text Content */}
                <div className=" place-self-center lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#941932] font-semibold relative">
                            <span className="border-b-2 border-[#941932]">About Us</span>
                        </p>

                        <h1
                            className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-4xl xl:text-4xl mt-8 text-black"
                            style={{ lineHeight: "1.2" }}
                        >
                            Simplify Learning, Amplify Fun: Join the Excellent Group of
                            Institutions!
                        </h1>
                        <br />
                        <br />
                        <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-700">
                            At the Excellent Group of Institutions, we believe in making
                            learning enjoyable while achieving remarkable results. With a
                            proud legacy of consistently sending the highest number of
                            students to Sainik Schools and Navodaya for over two decades.
                            Along side that ensuring the student is ready for upcoming
                            competitive exams
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
