import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/logo_login.png"
import {Image } from "antd";
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'
import { Link } from "react-router-dom";

const SignInPage =() => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return(
       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background:'rgba(233,228,228,1)', height: '100vh'}}>
         <div style={{width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
            <WrapperContainerLeft>
                <h1><Link to="/">Green</Link>, xin chào</h1>
                <p>Đăng nhập hoặc Tạo tài khoản</p>
                <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com" />
                <div style={{position: 'relative'}}>
                    <span
                     style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: '4px',
                        right: '8px'
                     }}
                     >{
                        isShowPassword ? (
                            <EyeFilled />
                        ) : (
                            <EyeInvisibleFilled />
                        )
                     }
                    </span>
                    <InputForm placeholder="Mật khẩu" type={isShowPassword ? "text": "password"} />
                </div>
                <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}  
                        textButton={'Đăng nhập'}
                        styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
                    ></ButtonComponent>
                    <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight><Link to ="/sign-up">Tạo tài khoản</Link></WrapperTextLight></p>
            </WrapperContainerLeft>
            <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px"/>
                    <h4>Mua sắm tại Green</h4>
                    <span>Siêu ưu đãi mỗi ngày</span>
            </WrapperContainerRight>
        </div>
       </div>
    )
}

export default SignInPage