import React from 'react';
import './style.css'
import HeadNav from '../../sections/head-nav'
// @ts-ignore
import CERTIFICATE_PNG from '../../assets/image/certificate.jpg'
import BottomNav from "../../sections/bottom-nav";

const Certificate = () => {
    return <div className='certificate-container'>
        <HeadNav chooseIndex={2}/>
        <div className='cer-container'>
            <div className='list-box'>
                <div className='certificate-item'>
                    <img className='certificate-img' src={CERTIFICATE_PNG} />
                    <div className='certificate-info'>
                        <div className='certificate-title'>《xxxxxxxx》</div>
                        <div className='certificate-desc'>
                            <div>xxxxx证书是什么什么，具有xxx等级</div>
                            <div>发证机构：xxxxxxxx</div>
                        </div>
                        <div className='certificate-check'>
                            {'前往查看详情>>>'}
                        </div>
                    </div>
                </div>
                <div className='certificate-item'>
                    <img className='certificate-img' src={CERTIFICATE_PNG} />
                    <div className='certificate-info'>
                        <div className='certificate-title'>《xxxxxxxx》</div>
                        <div className='certificate-desc'>
                            <div>xxxxx证书是什么什么，具有xxx等级</div>
                            <div>发证机构：xxxxxxxx</div>
                        </div>
                        <div className='certificate-check'>
                            {'前往查看详情>>>'}
                        </div>
                    </div>
                </div>
                <div className='certificate-item'>
                    <img className='certificate-img' src={CERTIFICATE_PNG} />
                    <div className='certificate-info'>
                        <div className='certificate-title'>《xxxxxxxx》</div>
                        <div className='certificate-desc'>
                            <div>xxxxx证书是什么什么，具有xxx等级</div>
                            <div>发证机构：xxxxxxxx</div>
                        </div>
                        <div className='certificate-check'>
                            {'前往查看详情>>>'}
                        </div>
                    </div>
                </div>
                <div className='certificate-item'>
                    <img className='certificate-img' src={CERTIFICATE_PNG} />
                    <div className='certificate-info'>
                        <div className='certificate-title'>《xxxxxxxx》</div>
                        <div className='certificate-desc'>
                            <div>xxxxx证书是什么什么，具有xxx等级</div>
                            <div>发证机构：xxxxxxxx</div>
                        </div>
                        <div className='certificate-check'>
                            {'前往查看详情>>>'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNav />
    </div>
}

export default Certificate;