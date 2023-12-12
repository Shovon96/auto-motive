import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
    
    return (
        <div>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://i.ibb.co/yqDwFvX/a08f210cc1dd3d315e7744c415107f54.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://media.discordapp.net/attachments/1177886803424976896/1184019714448572446/M-DEX_Flotte_StagePresentation_1680x756px.jpg?ex=658a7349&is=6577fe49&hm=f331ba68e64d6df454ebbaeba404da407ef9a168ff76ce9dc4086484e16cbd74&=&format=webp&width=927&height=417" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://i.ibb.co/wrjzW4W/11x5.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://i.ibb.co/z2dmPpm/ys-finest-luxury-banner.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;