import styled from "styled-components";

// Wrapper cho footer
export const FooterWrapper = styled.footer`
    padding-top: 40px;
    padding-bottom: 30px;
    background-color: rgb(119, 221, 119);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// Logo trong footer
export const FooterLogo = styled.div`
    text-align: center;
    img {
        width: 50%;
        margin-bottom: 1rem;
    }
    
    p {
        color: var(--text-color);
        font-size: 1.4rem; /* Tăng kích thước chữ */
    }
`;

// Tiêu đề liên kết trong footer
export const FooterLinkTitle = styled.h3`
    color: var(--heading-color);
    margin-bottom: 1rem;
    font-size: 1.7rem; /* Tăng kích thước chữ */
    text-align: center; /* Căn giữa chữ */
`;

// Các liên kết nhanh trong footer
export const FooterQuickLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
        margin-bottom: 0.5rem;
        
        a {
            text-decoration: none;
            color: var(--text-color);
            font-size: 1.4rem; /* Tăng kích thước chữ */
            
            &:hover {
                color: var(--heading-color);
            }
        }
    }
`;

// Liên kết mạng xã hội
export const SocialLinks = styled.div`
    display: flex;
    justify-content: center; /* Căn giữa các biểu tượng */
    gap: 20px; /* Khoảng cách giữa các biểu tượng */
    
    li {
        a {
            text-decoration: none;
            color: var(--heading-color);
            font-size: 2.5rem; /* Tăng kích thước biểu tượng */
            
            &:hover {
                color: var(--text-color);
            }
        }
    }
`;

// Copyright thông tin trong footer
export const Copyright = styled.div`
    color: var(--text-color);
    font-size: 1.4rem; /* Tăng kích thước chữ */
    margin-top: 20px;
    text-align: center;
`;
