'use client';
import { ClockIcon } from '@heroicons/react/24/outline';

const milestones = [
    {
        year: '1996',
        title: '4 Students',
        description: 'Journey began with 4 students, aiming to provide quality education in our coaching classes.',
    },
    {
        year: '2000',
        title: '60 Students',
        description: 'First major triumph with a student achieving a top rank in their respective field.',
    },
    {
        year: '2005',
        title: '200 Students',
        description: 'Expanded infrastructure and enriched faculty for a holistic learning experience.',
    },
    {
        year: '2010',
        title: '1500 Students',
        description: 'Integrated digital learning tools to make education more engaging.',
    },
    {
        year: '2015',
        title: '3000 Students',
        description: 'Celebrated enrollment of over 3000 students, marking growing trust.',
    },
    {
        year: '2020',
        title: '6000 Students',
        description: 'Achieved consistent top ranks in various fields, bolstering our reputation.',
    },
    {
        year: '2024',
        title: '10000 Students',
        description: 'Reached a milestone with over 10000 students, symbolizing commitment and adaptability.',
    },
];

export default function Milestones() {
    return (
        <div className="bg-white py-12 sm:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <h2 className="text-[#941932] text-3xl font-bold text-center mb-20">Milestones</h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#941932] md:-ml-0.5"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={milestone.year} className="relative flex flex-col md:flex-row items-center">

                                {/* Desktop Layout Pattern: 
                    If Even: [Content Card] - [Circle] - [Year]
                    If Odd:  [Year]         - [Circle] - [Content Card]
                */}

                                {/* LEFT SIDE (Desktop) */}
                                <div className={`flex-1 w-full md:w-1/2 flex ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start md:justify-end'} mb-10 md:mb-0 pl-20 md:pl-0 md:pr-12`}>

                                    {/* If Even: Show Card. If Odd: Show Year. */}
                                    {index % 2 === 0 ? (
                                        /* Content Card on Left */
                                        <div className="w-full max-w-md text-left border-b-2 border-gray-100 pb-4 md:border-none md:pb-0">
                                            <h3 className="text-gray-900 font-bold mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    ) : (
                                        /* Year on Left */
                                        <span className="text-[#941932] text-2xl font-medium hidden md:block">
                                            {milestone.year}
                                        </span>
                                    )}

                                </div>

                                {/* CENTER CIRCLE */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#941932] text-white border-4 border-white shadow-sm z-10">
                                    <ClockIcon className="w-6 h-6" />
                                </div>

                                {/* RIGHT SIDE (Desktop) */}
                                <div className={`flex-1 w-full md:w-1/2 flex justify-start pl-20 md:pl-12`}>

                                    {/* If Even: Show Year. If Odd: Show Card. */}
                                    {index % 2 === 0 ? (
                                        /* Year on Right */
                                        <span className="text-[#941932] text-2xl font-medium hidden md:block">
                                            {milestone.year}
                                        </span>
                                    ) : (
                                        /* Content Card on Right */
                                        <div className="w-full max-w-md text-left border-b-2 border-gray-100 pb-4 md:border-none md:pb-0">
                                            <h3 className="text-gray-900 font-bold mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    )}

                                    {/* Mobile Year Override: Always show year next to title for mobile if needed, 
                        BUT screenshot style suggests precise timeline. 
                        Let's just show year above title on mobile for simplicity if hidden desktop.
                    */}
                                    <span className="text-[#941932] text-xl font-medium md:hidden absolute top-0 left-24 -mt-1">
                                        {milestone.year}
                                    </span>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
