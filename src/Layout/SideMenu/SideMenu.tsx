import { gsap } from 'gsap';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import i18n from '../../i18n';
import './SideMenu.scss';
import Home from '../../Components/Pages/Home/Home';
import Contact from '../../Components/Pages/Contact/Contact';
import Team from '../../Components/Pages/Team/Team';
import Works from '../../Components/Pages/Works/index';

const SideMenu = () => {
    const [selected, setSelected] = useState<'ko' | 'en'>('ko');
    const [colorMenu, setColorMenu] = useState<string>('#ffffff');
    const [colorLanguage, setColorLanguage] = useState<string>('#99dd6e');
    const location = useLocation();

    const { t } = useTranslation();

    const [closeSideMenu, setCloseSideMenu] = useState<boolean>();

    const handleChangeLanguage = (lang: 'ko' | 'en') => {
        if (lang === 'ko') {
            i18n.changeLanguage('ko');
            setSelected(lang);
            gsap.to('.change-lang.ko', { color: colorLanguage, duration: 0.1 });
            gsap.to('.change-lang.en', { color: colorMenu, duration: 0.1 });
            if (location.hash === '#fourthPage') {
                gsap.to('.change-lang.ko', { color: "#663cc5 !important", duration: 0.1 });
                gsap.to('.change-lang.en', { color: "#1b0080 !important ", duration: 0.1 });
            }
        } else {
            i18n.changeLanguage('en');
            setSelected(lang);
            gsap.to('.change-lang.en', { color: colorLanguage, duration: 0.1 });
            gsap.to('.change-lang.ko', { color: colorMenu, duration: 0.1 });
        }
    };

    const handleClickHome = () => {
        setCloseSideMenu(false);
        setColorMenu('#ffffff');
    };

    const clickToWorkPage = () => {
        setCloseSideMenu(false);
        setColorMenu('#222');
    };
    const clickToContactPage = () => {
        setCloseSideMenu(false);
        setColorMenu('#222');
    };
    const clickToTeamPage = () => {
        setCloseSideMenu(false);
        setColorMenu('#ffffff');
    };

    useEffect(() => {
        // handle change color dot navigate
        if (location.hash === '#firstPage') {
            gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            gsap.to('#fp-nav ul li a.active', { backgroundColor: '#1b0080', duration: 0.1, delay: 0.1 });

            // set color button menu
            setColorMenu('#ffffff');
        } else if (location.hash === '#secondPage') {
            gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            gsap.to('#fp-nav ul li a.active', { backgroundColor: '#ccee5d', duration: 0.1, delay: 0.1 });

            // set color button menu
            setColorMenu('#ffffff');
        } else if (location.hash === '#thirdPage') {
            gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            gsap.to('#fp-nav ul li a.active', { backgroundColor: '#ccee5d', duration: 0.1, delay: 0.1 });

            // set color button menu
            setColorMenu('#ffffff');
        } else if (location.hash === '#fourthPage') {
            gsap.to('#fp-nav ul li a', { backgroundColor: '#1b0080', duration: 0.1, delay: 0.1 });
            gsap.to('#fp-nav ul li a.active', { backgroundColor: '#663cc5', duration: 0.1, delay: 0.1 });

            // set color button menu
            setColorMenu('#1b0080');
        } else if (location.hash === '#fifthPage') {
            gsap.to('#fp-nav ul li a', { backgroundColor: '#ffffff', duration: 0.1, delay: 0.1 });
            gsap.to('#fp-nav ul li a.active', { backgroundColor: '#ccee5d', duration: 0.1, delay: 0.1 });

            // set color button menu
            setColorMenu('#ffffff');
        }
        if (location.hash === '#fourthPage') {
            // set color language ko
            setColorLanguage('#663cc5');
        } else if (location.pathname === '/works' || location.pathname === '/contact') {
            // set color language en
            setColorLanguage('#99dd6e');
            setColorMenu('#222');
        } else if (location.pathname === '/teams') {
            setColorMenu('#ffffff');
        } else {
            setColorLanguage('#99dd6e');
        }
    }, [location.hash, location.pathname]);
    useLayoutEffect(() => {
        handleChangeLanguage(selected);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="teams" element={<Team />} />
                <Route path="works" element={<Works />} />
            </Routes>

            <div className="side-menu-container">
                <nav role="navigation">
                    <div id="side-menu-toggle">
                        <input type="checkbox" checked={closeSideMenu} onClick={() => setCloseSideMenu((prev) => !prev)} />
                        <div className="side-menu-container-change-lang-wrapper">
                            <div
                                className={`change-lang ko ${selected === 'ko' ? 'select' : ''}`}
                                onClick={() => handleChangeLanguage('ko')}
                                style={{ color: colorLanguage }}
                            >
                                KR
                            </div>
                            <div
                                className={`change-lang en ${selected === 'en' ? 'select' : ''}`}
                                onClick={() => handleChangeLanguage('en')}
                                style={{ color: colorMenu }}
                            >
                                EN
                            </div>
                        </div>
                        <span style={{ backgroundColor: colorMenu }}></span>
                        <span style={{ backgroundColor: colorMenu }}></span>
                        <span className={`${closeSideMenu ? '' : 'hidden-span'}`} style={{ backgroundColor: colorMenu }}></span>
                        <ul id="menu">
                            <div className="side-menu-container-change-lang-menu">
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'ko' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('ko')}
                                >
                                    KR
                                </div>
                                <div
                                    className={`side-menu-container-change-lang-menu-item ko ${selected === 'en' ? 'select' : ''}`}
                                    onClick={() => handleChangeLanguage('en')}
                                >
                                    EN
                                </div>
                            </div>
                            <NavLink className="list" to="/" onClick={() => handleClickHome()}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink className="list" to="/works" onClick={() => clickToWorkPage()}>
                                <li>Works</li>
                            </NavLink>
                            <NavLink className="list" to="/teams" onClick={() => clickToTeamPage()}>
                                <li>Teams</li>
                            </NavLink>
                            <NavLink className="list" to="/contact" onClick={() => clickToContactPage()}>
                                <li>Contact</li>
                            </NavLink>
                            <div className="info-wrapper">
                                <p id="address">
                                    {t('address')}
                                    <br />
                                    Tel 02. 851. 2662/ Fax 02. 851. 2662
                                </p>
                                <p className="link">
                                    <a
                                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
                                        target="blank"
                                    >
                                        View Map
                                    </a>
                                </p>
                                <br />
                                <p>Work with us.</p>
                                <p className="link">
                                    <a href="mailto:loocreative@playlooc.com" title="">
                                        loocreative@playlooc.com
                                    </a>
                                </p>
                                <br />
                                <p>Recruiting</p>
                                <p className="link">
                                    <a href="mailto:loocreative@playlooc.com" title="">
                                        loocreative@playlooc.com
                                    </a>
                                </p>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideMenu;