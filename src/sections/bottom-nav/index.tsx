import React from "react";
import './style.css'

interface IProps {
    isFiexd?: boolean
} 

const BottomNav = (props: IProps) => {
    const {isFiexd = false} = props
    return <div className="botton-nav" style={{position: isFiexd ? "fixed" : "static"}}>
        <div className="text">@2023 办得了教育科技（佛山）有限公司</div>
    </div>
}

export default BottomNav