export default function Hero() {
    return (
        <section className="bg-white lg:mt-0">
            <div className="grid max-w-screen-xl py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
                {/* Left: Image Code from screenshot */}
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                        className="lg:w-full w-72 lg:ml-0 ml-5"
                        src="/assets/img50.png"
                        alt="Excellent Coaching Classes"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="place-self-center lg:col-span-7 px-6 lg:px-0 lg:pl-9 relative">

                    {/* Decorative Paper Plane */}
                    <div className="absolute -top-24 left-0 hidden lg:block">
                        <img src="/assets/img53.png" alt="" className="w-48 opacity-90" />
                    </div>

                    <h1 className="max-w-2xl lg:mb-4 text-4xl lg:text-left text-center mt-4 ml-2 font-semibold tracking-tight leading-none md:text-5xl xl:text-5xl text-[#941932]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                        The Only Institution In Karnataka To Send The Highest Number of Students To Sainik School Every Year. "Since 20 Years"
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl lg:text-left text-center mt-4">
                        Empowering Young Minds for a Brighter Future
                    </p>
                </div>
            </div>
        </section>
    )
}
