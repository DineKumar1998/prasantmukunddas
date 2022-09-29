// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Navigation } from "swiper";


const CarouselComponent = ({ images }: any) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  }

  return (
    <div>
      <Swiper navigation={true} effect="fade" modules={[Navigation, EffectFade]} className="mySwiper" style={{ maxHeight: 700 }}>
      {images.map((image: string, index: number) => (
          <SwiperSlide key={index} className="flex justify-center align-middle overflow-hidden">
            <img
              draggable={false}
              src={`./images/slider/${image}`}
              style={{ minWidth: '100%', minHeight: '100%', flexShrink: 0}}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Carousel
        responsive={responsive}
        ssr
        itemClass="image-item"
        deviceType={'desktop'}
        draggable
      >
        {images.map((image: string, index: number) => (
          <div key={index} className="h-full">
            <img
              draggable={false}
              style={{ width: '100%', position: 'relative'}}
              src={`./images/slider/${image}`}
              alt={image}
            />
          </div>
        ))}
      </Carousel> */}
    </div>
  )
}

export default CarouselComponent
