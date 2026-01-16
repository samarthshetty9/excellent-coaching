'use client';
import { UserIcon } from '@heroicons/react/24/outline';

const reviews = [
    {
        name: 'Suresh Handage',
        content: 'Excellent Coaching Classes offers top-notch coaching facilities with experienced instructors. The multiple facilities cater to a variety of subjects, providing students with a well-rounded education.',
    },
    {
        name: 'Bhagyashree',
        content: 'This is the best platform for students.Thanks for all team of excellent coaching centre.good environment and satisfied services.',
    },
    {
        name: 'Parashuram',
        content: 'One of the Best Coaching Center we have ever seen,, celebrate all festival with students and give fantastic Results, this is not easy for all. Thank you all the Excellent Staff 💗',
    },
];

export default function Testimonials() {
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto w-full max-w-[95%] px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
                    <div className="text-left">
                        <h3 className="text-[#941932] font-semibold text-lg underline decoration-[#941932]/30 underline-offset-4 mb-2">
                            Feedback
                        </h3>
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            Explore Experiences
                        </h2>
                    </div>

                    <a
                        href="https://www.justdial.com/Dharwad/Excellent-Coaching-Classes-Beside-Sagar-Hotel-Near-Garadi-Mani-Kalghatgi-Road/0836PX836-X836-190228163539-I8G3_BZDET/reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7F1D1D] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#941932] transition-colors shadow-lg uppercase tracking-wide inline-block"
                    >
                        Read All Reviews
                    </a>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative hover:shadow-md transition-all h-full">

                            {/* Avatar Circle */}
                            <div className="w-24 h-24 rounded-full bg-[#F54E60] flex items-center justify-center mb-6 shadow-md">
                                <UserIcon className="w-12 h-12 text-white stroke-1" />
                            </div>

                            {/* Name */}
                            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">
                                {review.name}
                            </h3>

                            {/* Content */}
                            <p className="text-gray-600 text-base leading-relaxed mb-12 flex-grow">
                                {review.content}
                            </p>

                            {/* Quote Icon (Bottom Left) */}
                            <div className="absolute bottom-8 left-8">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F54E60" strokeWidth="1" className="opacity-60">
                                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                                </svg>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
