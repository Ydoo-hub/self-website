import React from "react";
import './style.css'
import { observer } from "mobx-react";

const HeadNav = () => {
    return <div className="nav-container">
        <div className="logo">logo</div>
        <div className="page-title choose">首页</div>
        <div className="page-title">更多证书</div>
        <div className="page-title">所有文章</div>
        <div className="page-title">关于我们</div>
    </div>
}


export default observer(HeadNav);