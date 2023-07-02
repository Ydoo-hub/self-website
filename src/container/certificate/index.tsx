import React from 'react';
import './style.css'
import HeadNav from '../../sections/head-nav'

import BottomNav from "../../sections/bottom-nav";
import { useNavigate } from "react-router-dom";
import {CERTIFICATE_LIST} from "./contents/index"

const Certificate = () => {
    
    const navigate = useNavigate();

    return <div className='certificate-container'>
        <HeadNav chooseIndex={1}/>
        <div className='cer-container'>
            <div className='list-box'>
                {
                    CERTIFICATE_LIST.map(i => {
                        return <div className='certificate-item'>
                        <img className='certificate-img' src={i.img} />
                        <div className='certificate-info'>
                            <div className='certificate-title'>《{i.title}》</div>
                            <div className='certificate-desc'>
                                {i.contents}                         
                            </div>
                            <div className='certificate-check' onClick={() => navigate(`/detail?key=${i.key}`)}>
                                {'前往查看详情>>>'}
                            </div>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
        <BottomNav />
    </div>
}

export default Certificate;