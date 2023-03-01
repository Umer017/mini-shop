import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  margin-top:20px;
`;

const FooterText = styled.p`
  color: #444;
  font-size: 14px;
  text-align: center;

  & a {
    color: #444;
    text-decoration: none;
    font-weight: bold;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 My E-Commerce Site. All Rights Reserved.{' '}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
