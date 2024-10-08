import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct, StyledLink } from './style'; // Import StyledLink
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider_1 from '../../assets/images/slider_1.png';
import slider_2 from '../../assets/images/slider_2.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const arr = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Hoa', path: '/products' },
        { name: 'Giới thiệu', path: '/about-us' }
    ];

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
            <div className='body' style={{ width: '100%', backgroundColor: '#efefef' }}>
                <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[slider_1, slider_2]} />
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
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore
                            textButton="Xem thêm"
                            type="outline"
                            styleButton={{
                                border: '1px solid rgb(0, 100, 0)',
                                color: 'rgb(0, 100, 0)',
                                width: '240px',
                                height: '38px',
                                borderRadius: '4px'
                            }}
                            styleTextButton={{ fontWeight: 500 }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
