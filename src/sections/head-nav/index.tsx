import React from "react";
import './style.css'
import { observer } from "mobx-react";
// @ts-ignore
import LOGO from '../../assets/image/441684982044_.pic.jpg'
// import LOGO from '../../assets/image/461684982492_.pic.jpg'

interface IProps {
    chooseIndex: number
}

const TAB_LIST = ['首页', '更多证书', '所有文章', '关于我们']

const HeadNav = (props: IProps) => {
    const {chooseIndex} = props
    return <div className="nav-container">
        <img className="logo" src={LOGO}/>
        {
            TAB_LIST.map((i, index) => {
                return <div className={`${chooseIndex === index ? 'page-title choose' : 'page-title'}`}>{i}</div>
            })
        }
    </div>
}


export default observer(HeadNav);