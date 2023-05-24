import React from "react";
import './style.css';
import store from '../../store/index'
import { observer } from "mobx-react-lite";

const HomePage = () => {

    const handleOnclick = () => {
        console.log('1')
        store.updata('bilibili', store.bilibili + 1)
    }
    return<div onClick={handleOnclick}>{store.bilibili}</div>
}

export default observer(HomePage)