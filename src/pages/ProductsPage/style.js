import { Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperProduct = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
`
export const WrapperNavbar = styled(Col)`
    background: #fff;
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px;
    margin-top: 20px;
    height: fit-content;
    width: 200px;
`
export const StyledLink = styled(Link)`
    font-size: 20px;
    color: rgb(119, 221, 119);
    text-decoration: none;
    margin-right: 32px;
    &:hover {
        color: green;
    }
`

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px
`
