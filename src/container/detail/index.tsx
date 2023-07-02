import React, { useEffect } from 'react';
import './style.css'
import HeadNav from '../../sections/head-nav'
import BottomNav from "../../sections/bottom-nav";
import Manbing from './sections/cer/manbing';
import Xinli from './sections/cer/xinli';
import Kangfu from './sections/cer/kangfu';
import Yufang from './sections/cer/yufang';
import ArtXinli from './sections/art/xinli'
import ArtKangfu from './sections/art/kangfu';

const Detail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const getQueryByName = (key: string) => {
        var result: any = {} // 定义一个全局的对象
        var str = window.location.search;
        if(str.startsWith('?')) { // 判断str以？开头的
            var strParams  = str.split('?')[1];
            var arrParams = strParams.split('&');
            //然后进行for循环，这里直接用了forEach
            arrParams.forEach((item) => {
                var temKey = item.split('=')[0];
                var temVal = item.split('=')[1];
                result[temKey] = temVal
            })
        }
        return result[key]
    }

    const renderContent = () => {
        switch(getQueryByName('key')) {
            case 'cerxinli':
                return <Xinli />
            case 'cermanbing':
                return <Manbing />
            case 'cerkangfu':
                return <Kangfu />
            case 'ceryufang':
                return <Yufang />
            case 'artxinli':
                return <ArtXinli />
            case 'artkangfu':
                return <ArtKangfu />
        }
    }


    return <div className='detail-container'>
        <HeadNav chooseIndex={-1}/>
        <div className='de-container'>
            <div className='detail-box'>
                {renderContent()}
            </div>
        </div>
        <BottomNav isFiexd={false}/>
    </div>
}

export default Detail;