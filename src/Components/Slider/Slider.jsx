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
                        <img className="w-full h-[90vh]" src="https://i.ibb.co/5GnMFf2/M-DEX-Flotte-Stage-Presentation-1680x756px.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[90vh]" src="https://i.ibb.co/NWXd562/aff4d6b4df03bfc5b47e50f6e8105127.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[90vh]" src="https://media.discordapp.net/attachments/1163919577130999870/1164726373718442025/f3712c26bca08ab2f4fe36ca9d0e8af4.png?ex=654442f7&is=6531cdf7&hm=2bc98306d0ef26b255b2bfd24c9828f8d162792810236616075dda72ea723ea9&=" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;