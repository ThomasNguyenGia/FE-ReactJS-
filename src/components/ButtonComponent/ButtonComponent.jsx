import React from "react";
import { Button } from "antd";

const ButtonComponent =({size, styleButton, styleTextButton,textButton, ...rests}) =>{
    return(
        <Button 
            size={size}
            style={styleButton} 
            {...rests}
            //icon={<SearchOutlined color={colorButton} style={{color: '#fff'}} />}
        ><span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent