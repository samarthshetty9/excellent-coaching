import { AcademicCapIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

const services = [
    {
        name: '4th Grade',
        description: 'Engage young minds with our dynamic 4th-grade curriculum, blending core subjects with interactive learning for academic excellence.',
        icon: PuzzlePieceIcon,
        color: 'bg-[#FF723A]', // Orange
    },
    {
        name: '5th Grade',
        description: 'Embark on an educational adventure with our enriching curriculum tailored for young learners, inspiring curiosity and igniting a passion for discovery.',
        icon: AcademicCapIcon,
        color: 'bg-[#F14D5D]', // Red
    },
];

export default function Features() {
    return (
        <div className="bg-white py-12 sm:py-16" id="courses">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-1 py-4">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl leading-tight mb-8">
                            Coaching Services <br /> for Students
                        </h2>
                        <div className="relative pl-6 border-l-4 border-[#941932]/20">
                            <p className="text-lg leading-relaxed text-gray-700 italic">
                                "Tailored for Sainik School and Navodaya exams, our coaching provides personalized support and smart strategies for success. Get the help you to excel and boost your confidence for a brighter future."
                            </p>
                        </div>
                    </div>

                    {/* Right Columns: Service Cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div key={service.name} className="relative group rounded-3xl p-8 bg-[#F8EBD3] border border-[#941932]/30 hover:border-[#941932] transition-colors duration-300">

                                {/* Icon Circle */}
                                <div className={`h-16 w-16 rounded-full ${service.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                    <service.icon className="h-10 w-10 text-white" aria-hidden="true" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#941932] mb-4">
                                    {service.name}
                                </h3>

                                <p className="text-base leading-7 text-gray-700">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
