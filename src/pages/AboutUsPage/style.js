import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IntroductionContainer = styled.div`
    max-width: 80%;
    margin: 40px auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Heading1 = styled.h1`
    color: #2c3e50;
    font-size: 3.5em;  /* Tăng kích thước tiêu đề */
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
`;

export const Paragraph = styled.p`
    color: #34495e;
    font-size: 1.5em;  /* Tăng kích thước đoạn văn */
    line-height: 1.8;
    margin: 20px 0;
    text-align: justify;
`;

export const UnorderedList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
`;

export const ListItem = styled.li`
    margin: 10px 0;
    font-size: 1.4em;  /* Tăng kích thước các mục trong danh sách */
    color: #2c3e50;
    position: relative;
    padding-left: 20px;

    &:before {
        content: "•";
        color: #27ae60;
        font-weight: bold;
        font-size: 1.7em;  /* Tăng kích thước biểu tượng */
        position: absolute;
        left: 0;
        top: -2px;
    }
`;
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