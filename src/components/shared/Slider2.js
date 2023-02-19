import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider2.css'

const Slider2 = () => {
  return (
    <div  class="slider">
        <Carousel  infiniteLoop useKeyboardArrows autoPlay showThumbs={false} >
                <div>
                    <img src="../Resources/ProductImages/RogBanner.jpg" />
                </div>
                <div>
                    <img src="../Resources/ProductImages/IdeaPadBanner.jpg" />
                </div>
                <div>
                    <img src="../Resources/ProductImages/MobileBanner.jpg" />
                </div>
        </Carousel>
    </div>
  )
}

export default Slider2