import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import SwiperCore from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageCarousel = ({ images = [] }) => {
  SwiperCore.use([Navigation]);
  const [swiper, setSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Imágenes por defecto si no se proporcionan
  const defaultImages = [
    "/images/educando_kids_1_o.jpg",
    "/images/educando_kids_meet_2_o.jpg",
    "/images/educando_kids_with_teacher_3_o.jpg",
    "/images/educando_kids_4_o.jpg",
    "/images/educando_kids_5_o.jpg",
    "/images/educando_people_6_o.jpg",
  ];

  const imageList = images.length > 0 ? images : defaultImages;

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiperInstance) => {
          setSwiper(swiperInstance);
          // Actualizar los refs de navegación después de que se monta el swiper
          setTimeout(() => {
            if (swiperInstance.params.navigation?.prevEl) {
              swiperInstance.params.navigation.prevEl = prevRef.current;
            }
            if (swiperInstance.params.navigation?.nextEl) {
              swiperInstance.params.navigation.nextEl = nextRef.current;
            }
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
          }, 0);
        }}
        className="w-full h-full"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={`image-${index}`} className="w-full h-full">
            <div className="relative w-full h-full bg-gray-200">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación */}
      <button
        ref={prevRef}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      <button
        ref={nextRef}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Siguiente slide"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default ImageCarousel;
