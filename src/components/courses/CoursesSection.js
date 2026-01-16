'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const coursesData = {
    regular: {
        cards: [
            {
                grade: '4th Grade',
                type: 'Regular classes',
                gender: 'Boys & Girls',
                title: 'Basic Foundation - Comprehensive Foundation',
                description: 'Full fledge classes for Sainik school , Navoday , ALIKE , Murarji Desai , Muddenhalli Entrance Examinations',
                features: ['weekly examination', 'weekly monitoring on improvement'],
                duration: '12 Months',
                image: '/assets/reg1.jpg' // Using reg1.jpg for 4th Grade
            },
            {
                grade: '5th Grade',
                type: 'Regular classes',
                gender: 'Boys & Girls',
                title: 'Basic Foundation - Comprehensive Foundation',
                description: 'Full fledge classes for Sainik school , Navoday , ALIKE , Murarji Desai , Muddenhalli Entrance Examinations',
                features: ['weekly examination', 'weekly monitoring on improvement'],
                duration: '12 Months',
                image: '/assets/reg2.jpg'
            }
        ],
        details: [
            {
                title: '1. Comprehensive Preparation Classes:',
                content: 'Full-fledged classes designed specifically for Sainik School, Navodaya Vidyalaya, ALIKE, Murarji Desai, and Muddenhalli Entrance Examinations.Detailed subject materials provided to cover all aspects of the exam syllabi, ensuring thorough preparation.'
            },
            {
                title: '2. Regular Assessment and Monitoring:',
                content: 'Weekly examinations conducted to gauge student progress and understanding. Monthly tests to assess overall comprehension and retention. Continuous monitoring focused on identifying areas for improvement, ensuring students are on track to achieve their academic goals.'
            }
        ]
    },
    vacation: {
        cards: [
            {
                grade: '4th Grade',
                type: 'Vacation classes',
                gender: 'Boys & Girls',
                title: 'Basic Foundation - Comprehensive Foundation',
                description: 'Full fledge classes for Sainik school , Navoday , ALIKE , Murarji Desai , Muddenhalli Entrance Examinations',
                features: ['Basic foundation course', 'Foundation for Sainik school , Navoday , ALIKE , Murarji Desai , Muddenhalli Entrance Examinations'],
                duration: '2 Months',
                image: '/assets/vac1.jpg'
            },
            {
                grade: '5th Grade',
                type: 'Vacation classes',
                gender: 'Boys & Girls',
                title: 'Basic Foundation - Comprehensive Foundation',
                description: 'Full fledge classes for Sainik school , Navoday , ALIKE , Murarji Desai , Muddenhalli Entrance Examinations',
                features: ['Basic foundation course', 'Foundation for Sainik school , Navoday , ALIKE , Murarji Desai , Muddenhalli Entrance Examinations'],
                duration: '2 Months',
                image: '/assets/vac2.jpg'
            }
        ],
        details: [
            {
                title: '1. Comprehensive Foundation:',
                content: 'Our 5th grade course content offers a solid groundwork covering essential subjects and skills for academic success.'
            },
            {
                title: '2. Entrance Exam Preparation:',
                content: 'Tailored to prepare students for entrance examinations of prestigious institutions like Sainik School, Navodaya Vidyalaya, ALIKE, Murarji Desai, and Muddenhalli, our curriculum ensures students are equipped to excel in these exams.'
            }
        ]
    }
};

export default function CoursesSection() {
    const [activeTab, setActiveTab] = useState('regular');

    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-[#941932] font-bold text-xl mb-2 flex justify-center items-center gap-2">
                        Featured Courses
                    </h2>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        {/* <img src="/assets/bg3.png" className="w-16 h-16 hidden sm:block" alt="" /> */}
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Explore our Popular Courses
                        </h1>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At Excellent Coaching Classes, we're dedicated to empowering students with the knowledge and skills they need to excel in their academic and professional endeavors.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('regular')}
                        className={`px-8 py-3 rounded-2xl font-medium text-sm transition-all w-full md:w-auto ${activeTab === 'regular'
                            ? 'bg-red-900 text-white shadow-lg ring-4 ring-red-300'
                            : 'text-[#941932] hover:bg-red-50'
                            }`}
                    >
                        Regular
                    </button>
                    <button
                        onClick={() => setActiveTab('vacation')}
                        className={`px-8 py-3 rounded-2xl font-medium text-sm transition-all w-full md:w-auto ${activeTab === 'vacation'
                            ? 'bg-red-900 text-white shadow-lg ring-4 ring-red-300'
                            : 'text-[#941932] hover:bg-red-50'
                            }`}
                    >
                        Vacation
                    </button>
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    <div className="flex flex-wrap justify-center gap-8">
                        {coursesData[activeTab].cards.map((card, index) => (
                            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                                <div className="h-48 w-full bg-gray-200 relative">
                                    <img src={card.image} alt={card.title} className="object-cover h-full w-full" />
                                </div>
                                <div className="p-5">
                                    <div className="flex gap-3 text-xs font-bold text-[#941932] mb-3 uppercase tracking-wide">
                                        <span>{card.grade}</span>
                                        <span>• {card.type.replace(' classes', '')}</span>
                                        {card.gender && <span>• {card.gender}</span>}
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                        {card.title}
                                    </h5>
                                    <div className="mb-3 font-normal text-gray-700 text-sm">
                                        {card.description}
                                        <ul className="list-disc ml-5 mt-2 space-y-1">
                                            {card.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center px-5 mb-5 text-[#941932] font-bold">
                                    <ClockIcon className="w-5 h-5 mr-2" />
                                    {card.duration}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Details Section */}
                    {coursesData[activeTab].details.map((detail, index) => (
                        <div key={index} className="max-w-4xl mx-auto px-4">
                            <h3 className="font-semibold text-2xl sm:text-3xl mb-4 text-[#941932]">
                                {detail.title}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {detail.content}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
