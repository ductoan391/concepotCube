import React, { Fragment } from 'react';
import "./secondPage.scss";
import console1 from '../../../../Assets/Images/console-img-1.png';
import console2 from '../../../../Assets/Images/console-img-2.png';
import console3 from '../../../../Assets/Images/console-img-3.png';
import console4 from '../../../../Assets/Images/console-img-4.png';
import console5 from '../../../../Assets/Images/console-img-5.png';
import console6 from '../../../../Assets/Images/console-img-6.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SecondPage() {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return (
        <div className='secondPage'>
            <div className="secondPage-container">
                <div className="secondPage-title">
                    <p className='secondPage-title_text'>Creative,</p>
                    <p className='secondPage-title_text'> Fun and-</p>
                    <p className='secondPage-title_text'>Enjoyable</p>
                    <p className='secondPage-title_text'>work</p>
                    <p className='secondPage-title_text'>Impressive</p>
                </div>
                <div className="console_box">
                    <div className="wrapper">
                        <Slider {...settings}>
                            <div className='wrapper_img'>
                                <img src={console1} alt="" className='console-img' />
                            </div>
                            <div className="wrapper_img">
                                <img src={console4} alt="" className='console-img' />
                            </div>
                            <div className='wrapper_img'>
                                <img src={console5} alt="" className='console-img' />
                            </div>
                            <div className='wrapper_img'>
                                <img src={console3} alt="" className='console-img' />
                            </div>
                            <div className='wrapper_img'>
                                <img src={console2} alt="" className='console-img' />
                            </div>
                            <div className='wrapper_img'>
                                <img src={console6} alt="" className='console-img' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecondPage