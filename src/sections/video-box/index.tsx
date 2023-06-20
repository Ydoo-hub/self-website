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
                <div className="font-size-60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;考证就找</div>
                <div style={{color: '#D5575f'}}>「 <span style={{color: '#fff', fontWeight: 800}}>办得了</span> 」</div>

            </div>
            <div className="right-text">
                <div><span style={{color: '#fff'}}>•</span> <span style={{color: '#D5575f'}}>心理咨询师</span></div>
                <div><span style={{color: '#D5575f'}}>•</span> 中医康复理疗师</div>
                <div><span style={{color: '#fff'}}>•</span> <span style={{color: '#D5575f'}}>中医预防保健调理技术</span></div>
                <div><span style={{color: '#D5575f'}}>•</span> 慢病管理与服务技能提升</div>
            </div>
        </div>
        
        <div className="video-mask"></div>
        <video className="video-box" height={videoHeight} src={VIDEO_URL} autoPlay muted loop/>
    </div>
}


export default VideoBox