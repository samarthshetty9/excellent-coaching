import {
    UserIcon,
    ClipboardDocumentListIcon,
    ShareIcon,
    PaintBrushIcon,
    GlobeAltIcon,
    FaceSmileIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Experienced Facility', // Note: User typo in screenshot says "Facility" but descriptions says "Faculty". Keeping "Facility" to match screenshot visual if needed, but description implies Faculty. Let's stick to screenshot title "Facility" or correct it? Screenshot says "Experienced Facility". I will use "Experienced Facility" to be exact.
        description: 'Led by a seasoned team of educators, our experienced faculty brings decades of expertise to guide each student\'s journey towards success. With a passion for teaching and a commitment to excellence, they make learning an enriching and joyful experience.',
        icon: UserIcon,
    },
    {
        name: 'Innovative Curriculum',
        description: 'Up to date curriculum that helps the students to tackle modern problems We use the latest methods and tools to make sure kids learn in the best possible way for today.',
        icon: ClipboardDocumentListIcon,
    },
    {
        name: 'Holistic Development',
        description: 'At Excellent Coaching Classes Dharwad, we believe in nurturing the whole child. Beyond academics, our approach focuses on fostering social, emotional, and physical growth. Through a range of activities and programs, we support students in developing into well-rounded individuals ready to tackle life\'s challenges with confidence.',
        icon: ShareIcon,
    },
    {
        name: 'Art Facilities',
        description: 'boasts state-of-the-art facilities, including well-equipped classrooms, libraries, science labs, sports facilities, and technology resources, creating an optimal learning environment.',
        icon: PaintBrushIcon,
    },
    {
        name: 'Global Perspective',
        description: 'We help students see the world from a global perspective, learning about different cultures, languages, and issues. This prepares them to succeed in a connected world, where they can make a positive difference with understanding and respect.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Parental Involvement',
        description: 'We value the active involvement of parents in their child\'s education journey. At Excellent Coaching Classes Dharwad, we encourage open communication and collaboration between parents, teachers, and students. Through regular updates, parent-teacher meetings, and involvement in school events, we strive to create a supportive partnership that nurtures student success and well-being.',
        icon: FaceSmileIcon,
    },
];

export default function StudentFeatures() {
    return (
        <div className="bg-[#FFFDF7] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h3 className="text-[#941932] font-semibold text-lg underline decoration-[#941932]/30 underline-offset-4 mb-2">
                        Students
                    </h3>
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        What are you looking for?
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col items-center text-center bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                {/* Icon Circle */}
                                <dt className="flex flex-col items-center gap-y-6 text-2xl font-bold leading-7 text-[#111827]">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                                        <feature.icon className="h-10 w-10 text-black stroke-1" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                {/* Description */}
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto text-sm lg:text-[15px] leading-relaxed text-gray-500">
                                        {feature.description}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
