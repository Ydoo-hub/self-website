import React from 'react';
import './style.css'
import HeadNav from '../../sections/head-nav'
// @ts-ignore
import CERTIFICATE_PNG from '../../assets/image/certificate.jpg'
import BottomNav from "../../sections/bottom-nav";

const About = () => {
    return <div className='about-container'>
        <HeadNav chooseIndex={3}/>
            <div className='about-main'>
                <div className='title'>关于我们</div>
                <div className='content-box'>
                    <div className='left'>
                        {/* <></> */}
                    </div>
                    <div className='right'>
                            
                    </div>
                </div>
                <div className='contact-text'>
                    联系电话（X先生）：188 8888 8888
                </div>

                <div className='tip'>
                    广州办的了教育有限公司
                </div>
            </div>
        <BottomNav isFiexd={true}/>
    </div>
}

export default About;