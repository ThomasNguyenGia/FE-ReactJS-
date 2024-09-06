import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";
import { Checkbox,Rate  } from 'antd';

const NavBarComponent =() => {
    const onChange = () =>{}
    const renderContent = (type, options) => {
        switch(type){
            case 'text':
                return options.map((options) =>{
                    return (
                        <WrapperTextValue>{options}</WrapperTextValue>
                    )
                })
                case'checkbox':
                return(
                <Checkbox.Group style={{ width: '100%', display:'flex', flexDirection: 'column', gap:'12px' }} onChange={onChange}>
                    {options.map((option) =>{
                        return(
                            <Checkbox style={{marginLeft: 0}} value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
                )
                case'star':
                return options.map((option) =>{
                    console.log('check', option)
                    return(
                        <div style={{display: 'flex', gap:'4px' }}>
                        <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                        <span>{`từ ${option} sao`}</span>
                        </div>
                    )
                })
                case'price':
                return options.map((option) =>{
                   return(
                    <WrapperTextPrice>{option}</WrapperTextPrice>
                   )
                })
            default:
                return{}
        }
    }
    return(
        <div>
            <WrapperLableText>LỌC HOA</WrapperLableText>
            <WrapperContent style={{marginBottom: '10px'}}>
                {renderContent('text', ['Hoa Sinh Nhật', 'Hoa Kỉ Niệm', 'Hoa Khai Trương'])}
            </WrapperContent>
            <WrapperContent style={{marginBottom: '10px'}}>
            {renderContent('checkbox', [
                    {value: 'a', label: 'Hoa Sinh Nhật'},
                    {value: 'b', label: 'Hoa Kỉ Niệm'},
                    {value: 'c', label: 'Hoa Khai Trương'}
                ])}
            </WrapperContent>
            <WrapperContent>
            {renderContent('star', [3,4,5])}
            </WrapperContent>
            {/* <WrapperContent>
            {renderContent('price', ['duoi 40', 'tren 50'])}
            </WrapperContent> */}
        </div>
    )
}

export default NavBarComponent