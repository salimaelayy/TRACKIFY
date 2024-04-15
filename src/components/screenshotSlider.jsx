import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mockup4 from "../assets/profile.jpg"
import mockup1 from "../assets/expense_crud.jpg"
import mockup2 from "../assets/overview_Dashboard.jpg"
import mockup3 from "../assets/income.jpg"

const ScreenshotSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <><div className='bg-secondary  text-background text-center py-10'>
            <h1 className='font-bold text-5xl py-4' >Screenshots</h1>
        <h3 className='font-normal text-xl'>Browse through the major features of Money Manager.</h3>
        <Slider {...settings} className="mx-auto max-w-6xl ">
            <div className="p-4">
                <img src={mockup1} alt="Screenshot 1" className="rounded-lg "/>
            </div>
            <div className="p-4">
                <img src={mockup2} alt="Screenshot 2" className="rounded-lg "/>
            </div>
            <div className="p-4">
                <img src={mockup3} alt="Screenshot 3" className="rounded-lg "/>
            </div>
            <div className="p-4">
                <img src={mockup4} alt="Screenshot 2" className="rounded-lg "/>
            </div>
        </Slider>
        </div>
        </>
    );
};

export default ScreenshotSlider;
