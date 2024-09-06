import React from 'react'
import Search from 'antd/es/transfer/search';
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style';
import{UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { Link } from 'react-router-dom';
import logoGreen from "../../assets/images/logoGreen.png";

const HeaderComponent = () => {
    return (
        <div style={{width: '100%', background: 'rgb(119, 221, 119)', display: 'flex', justifyContent: 'center'}}>
            <WrapperHeader>
                <Col span={5}>
                <Link to="/">
                <img src={logoGreen} style={{width: '20%'}} />
                <WrapperTextHeader style={{paddingTop: '10px'}}>GREEN</WrapperTextHeader>
                </Link>
                
                </Col>
                <Col span={13}>
                <ButtonInputSearch
                    size= "large"
                    bordered={false}
                    textButton="Tìm kiếm"
                    placeholder="Nhập hoa bạn muốn tìm"
                    //allowClear
                    //enterButton="Search"
                    //size="large"
                    //onSearch={onSearch}
                />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style ={{fontSize: '30px'}} />
                        <div>
                            <WrapperTextHeaderSmall><Link to="/sign-in">Đăng nhập</Link>/<Link to="/sign-up">Đăng ký</Link></WrapperTextHeaderSmall>
                            <div>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>    
                        <Badge count={4} size='small'>
                        <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}
export default HeaderComponent