import React from 'react';
import "./thirdPage.scss";
import onGame from "../../../../Assets/Images/on-game-dev-img.png";
import onUi from "../../../../Assets/Images/on-ui-design-img.png";
import onSi from "../../../../Assets/Images/on-si-img.png";
import onMar from "../../../../Assets/Images/on-game-mar-img.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";



function ThirdPage() {
    const { t } = useTranslation();
    const dataList = t('thirdPage', { returnObjects: true }) as any;

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
        <div className="thirdPage">
            <div className="thirdPage-container">
                <div className="list-cards">
                    <div className="card card_first">
                        <p className='card_title'>Game <br />
                            Development
                        </p>
                        <img src={onGame} alt="" className='card_img' />
                        <div className="desc-wrap">
                            <div className="desc_first">Game Development</div>
                            <div className="desc_second">
                                <p>{dataList.gameDev.text1}<br />
                                    {dataList.gameDev.text2}<br />
                                    {dataList.gameDev.text3}<br />
                                    {dataList.gameDev.text4}<br />
                                    {dataList.gameDev.text5}<br />
                                    {dataList.gameDev.text6}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card_second">
                        <p className='card_title'>UI <br />
                            design
                        </p>
                        <img src={onUi} alt="" className='card_img' />
                        <div className="desc-wrap">
                            <div className="desc_first">UI design</div>
                            <div className="desc_second">
                                <p>{dataList.ui.text1}<br />
                                    {dataList.ui.text2}<br />
                                    {dataList.ui.text3}<br />
                                    {dataList.ui.text4}<br />
                                    {dataList.ui.text5}<br />
                                    {dataList.ui.text6}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card_third">
                        <p className='card_title'>SI <br />
                            &nbsp;
                        </p>
                        <img src={onSi} alt="" className='card_img' />
                        <div className="desc-wrap">
                            <div className="desc_first">SI <br />
                            </div>
                            <div className="desc_second">
                                <p>{dataList.si.text1}<br />
                                    {dataList.si.text2}<br />
                                    {dataList.si.text3}<br />
                                    {dataList.si.text4}<br />
                                    {dataList.si.text5}<br />
                                    {dataList.si.text6}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card_fourth">
                        <p className='card_title'>Game <br />
                            Marketing
                        </p>
                        <img src={onMar} alt="" className='card_img' />
                        <div className="desc-wrap">
                            <div className="desc_first">Game Marketing</div>
                            <div className="desc_second">
                                <p>{dataList.gameMar.text1}<br />
                                    {dataList.gameMar.text2}<br />
                                    {dataList.gameMar.text3}<br />
                                    {dataList.gameMar.text4}<br />
                                    {dataList.gameMar.text5}<br />
                                    {dataList.gameMar.text6}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thirdPage-container_mobile">
                <Slider {...settings}>
                    <div className="card-mobile ">
                        <div className="card-mobile_first">
                            <p className='card-mobile_title'>Game <br />
                                Development
                            </p>
                            <img src={onGame} alt="" className='card-mobile_img' />
                            <div className="desc-mobile_wrap">
                                <div className="desc-mobile_first">Game Development</div>
                                <div className="desc-mobile_second">
                                    <p>
                                        VFX, 소셜광고 디자인, 아트웍, 게임 개발 등<br />
                                        이미지와 디자인 제작에 필요한 모든 것 그리고<br />
                                        고객이 필요로 하는 기술과 결과물을 제공합니다.<br />
                                        또한 모션그래픽 및 자막, 종적 타이포그래피,<br />
                                        애니메이션 등 촬영 이미지와 CG를<br />
                                        합성하여 완성도 있는 결과물을 도출합니다.<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-mobile ">
                        <div className="card-mobile_first">
                            <p className='card-mobile_title'>UI <br />
                                design
                            </p>
                            <img src={onUi} alt="" className='card-mobile_img' />
                            <div className="desc-mobile_wrap">
                                <div className="desc-mobile_first">UI design</div>
                                <div className="desc-mobile_second">
                                    <p>
                                        VFX, 소셜광고 디자인, 아트웍, 게임 개발 등<br />
                                        이미지와 디자인 제작에 필요한 모든 것 그리고<br />
                                        고객이 필요로 하는 기술과 결과물을 제공합니다.<br />
                                        또한 모션그래픽 및 자막, 종적 타이포그래피,<br />
                                        애니메이션 등 촬영 이미지와 CG를<br />
                                        합성하여 완성도 있는 결과물을 도출합니다.<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-mobile ">
                        <div className="card-mobile_first">
                            <p className='card-mobile_title'>SI <br />
                                &nbsp;
                            </p>
                            <img src={onSi} alt="" className='card-mobile_img' />
                            <div className="desc-mobile_wrap">
                                <div className="desc-mobile_first">SI</div>
                                <div className="desc-mobile_second">
                                    <p>
                                        VFX, 소셜광고 디자인, 아트웍, 게임 개발 등<br />
                                        이미지와 디자인 제작에 필요한 모든 것 그리고<br />
                                        고객이 필요로 하는 기술과 결과물을 제공합니다.<br />
                                        또한 모션그래픽 및 자막, 종적 타이포그래피,<br />
                                        애니메이션 등 촬영 이미지와 CG를<br />
                                        합성하여 완성도 있는 결과물을 도출합니다.<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-mobile ">
                        <div className="card-mobile_first">
                            <p className='card-mobile_title'>Game <br />
                                Marketing
                            </p>
                            <img src={onMar} alt="" className='card-mobile_img' />
                            <div className="desc-mobile_wrap">
                                <div className="desc-mobile_first">Game Marketing</div>
                                <div className="desc-mobile_second">
                                    <p>
                                        VFX, 소셜광고 디자인, 아트웍, 게임 개발 등<br />
                                        이미지와 디자인 제작에 필요한 모든 것 그리고<br />
                                        고객이 필요로 하는 기술과 결과물을 제공합니다.<br />
                                        또한 모션그래픽 및 자막, 종적 타이포그래피,<br />
                                        애니메이션 등 촬영 이미지와 CG를<br />
                                        합성하여 완성도 있는 결과물을 도출합니다.<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default ThirdPage