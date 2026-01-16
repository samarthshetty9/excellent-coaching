import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* LEFT COLUMN: Logo & About */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative h-12 w-12 overflow-hidden">
                                <Image
                                    src="https://excellentcoachingclassesdwd.in/static/media/img29.396a3de75d0eee926a59.png"
                                    alt="Excellent Coaching Classes Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold uppercase tracking-wide text-[#941932]">Excellent</span>
                                <span className="text-xs font-semibold tracking-wide text-gray-700">Coaching Classes Dharwad</span>
                            </div>
                        </div>

                        <p className="text-sm font-semibold text-gray-800 leading-relaxed mb-6">
                            "The only institution in Karnataka to send the highest number of students to Sainik School every year."
                        </p>

                        <div className="flex gap-4">
                            {/* Social Icons Placeholders (Using text/unicode for simplicity as per screenshot look) */}
                            <a href="#" className="w-8 h-8 rounded-full bg-[#941932] text-white flex items-center justify-center text-sm font-bold hover:bg-black transition-colors">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-[#941932] text-white flex items-center justify-center text-sm font-bold hover:bg-black transition-colors">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-[#941932] text-white flex items-center justify-center text-sm font-bold hover:bg-black transition-colors">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-[#941932] text-white flex items-center justify-center text-sm font-bold hover:bg-black transition-colors">
                                <span className="text-[10px]">G+</span>
                            </a>
                        </div>
                    </div>

                    {/* CENTER COLUMN: Contact Info */}
                    <div className="lg:col-span-1 pl-0 lg:pl-10">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:excellentdwd@gmail.com" className="text-sm font-bold text-gray-800 hover:text-[#941932]">
                                    excellentdwd@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919538001300" className="text-sm font-bold text-gray-800 hover:text-[#941932]">
                                    +91 9538001300
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-gray-800 hover:text-[#941932]">
                                    Terms and conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-gray-800 hover:text-[#941932]">
                                    Privacy & policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-gray-800 hover:text-[#941932]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT COLUMN: Video Placeholder */}
                    <div className="lg:col-span-2">
                        <div className="w-full h-full min-h-[250px] relative overflow-hidden rounded-lg shadow-lg">
                            <video
                                src="/assets/vedio.696120bf4d1c6313b250.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="text-center pt-8 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">
                        Copyright@ 2024 <span className="font-bold">Excellent Academy</span>. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
