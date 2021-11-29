import React from "react";
// Component
import { Image } from "components/Image";
import { useSlider } from "components/Slider";
// brand Item
import BrandItem, { BrandProps } from "./BrandItem";
// assets
import AfterpayImage from "assets/images/layout/Afterpay.png";
import ZipImage from "assets/images/layout/Zip.png";
import PaypalImage from "assets/images/layout/Paypal.png";
import EwayImage from "assets/images/layout/Eway.png";
import VisaImage from "assets/images/layout/Visa.png";
import MasterImage from "assets/images/layout/master.png";
import AmericanImage from "assets/images/layout/American.png";
import SectigoImage from "assets/images/layout/Sectigo.png";
// styled component
import { PartnerSectionWrapper } from "./PartnerSection.style";
// Genereted Component  by HOC

const options = {
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
  autoplay: true,
  breakpoints: {
    1024: {
      slidesPerView: 8,
    },
  },
};
const BrandSlider = useSlider<BrandProps>(BrandItem, options);
// ------------------------------------------------------
const brandData: Array<BrandProps> = [
  { icon: <Image src={AfterpayImage} width={87} height={17}></Image> },
  { icon: <Image src={ZipImage} width={58} height={20}></Image> },
  { icon: <Image src={PaypalImage} width={54} height={14}></Image> },
  { icon: <Image src={EwayImage} width={58} height={26}></Image> },
  { icon: <Image src={VisaImage} width={54} height={18}></Image> },
  { icon: <Image src={MasterImage} width={48} height={29}></Image> },
  { icon: <Image src={AmericanImage} width={72} height={27}></Image> },
  { icon: <Image src={SectigoImage} width={63} height={13}></Image> },
];
const PartnerSection = () => {
  return (
    <PartnerSectionWrapper>
      <BrandSlider sliderData={brandData} />
    </PartnerSectionWrapper>
  );
};
export default PartnerSection;
