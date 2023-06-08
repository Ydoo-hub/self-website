import React from 'react';
import './style.css'
import HeadNav from '../../sections/head-nav'
// @ts-ignore
import CERTIFICATE_PNG from '../../assets/image/certificate.jpg'
// @ts-ignore
import EYE_PNG from '../../assets/image/eye.png'
import BottomNav from "../../sections/bottom-nav";
import { useNavigate } from "react-router-dom";

const Article = () => {
    const navigate = useNavigate();



    return <div className='article-container'>
        <HeadNav chooseIndex={2}/>
        <div className='cer-container'>
            <div className='list-box'>
                <div className='article-item'>
                    <img className='article-img' src={CERTIFICATE_PNG} />
                    <div className='article-info'>
                        <div className='article-title'>《文章名称文章名称》</div>
                        <div className='article-desc'>
                            <div>文章简介文章简介文章简介文章简介文章简介文章简介</div>
                        </div>
                        <div className='article-content'>
                            <div>文章内容文章内容文章内容文章内容容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
                        </div>
                        <div className='article-tip'>
                            <div className='article-view'><img className='view-icon' src={EYE_PNG}/> 233 浏览</div>
                            <div className='article-check' onClick={() => navigate('/detail')}>{'前往查看详情>>>'}</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='article-img' src={CERTIFICATE_PNG} />
                    <div className='article-info'>
                        <div className='article-title'>《文章名称文章名称》</div>
                        <div className='article-desc'>
                            <div>文章简介文章简介文章简介文章简介文章简介文章简介</div>
                        </div>
                        <div className='article-content'>
                            <div>文章内容文章内容文章内容文章内容容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
                        </div>
                        <div className='article-tip'>
                            <div className='article-view'><img className='view-icon' src={EYE_PNG}/> 233 浏览</div>
                            <div className='article-check'>{'前往查看详情>>>'}</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='article-img' src={CERTIFICATE_PNG} />
                    <div className='article-info'>
                        <div className='article-title'>《文章名称文章名称》</div>
                        <div className='article-desc'>
                            <div>文章简介文章简介文章简介文章简介文章简介文章简介</div>
                        </div>
                        <div className='article-content'>
                            <div>文章内容文章内容文章内容文章内容容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
                        </div>
                        <div className='article-tip'>
                            <div className='article-view'><img className='view-icon' src={EYE_PNG}/> 233 浏览</div>
                            <div className='article-check'>{'前往查看详情>>>'}</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='article-img' src={CERTIFICATE_PNG} />
                    <div className='article-info'>
                        <div className='article-title'>《文章名称文章名称》</div>
                        <div className='article-desc'>
                            <div>文章简介文章简介文章简介文章简介文章简介文章简介</div>
                        </div>
                        <div className='article-content'>
                            <div>文章内容文章内容文章内容文章内容容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
                        </div>
                        <div className='article-tip'>
                            <div className='article-view'><img className='view-icon' src={EYE_PNG}/> 233 浏览</div>
                            <div className='article-check'>{'前往查看详情>>>'}</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='article-img' src={CERTIFICATE_PNG} />
                    <div className='article-info'>
                        <div className='article-title'>《文章名称文章名称》</div>
                        <div className='article-desc'>
                            <div>文章简介文章简介文章简介文章简介文章简介文章简介</div>
                        </div>
                        <div className='article-content'>
                            <div>文章内容文章内容文章内容文章内容容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
                        </div>
                        <div className='article-tip'>
                            <div className='article-view'><img className='view-icon' src={EYE_PNG}/> 233 浏览</div>
                            <div className='article-check'>{'前往查看详情>>>'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNav />
    </div>
}

export default Article;