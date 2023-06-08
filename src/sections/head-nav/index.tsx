import React from "react";
import './style.css'
import { observer } from "mobx-react";
// @ts-ignore
import LOGO from '../../assets/image/441684982044_.pic.jpg'

import { useNavigate } from "react-router-dom";

interface IProps {
    chooseIndex: number
}

const TAB_LIST = ['首页', '更多证书', '所有文章', '关于我们']
const TAB_ROUTER_LIST = ['/', '/certificate', '/article', '/about']


const HeadNav = (props: IProps) => {
    const {chooseIndex} = props
    const navigate = useNavigate();

    const choosePage = (idx: number) => {
        navigate(TAB_ROUTER_LIST[idx], {replace: true})
    }
    return <div className="nav-container">
        <img className="logo" src={LOGO}/>
        {
            TAB_LIST.map((i, index) => {
                return <div onClick={() => choosePage(index)} className={`${chooseIndex === index ? 'page-title choose' : 'page-title'}`}>{i}</div>
            })
        }
    </div>
}


export default observer(HeadNav);