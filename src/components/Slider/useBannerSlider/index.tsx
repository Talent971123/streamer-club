import React, { ComponentType } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//  Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import SwiperCore, { Parallax, Pagination, Navigation } from "swiper";
// types
import { BannerSliderProps, BannerItemProps } from "types/components/Slider";
// styled component
import { BannerWrapper } from "./useBannerSlider.style";
// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);

// -----------------------------------------------------------------------------

const BannerSlider =
  (ItemWrapper: ComponentType<BannerItemProps>): React.FC<BannerSliderProps> =>
  // eslint-disable-next-line react/display-name
  ({ sliderData = [] }) => {
    return (
      <BannerWrapper>
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            renderBullet: (_, className) => {
              return '<span class="bulletContainer ' + className + '"> </span>';
            },
          }}
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {sliderData.map((item, index) => (
            <SwiperSlide key={`bannerSlier_${index}`}>
              <ItemWrapper {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </BannerWrapper>
    );
  };

export default BannerSlider;
