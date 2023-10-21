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
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://i.ibb.co/NWXd562/aff4d6b4df03bfc5b47e50f6e8105127.png" alt="" />
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