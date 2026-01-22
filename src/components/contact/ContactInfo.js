'use client';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function ContactInfo() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: Classroom Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src="/assets/img35.ec86f164241358127498.png"
                                alt="Classroom"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Contact Details */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Get In Touch With Us
                        </h2>

                        {/* FIX 1: Reduced mb-10 to mb-6 to pull the list closer to this text */}
                        <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                            Ready to get started on the journey to a fitter, brighter future for your child?
                            <br />
                            Contact us today.
                        </p>

                        {/* FIX 2: Reduced space-y-8 to space-y-6 to tighten the gap between items */}
                        <div className="space-y-6">

                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPinIcon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-[#0D1B2A] font-bold text-sm uppercase leading-relaxed pt-2">
                                    LAXMESHWAR GARDEN, BHARATI NAGAR, DHARWAD.
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#DC2626] flex items-center justify-center flex-shrink-0 mt-1">
                                    <PhoneIcon className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-[#0D1B2A] font-bold text-sm leading-relaxed pt-3">
                                    +91 9538001300 , +91 9538677021, +91 7892608805
                                </p>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center flex-shrink-0 mt-1">
                                    <EnvelopeIcon className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-[#0D1B2A] font-bold text-sm leading-relaxed pt-3">
                                    excellentdwd@gmail.com
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}