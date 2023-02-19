import React, { useState } from 'react'
import images from '../shared/SliderImages';
import './slider.css'

const Slider = () => {
  const [sliderImage,setSliderImage] = useState(0);
  return (
    <div className='slider' style={{ backgroundImage:`url(${images[0].img})`}}>
      <div className='left'  onClick={()=> {sliderImage > 0 && setSliderImage(sliderImage-1)}}>
        <p className='left-button'>{"<"}</p>
      </div>
      <div className='centre'>
        <h1>{images[sliderImage].title}</h1>
        <div className='product-img'><img src={images[sliderImage]['product-img']}/></div>
      </div>
      <div className='right' onClick={()=>{sliderImage < images.length - 1 &&  setSliderImage(sliderImage+1)}}>
        <p className='right-button'> {">"}</p>
      </div>
    </div>
  )
}

export default Slider