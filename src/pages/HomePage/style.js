import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Link } from 'react-router-dom';

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px
`
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: rgb(0, 100, 0);
        span{
            color: #fff;
        }
    }
        width:100%;
        text-align: center;
`
export const WrapperProduct = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
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