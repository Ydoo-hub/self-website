import React from "react";
import './style.css'
// @ts-ignore
import PIC_1 from '../../assets/image/pic1.png'
// @ts-ignore
import PIC_2 from '../../assets/image/pic2.png'
// @ts-ignore
import PIC_3 from '../../assets/image/pic3.png'
// @ts-ignore
import PIC_4 from '../../assets/image/pic4.png'
// @ts-ignore
import PIC_5 from '../../assets/image/pic5.png'
// @ts-ignore
import PIC_6 from '../../assets/image/pic6.png'


const CertificateBox = () => {
    return <div className="certificate-box">
        <div className="title" style={{color: "black"}}>
            证书
            <div className="line"></div>
        </div>
        <div className="container" style={{marginTop: 30}} onClick={() => {
            window.open('https://tb.53kf.com/code/client/1c8a6d5642a7ed7c1fe44234ad8cbc2b7/1')
        }}>
            <div className="first-type img-box-child" style={{borderRadius: '30px 0 0 0', overflow: "hidden"}}>
                <img src={PIC_1} width='100%' height='100%'/>
                <div className="img-box-child-overlay">
                    <p style={{fontSize: 24, color: '#D5575f'}}>心理咨询师</p>
                    <p>立即联系我们</p>
                </div>
            </div>
            <div className="second-type img-box-child" style={{borderRadius: '0 30px 0 0', overflow: "hidden"}}>
                <img src={PIC_2} width='100%' height='100%'/>
                <div className="img-box-child-overlay">
                    <p style={{fontSize: 24, color: '#D5575f'}}>中医康复理疗</p>
                    <p>立即联系我们</p>
                </div>
            </div>
            <div className="third-type img-box-child">
                <img src={PIC_3} width='100%' height='100%'/>
                <div className="img-box-child-overlay">
                    <p style={{fontSize: 24, color: '#D5575f'}}>碳排放管理师</p>
                    <p>立即联系我们</p>
                </div>
            </div>
            <div className="third-type img-box-child">
                <img src={PIC_4} width='100%' height='100%'/>
                <div className="img-box-child-overlay">
                    <p style={{fontSize: 24, color: '#D5575f'}}>护工</p>
                    <p>立即联系我们</p>
                </div>
            </div>
            <div className="second-type img-box-child" style={{borderRadius: '0 0 0 30px', overflow: "hidden"}}>
                <img src={PIC_6} width='100%' height='100%' />
                <div className="img-box-child-overlay">
                    <p style={{fontSize: 24, color: '#D5575f'}}>中医康复理疗</p>
                    <p>立即联系我们</p>
                </div>
            </div>
            <div className="first-type img-box-child" style={{borderRadius: '0 0 30px 0', overflow: "hidden"}}>
                <img src={PIC_5} width='100%' height='100%' />
                <div className="img-box-child-overlay">
                    <p style={{fontSize: 24, color: '#D5575f'}}>中医预防保健</p>
                    <p>立即联系我们</p>
                </div>
            </div>
        </div>
    </div>
}

export default CertificateBox;