import React from 'react'
import Slider from "react-slick";

const SliderComp = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true
      };
  return (
    <div>
        <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-4'>
            <div>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, consequatur eos culpa tempora voluptatibus, fugit dolor dignissimos qui quis dolorum vitae laboriosam! Suscipit minima possimus soluta velit inventore omnis natus.</div>
                <div className='border- rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='max-w-[600px]' src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-ayakkabısı-FP6HDr.png" alt="" />
          </div>
          <div className='!flex items-center bg-gray-100 px-4'>
          <div>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, consequatur eos culpa tempora voluptatibus, fugit dolor dignissimos qui quis dolorum vitae laboriosam! Suscipit minima possimus soluta velit inventore omnis natus.</div>
                <div className='border- rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='max-w-[600px]' src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4c8083c3-feed-46de-ae52-a2a5cdd09b0e/air-max-plus-ayakkabısı-0WbhWb.png" alt="" />
          </div>
        </Slider>

    </div>
  )
}

export default SliderComp