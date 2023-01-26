import { Swiper, SwiperSlide } from "swiper/react";
import promotionalImage from '../assets/promotionalImage.png';

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
text-align: center;
    font-size: 18px;
    background: #fff;
    height: 40vh;
    width: 80vw;
`;

const StyledSlideWithBackground = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3rem;
    background-image: url(${promotionalImage});
    background-size: cover;
`

export default function ProductSlider() {
    return (
        <>
            <StyledSwiper navigation={true} modules={[Navigation]} className="mySwiper">
                <StyledSlideWithBackground></StyledSlideWithBackground>
            </StyledSwiper>
        </>
    );
}
