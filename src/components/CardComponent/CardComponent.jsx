import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import {StarFilled} from '@ant-design/icons'
import logo from '../../assets/images/logo.png'

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{width:'20px', height:'200px'}}
      style={{width: 200}}
      bodyStyle={{padding: '10px'}}
      cover={<img alt="example" src="https://8384f55340.vws.vegacdn.vn/image/cache/catalog/products/Autumn_2024/mau-tinh-yeu.jpg.webp" />}
    >
        <img src={logo} 
        style={{width: '64px',
          height: '14px',
          position: 'absolute',
          top: -1,
          left: -1,
          borderTopLeftRadius: '3px'
        }}
        />
      <StyleNameProduct>Hoa Hồng</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: '4px'}}>
            <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)'}}/>
        </span>
        <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{marginRight: '8px'}}>990.000Đ</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
