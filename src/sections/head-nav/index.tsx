import React, { useState } from "react";
import './style.css'
import { observer } from "mobx-react";
// @ts-ignore
import LOGO from '../../assets/image/441684982044_.pic.jpg'
// @ts-ignore
import PHONE from '../../assets/image/phone.png'


import Toast from '../Toast';
import { useNavigate } from "react-router-dom";
interface IProps {
    chooseIndex: number
}

const TAB_LIST = ['首页', '更多证书', '所有文章', '关于我们']
const TAB_ROUTER_LIST = ['/', '/certificate', '/article', '/about']

// const TAB_LIST = ['首页', '关于我们']
// const TAB_ROUTER_LIST = ['/', '/certificate', '/article', '/about']


const HeadNav = (props: IProps) => {
    const {chooseIndex} = props
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('敬请期待')

    const choosePage = (idx: number) => {

        if (idx === 2) {

            const currMessage = '更多文章真正快马加鞭赶来，敬请期待...'
            setMessage(currMessage)
            setShow(true)
            return;
        }
        navigate(TAB_ROUTER_LIST[idx], {replace: true})
    }

    const handleClose = () => {
        setShow(false)
    }
    return <div style={{display: "flex", width: '100vw', height: '80px'}}>
        <div className="nav-container-self">
            <div style={{display: 'flex'}}>
                <img className="logo" src={LOGO}/>
                {
                    TAB_LIST.map((i, index) => {
                        return <div onClick={() => choosePage(index)} className={`${chooseIndex === index ? 'page-title choose' : 'page-title'}`} style={{color: chooseIndex !== 0 ? 'black' : '#fff', cursor: 'pointer'}}>{i}</div>
                    })
                }
            </div>

            <div style={{display: 'flex', position: 'absolute', right: 0}}>
                <div style={{margin: '30px 10px 0px 0px'}}>
                    <img src={PHONE} width='32px' height='32px'/>
                </div>
                <span style={{color: '#D5575f', fontSize: 24, lineHeight: '36px', marginTop: '30px', marginRight: '60px'}}>153 2340 5004</span>
            </div>
        </div>
        
        { show && <Toast message={message} duration={2000} onClose={handleClose}/>}
    </div>
}


export default observer(HeadNav);