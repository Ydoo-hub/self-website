import React from "react";
import './style.css';
import store from '../../store/index'
import { observer } from "mobx-react-lite";

import HeadNav from '../../sections/head-nav'
import VideoBox from '../../sections/video-box'

const HomePage = () => {



    const handleOnclick = () => {
        console.log('1')
        store.updata('bilibili', store.bilibili + 1)
    }


    return<>
        <HeadNav />
        <VideoBox />
    </>
}

export default observer(HomePage)