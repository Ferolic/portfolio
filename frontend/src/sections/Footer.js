import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const SocialIconsWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SocialIcon = styled.a`
  & > i {
    display: inline-block;
    padding: 0.7rem 0.8rem;
    font-size: 1.6rem;
    color: #555;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
  }

  & > i:hover {
    color: #127eb1;
  }
`;

const FooterImgWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const FooterImg = styled.img`
  width: 18%;
  margin-bottom: 0 auto;
  display: inline-block;
  text-align: center;
`;

const CopyRight = styled.p`
  font-size: 0.575rem;
  line-height: 0.66125rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <>
      <Container className="pb-4 mb-2">
        <div>
          <SocialIconsWrapper>
            <SocialIcon
              href="https://www.instagram.com/ashwin_ferolic/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon
              href="https://github.com/ashwin_ferolic"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/ashwinferolic"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </SocialIcon>
          </SocialIconsWrapper>
          <div>
            <FooterImgWrapper>
              <FooterImg src="icon.png" />
              <CopyRight> copyright &copy; 2021,ferolic </CopyRight>
            </FooterImgWrapper>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
