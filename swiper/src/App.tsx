import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperSlideChildren from "./components/SwiperSlideChildren";

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper bg-black"
    >
      <SwiperSlide>
        <SwiperSlideChildren
          src="https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631_1280.jpg"
          alt="lonely man sitting"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperSlideChildren
          src="https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701_1280.jpg"
          alt="girl walking teddy bear"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperSlideChildren
          src="https://cdn.pixabay.com/photo/2018/01/28/13/24/portrait-3113651_1280.jpg"
          alt="portrait people"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperSlideChildren
          src="https://cdn.pixabay.com/photo/2019/04/06/05/17/wallpaper-4106667_1280.jpg"
          alt="wallpaper"
        />
      </SwiperSlide>
    </Swiper>
  );
}
