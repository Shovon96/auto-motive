
const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full lg:h-[80vh]" src="https://media.discordapp.net/attachments/1177886803424976896/1184017418738212925/360_F_460444211_E7j3njYE705Rk1guKz9LKh58gFgiTybV.jpg?ex=658a7126&is=6577fc26&hm=8fc5824020620fb48603a80a432d990d47ecab0828e926713d0a75510e83f6e5&=&format=webp&width=1025&height=342" alt="" />
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