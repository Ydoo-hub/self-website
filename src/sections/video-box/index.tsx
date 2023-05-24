import React, { useState, useEffect } from "react";
import './style.css'

// @ts-ignore
import VIDEO_URL from '../../assets/video/103_1684941334.mp4'

const VideoBox = () => {
    const [videoWidth, setVideoWidth] = useState(0);
    const [videoHeight, setVideoHeight] = useState(0);

    const resizeUpdate = (e: any) => {
        // 通过事件对象获取浏览器窗口的高度
        const w = e.target.innerWidth;
        const h = e.target.innerHeight;

        console.log(w)
        // setVideoHeight((9 / 16 * w) > h ? h : (9 / 16 * w));
        setVideoHeight((9 / 16 * w))
        setVideoWidth(w);
    };

    useEffect(() => {
        // 页面刚加载完成后获取浏览器窗口的大小
        const w = window.innerWidth;
        const h = window.innerHeight;
        // setVideoHeight((9 / 16 * w) > h ? h : (9 / 16 * w));
        setVideoHeight((9 / 16 * w))

        setVideoWidth(w);
        // 页面变化时获取浏览器窗口的大小 
        window.addEventListener('resize', resizeUpdate);

        return () => {
            // 组件销毁时移除监听事件
            window.removeEventListener('resize', resizeUpdate);
        }
    }, []);
    

    return <div className="video-container">
        {/* <video width="320" height="240" src='https://assets.icoderoad.com/course/video-background/video.mp4'/> */}
        <div className="text-box">
            <div className="letf-text">
                <div className="font-size-60">  考证就找</div>
                <div>「 办的了 」</div>

            </div>
            <div className="right-text">
                <div>· 湿答答那是你的离开那</div>
                <div>· 湿答答那是你的离开那</div>
                <div>· 湿答答那是你的离开那</div>
                <div>· 湿答答那是你的离开那</div>
                <div>· 湿答答那是你的离开那</div>
            </div>
        </div>
        
        <div className="video-mask"></div>
        <video width={videoWidth} height={videoHeight} src={VIDEO_URL} autoPlay muted loop controls/>
    </div>
}


export default VideoBox