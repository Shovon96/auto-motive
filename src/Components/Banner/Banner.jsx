
const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full lg:h-[80vh]" src="https://i.ibb.co/vs5vH9B/360-F-460444211-E7j3nj-YE705-Rk1gu-Kz9-LKh58g-Fgi-Tyb-V.jpg" alt="" />
            </div>
            <div 
            data-aos="fade-down"
            data-aos-duration="2000"
            className="absolute top-24 lg:top-56 px-14 lg:px-28 hidden md:block">
                <h1 className="text-3xl lg:text-5xl font-extrabold text-rose-600">BEST AUTOMOTIVE</h1>
                <h4 className="text-2xl font-semibold text-white my-3">CARS FOR SELE & RENT</h4>
                <p className="text-gray-200 my-2">Revolutionary electric drivetrain meets sleek design, defining the future <br /> of sustainable mobility in our cutting-edge automotive masterpiece.</p>
                <button className="btn bg-rose-600 hover:bg-rose-700 text-white border-0">contact us</button>
            </div>
        </div>
    );
};

export default Banner;