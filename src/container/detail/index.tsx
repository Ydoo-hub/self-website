import React from 'react';
import './style.css'
import HeadNav from '../../sections/head-nav'
import BottomNav from "../../sections/bottom-nav";
// @ts-ignore
import CERTIFICATE_PNG from '../../assets/image/certificate.jpg'

const Detail = () => {
    return <div className='detail-container'>
        <HeadNav chooseIndex={1}/>
        <div className='de-container'>
            <div className='detail-box'>
                <div className='title'>
                    文章标题
                </div>
                <div className='time-box'>
                    <div>2023-6-6</div>
                    <div>123 人查看</div>
                </div>
                <div className='detail'>
                     第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容第一段内容
                </div>
                <img src={CERTIFICATE_PNG} className='detail-img'/>
                <div className='detail'>
                      第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容第二段内容
                </div>
                <img src={CERTIFICATE_PNG} className='detail-img'/>
                <div className='detail'>
                      第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容第三段内容
                </div>
            </div>
        </div>
        <BottomNav isFiexd={false}/>
    </div>
}

export default Detail;