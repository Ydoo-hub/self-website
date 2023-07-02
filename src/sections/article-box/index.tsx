import React from "react";
import './style.css'
// @ts-ignore
import PIC_7 from '../../assets/image/pic7.jpg'
// @ts-ignore
// import PIC_8 from '../../assets/image/pic8.jpg'
// @ts-ignore
// import PIC_9 from '../../assets/image/pic9.jpg'
// @ts-ignore
import PIC_10 from '../../assets/image/pic10.jpg'
import { useNavigate } from "react-router-dom";

const CertificateBox = () => {
    const navigate = useNavigate();
    return <div className="article-box">
        <div className="title" style={{color: "black"}}>
            文章
            <div className="line"></div>
        </div>
        <div className="container" style={{marginTop: 30}}>
            <div className="first-type img-box-child" style={{borderRadius: '30px 0 0 0'}} onClick={() => {
            navigate(`/detail?key=artxinli`)
        }}>
                <img src={PIC_7} width='100%' height='100%'/>
            </div>
            <div className="second-type text-box-main" style={{borderRadius: '0 30px 0 0'}}>

                <div className="text-box-child">近日在北京召开的“健康中国论坛2023”中提到五点：第一，进一步加强心理健康服务的供给。因为仍然有很多人感到获取服务是不便利的。第二，加强对心理健康服务的规范。第三，要加强对中西部的心理健康资源支持。第四......</div>
                <div className="concat-me-tip" onClick={() => {
                    window.open('https://tb.53kf.com/code/client/1c8a6d5642a7ed7c1fe44234ad8cbc2b7/1')
                }}>{`立即联系我们>>>`}</div>
            </div>
            <div className="second-type text-box-main" style={{borderRadius: '0 0 0 30px'}} >
                <div className="text-box-child">近年来，国内外对于中医康复学越来越重视，在篮球体育直播上可以看到，不是每个国家篮球队员身上都有代表信仰的纹身，但是全部都有着一个个红色的的拔罐印记。中医穴位研究团队屡次登上国际著名科学杂志《nature》，因此......</div>
                <div className="concat-me-tip" onClick={() => {
                    window.open('https://tb.53kf.com/code/client/1c8a6d5642a7ed7c1fe44234ad8cbc2b7/1')
                }}>{`立即联系我们>>>`}</div>
            </div>
            <div className="first-type img-box-child" style={{borderRadius: '0 0 30px 0'}} onClick={() => {
                    navigate(`/detail?key=artkangfu`)
            }}>
                <img src={PIC_10} width='100%' height='100%'/>
                {/* <div className="img-box-child-overlay">
                    <p>要显示的文本</p>
                </div> */}
            </div>
        </div>
    </div>
}

export default CertificateBox;