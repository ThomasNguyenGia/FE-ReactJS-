import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color:rgb(119, 221, 119);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    margin-left: 10px;
    vertical-align: 12px;
`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    while-space: nowrap;
`