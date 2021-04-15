// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
export function Slider() {
  return (
    <Swiper className="container mx-auto"
      effect={'fade'}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{delay: 3000, disableOnInteraction: false}}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className="w-full h-auto" src="http://www.cucuta-nortedesantander.gov.co/sites/cucutanortedesantander/content/files/000962/48066_48066_1500x375.png?c=98143" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src="https://www.micolombiadigital.gov.co/sites/superadmin/content/files/000803/40134_40134_1200x298.jpeg?c=54840" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src="http://www.cucuta-nortedesantander.gov.co/sites/cucutanortedesantander/content/files/000938/46897_46897_1200x300.jpg?c=6311" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src="http://www.cucuta-nortedesantander.gov.co/sites/cucutanortedesantander/content/files/000775/38704_38704_1200x300.jpg?c=90065" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src="http://www.cucuta-nortedesantander.gov.co/sites/cucutanortedesantander/content/files/000859/42939_42939_1280x320.png?c=5866" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src="http://www.cucuta-nortedesantander.gov.co/sites/cucutanortedesantander/content/files/000909/45402_45402_1418x354.jpg?c=44682" alt=""/></SwiperSlide>
    </Swiper>
  );
}
