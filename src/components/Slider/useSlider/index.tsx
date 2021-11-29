import React, { ComponentType } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//  Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import SwiperCore, { Pagination, Autoplay } from "swiper";
// types
import { SliderProps } from "types/components/Slider";
// styled component
import { BannerWrapper } from "./useSlider.style";
// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

// -----------------------------------------------------------------------------

const CommonSlider =
  <DataType,>(
    ItemWrapper: ComponentType<DataType>,
    options: any = {},
    SwiperWrapper: ComponentType = BannerWrapper
  ): React.FC<SliderProps<DataType>> =>
  // eslint-disable-next-line react/display-name
  ({ sliderData = [], itemOptions }) => {
    return (
      <SwiperWrapper>
        <Swiper {...options}>
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {sliderData.map((item, index) => (
            <SwiperSlide key={`bannerSlier_${index}`}>
              <ItemWrapper {...itemOptions} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    );
  };

export default CommonSlider;
