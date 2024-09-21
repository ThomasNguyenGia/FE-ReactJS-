import React from "react";
import { Heading1, IntroductionContainer, ListItem, Paragraph, StyledLink, UnorderedList, WrapperTypeProduct } from "./style";
import { Link } from 'react-router-dom';

const AboutUsPage =() => {
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
            <IntroductionContainer>
            <Heading1>Chào mừng bạn đến với Green Shop - Nơi Sắc Hoa Tỏa Sáng!</Heading1>
            <Paragraph>
                Green Shop là địa điểm lý tưởng dành cho những ai yêu hoa và muốn mang thiên nhiên vào cuộc sống hàng ngày. Với sứ mệnh làm đẹp không gian sống và mang lại niềm vui từ sắc hoa tươi, chúng tôi tự hào cung cấp những bó hoa tuyệt đẹp và dịch vụ chăm sóc khách hàng tận tâm.
            </Paragraph>
            <Paragraph>
                Tại sao chọn Green Shop?
            </Paragraph>
            <UnorderedList>
                <ListItem>1. Đa dạng các loại hoa: Green Shop mang đến sự phong phú với nhiều loại hoa khác nhau từ hoa tươi hàng ngày, hoa bó, đến các lẵng hoa trang trí đặc biệt cho các dịp lễ, sự kiện và kỷ niệm.</ListItem>
                <ListItem>2. Thiết kế sáng tạo và tinh tế: Các bó hoa tại Green Shop được tạo ra bởi những bàn tay nghệ nhân với sự sáng tạo không ngừng, giúp bạn gửi gắm thông điệp yêu thương một cách tinh tế nhất.</ListItem>
                <ListItem>3. Dịch vụ giao hoa nhanh chóng: Green Shop đảm bảo dịch vụ giao hoa nhanh chóng và đúng hẹn, mang đến sự hài lòng tuyệt đối cho khách hàng, dù bạn ở bất kỳ đâu trong thành phố.</ListItem>
                <ListItem>4. Tư vấn chuyên nghiệp: Đội ngũ nhân viên nhiệt tình và giàu kinh nghiệm luôn sẵn sàng lắng nghe và tư vấn để bạn có thể lựa chọn được những bó hoa phù hợp với nhu cầu và ngân sách.</ListItem>
            </UnorderedList>
            <Paragraph>
                Green Shop tin rằng mỗi bông hoa đều mang một thông điệp riêng, và chúng tôi muốn giúp bạn chia sẻ những thông điệp đó với những người thân yêu. Hãy để chúng tôi đồng hành cùng bạn trong những khoảnh khắc đặc biệt và góp phần làm cho cuộc sống thêm phần tươi đẹp.
            </Paragraph>
            <Paragraph>
                Hãy ghé thăm Green Shop để khám phá thế giới hoa tuyệt vời. Chúng tôi cam kết mang lại sự hài lòng qua từng bó hoa, từng dịch vụ và từng nụ cười.
            </Paragraph>
            <Paragraph>
                Green Shop - Nơi hoa tươi kể chuyện và cảm xúc lan tỏa!
            </Paragraph>
        </IntroductionContainer>
        </>
    );
}

export default AboutUsPage;
