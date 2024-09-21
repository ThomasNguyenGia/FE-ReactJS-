import React, { Fragment } from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row} from "antd";
import { StyledLink, WrapperNavbar, WrapperProduct } from "./style";
import { Link } from "react-router-dom";
import { WrapperTypeProduct } from "../HomePage/style";

const ProductsPage = () => {
    const arr = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Hoa', path: '/products' },
        { name: 'Giới thiệu', path: '/about-us' }
    ];

    const onChange =() =>{}
    return (
        <>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => (
                        <StyledLink to={item.path} key={item.name}>
                            {item.name}
                        </StyledLink>
                    ))}
                </WrapperTypeProduct>
        </div>
        <div style={{width: '100%', background: '#efefef'}}>
            <div style={{ width: '1270px', margin: '0 auto'}}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px'}}>
            <WrapperNavbar span={4}>
                <NavBarComponent/>
            </WrapperNavbar>
            <Col span={20}>
                <WrapperProduct>
                <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                        <Link to="/product-details">
                            <CardComponent />
                        </Link>
                </WrapperProduct>
                <Pagination  showQuickJumper defaultCurrent={1} total={100} onChange={onChange} style={{marginBottom:'10px' ,justifyContent: 'center', marginTop: '10px'}} />
            </Col>
            </Row>
            </div>
        </div>
        </>
    )
}
export default ProductsPage