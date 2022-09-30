// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Navigation } from "swiper";

const CarouselComponent = ({ images }: any) => {

  return (
    <div>
      <Swiper navigation={true} effect="fade" modules={[Navigation, EffectFade]} className="mySwiper" style={{ maxHeight: 700 }}>
      {images.map((image: string, index: number) => (
          <SwiperSlide key={index} className="flex justify-center align-middle">
            <img
              draggable={false}
              src={`./images/slider/${image}`}
              className='max-w-full'
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselComponent
