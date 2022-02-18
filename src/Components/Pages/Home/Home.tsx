import React from 'react'
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import onLeave from '../../Animation/onLeave';
import afterLoad from '../../Animation/AfterLoad';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import FourthPage from './FourthPage/FourthPage';
import FifthPage from './FifthPage/FifthPage';


const fullpageOptions = {
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
};

function Home() {

    return (
        <ReactFullpage
            licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
            {...fullpageOptions}
            navigation={true}
            navigationPosition={'right'}
            scrollingSpeed={700}
            onLeave={onLeave}
            afterLoad={afterLoad}
            // normalScrollElements={'.item-story'}
            render={() => {
                return (
                    <>
                        <div className="section">
                            <FirstPage></FirstPage>
                        </div>
                        <div className="section">
                            <SecondPage></SecondPage>
                        </div>
                        <div className="section">
                            <ThirdPage></ThirdPage>
                        </div>
                        <div className="section">
                            <FourthPage></FourthPage>
                        </div>
                        <div className="section">
                            <FifthPage></FifthPage>
                        </div>
                    </>
                );
            }}
        />
    )
}

export default Home