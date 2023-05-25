import React from "react";
import './style.css';
import store from '../../store/index'
import { observer } from "mobx-react-lite";

import HeadNav from '../../sections/head-nav'
import VideoBox from '../../sections/video-box'
import CertificateBox from '../../sections/certificate-box'
import ArticleBox from "../../sections/article-box";
import BottomNav from "../../sections/bottom-nav";

const HomePage = () => {



    const handleOnclick = () => {
        console.log('1')
        store.updata('bilibili', store.bilibili + 1)
    }


    return<div style={{minWidth: '1440px'}}>
        <HeadNav />
        <VideoBox />
        <CertificateBox />
        <ArticleBox />
        <BottomNav/>
    </div>
}

export default observer(HomePage)