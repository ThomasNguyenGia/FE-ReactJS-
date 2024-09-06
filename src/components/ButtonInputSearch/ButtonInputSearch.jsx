import React from "react";
import { Button } from "antd";   
import {SearchOutlined} from '@ant-design/icons';
import { fakeBaseQuery } from "@reduxjs/toolkit/query";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
    const { 
        size, placeholder, textButton, 
        bordered, backgroundColorInput = '#fff', 
        backgroundColorButton= 'rgb(0, 100, 0)',
        colorButton = '#fff'} = props
    return(
        <div style={{display: 'flex'}}>
            <InputComponent
                size={size} 
                placeholder={placeholder} 
                bordered ={bordered} 
                style={{backgroundColor: backgroundColorInput}}
            />
            <ButtonComponent 
                size={size}
                styleButton={{background: backgroundColorButton, border: !bordered && 'none'}} 
                icon={<SearchOutlined color={colorButton} style={{color: '#fff'}} />}  
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            />
        </div>
    )
}
export default ButtonInputSearch