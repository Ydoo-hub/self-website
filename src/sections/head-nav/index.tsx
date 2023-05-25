import React from "react";
import './style.css'
import { observer } from "mobx-react";
// @ts-ignore
import LOGO from '../../assets/image/441684982044_.pic.jpg'
// import LOGO from '../../assets/image/461684982492_.pic.jpg'

const HeadNav = () => {
    return <div className="nav-container">
        <img className="logo" src={LOGO}/>
        <div className="page-title choose">首页</div>
        <div className="page-title">更多证书</div>
        <div className="page-title">所有文章</div>
        <div className="page-title">关于我们</div>
    </div>
}


export default observer(HeadNav);