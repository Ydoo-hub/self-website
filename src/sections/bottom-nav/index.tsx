import React from "react";
import './style.css'

interface IProps {
    isFiexd?: boolean
} 

const BottomNav = (props: IProps) => {
    const {isFiexd = false} = props
    return <div className="botton-nav" style={{position: isFiexd ? "fixed" : "static"}}>
        <div className="text">@2023 广州办的了xxx服务</div>
    </div>
}

export default BottomNav