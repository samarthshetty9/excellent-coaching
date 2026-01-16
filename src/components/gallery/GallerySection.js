'use client';
import { motion } from 'framer-motion';

const galleryImages = [
    { src: '/assets/gal1.jpg', alt: 'Gallery Image 1' },
    { src: '/assets/gal2.jpg', alt: 'Gallery Image 2' },
    { src: '/assets/gal3.jpg', alt: 'Gallery Image 3' },
    { src: '/assets/gal4.jpg', alt: 'Gallery Image 4' },
    { src: '/assets/gal5.jpg', alt: 'Gallery Image 5' },
    { src: '/assets/gal6.jpg', alt: 'Gallery Image 6' },
    { src: '/assets/gal7.jpg', alt: 'Gallery Image 7' },
    { src: '/assets/gal8.jpg', alt: 'Gallery Image 8' },
    { src: '/assets/gal9.jpg', alt: 'Gallery Image 9' },
    { src: '/assets/gal10.jpg', alt: 'Gallery Image 10' },
    { src: '/assets/gal11.jpg', alt: 'Gallery Image 11' },
    { src: '/assets/gal12.jpg', alt: 'Gallery Image 12' },
    { src: '/assets/gal13.png', alt: 'Gallery Image 13' },
];

export default function GallerySection() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl font-bold text-[#941932] inline-block border-b-2 border-[#941932] pb-2">
                        Gallery
                    </h1>
                    {/* Decorative Plane (using img53.png if appropriate, or just leaving simple for now) */}
                    <img
                        src="/assets/img53.png"
                        className="absolute hidden md:block w-24 top-0 right-1/3 opacity-80"
                        alt=""
                        style={{ transform: 'translate(100%, -50%) rotate(45deg)' }}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${index === galleryImages.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''
                                }`}
                        >
                            <div className={`w-full relative overflow-hidden ${index === galleryImages.length - 1 ? 'aspect-[16/9] sm:aspect-[21/9] lg:aspect-[3/1]' : 'aspect-[4/3]'
                                }`}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
