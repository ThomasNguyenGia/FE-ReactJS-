import React from 'react';
import { Col, Row } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { FooterWrapper, FooterLogo, SocialLinks, FooterLinkTitle, FooterQuickLinks, Copyright } from './style';
import { Link } from 'react-router-dom';
import logoGreen from "../../assets/images/logoGreen.png";

const FooterComponent = () => {
    return (
        <FooterWrapper>
            <Row >
                <Col flex="1" style={{ textAlign: 'center' }}>
                    <FooterLogo>
                        <img src={logoGreen} />
                        <p>Hotline: 1900 633 045 - 0865 160 360</p>
                        <p>Email: sales@greenflower.vn</p>
                    </FooterLogo>
                </Col>
                <Col flex="1" style={{ textAlign: 'center' }}>
                    <FooterLinkTitle>Quick Links</FooterLinkTitle>
                    <FooterQuickLinks>
                        <li><Link to="/">Trang Chủ</Link></li>
                        <li><Link to="/about-us">Giới Thiệu</Link></li>
                        <li><Link to="/products">Hoa của chúng tôi</Link></li>
                    </FooterQuickLinks>
                </Col>
                <Col flex="1" style={{ textAlign: 'center' }}>
                    <FooterLinkTitle>Follow Us</FooterLinkTitle>
                    <SocialLinks>
                        <span><a href="#"><FacebookOutlined /></a></span>
                        <span><a href="#"><TwitterOutlined /></a></span>
                        <span><a href="#"><InstagramOutlined /></a></span>
                    </SocialLinks>
                </Col>
            </Row>
        </FooterWrapper>
    );
};

export default FooterComponent;
