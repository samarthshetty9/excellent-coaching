'use client';
import Image from 'next/image';

export default function ContactForm() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <h2 className="text-[#0D1B2A] text-3xl font-bold mb-12">Contact Us</h2>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* LEFT: Contact Form */}
                    <div className="w-full lg:w-1/2 p-8 border border-gray-200 rounded-lg shadow-sm">
                        <form className="space-y-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                                    <input type="text" id="first-name" required className="w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#941932] sm:text-sm sm:leading-6 bg-[#FAFAFA]" placeholder="First Name" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                                    <input type="text" id="last-name" required className="w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#941932] sm:text-sm sm:leading-6 bg-[#FAFAFA]" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                                    <input type="text" id="phone" required className="w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#941932] sm:text-sm sm:leading-6 bg-[#FAFAFA]" placeholder="Enter your number" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Your Email</label>
                                    <input type="email" id="email" required className="w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#941932] sm:text-sm sm:leading-6 bg-[#FAFAFA]" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="query" className="block text-sm font-bold text-gray-900 mb-2">Query</label>
                                <textarea id="query" rows={4} required className="w-full rounded-md border-0 py-2.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#941932] sm:text-sm sm:leading-6 bg-[#FAFAFA]" placeholder="Text here"></textarea>
                            </div>

                            <div className="flex justify-center">
                                <button type="button" className="rounded-md bg-[#7F1D1D] px-8 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#941932] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#941932] transition-colors">
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                            {/* Placeholder for the laptop user image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-[#F3F4F6]">
                                <img
                                    src="/assets/img39.5e2de79b11d6314d0cb2.png"
                                    alt="Contact Us"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
