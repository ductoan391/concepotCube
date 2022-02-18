import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fourthPage.scss"
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function FourthPage() {
    const location = useLocation()
    const { t } = useTranslation();
    const data = t('fourth', { returnObjects: true }) as any;
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                }
            }
        ]
    };

    const renderData = data.story.map((val: any) => (
        <div className={"item-story item-" + (val.title)} key={val.id}>
            <p className={"title title" + (val.title)}>{val.title}</p>

            <div className="item-box">
                {
                    val.children.map((child: any) => (
                        <div className="item-box-item" key={child.id}>
                            <p className='item-box_title'><span className="item-box_titleColor">{child.titleColor2}</span> {child.title1} <span className='item-box_titleColor'>{child.titleColor}</span> {child.title2}{child.title3}</p>
                            <p className='item-box_type'>{child.type}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    ))
    return (
        <div className="fourth-page">
            <div className='fourth-container'>
                <h1 className="fourth-title">History</h1>
                <div className="list-story">
                    <div className="wrapper_list">
                        <Slider {...settings}>
                            {renderData}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FourthPage;
