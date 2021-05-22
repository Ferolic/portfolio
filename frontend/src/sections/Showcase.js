import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Button } from 'react-bootstrap';

const ShowcaseContent = styled.div`
  @media ${(props) => props.theme.mediaQueries.medium} {
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    min-height: 60vh;
  }
`;

const ShowcaseTitle = styled.h1`
  font-size: 32px;
  line-height: 46px;
  font-weight: 200;
  margin-top: 24px;
  margin-bottom: 32px;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 48px;
    line-height: 68px;
    max-width: 100%;
  }

  & > span {
    display: inline-block;
    transform: transformY(30px);
    opacity: 0;
    animation: 1s ease 0.2s 1 normal forwards running animateTitle;
  }

  &:nth-child(1) {
    animation-delay: 0s;
  }

  @keyframes animateTitle {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const ShowcaseTitle2 = styled.h2`
  font-size: 20px;
  line-height: 32px;
  margin: 32px 0px;
  color: rgba(0, 0, 0, 0.85);

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 16px;
    line-height: 28px;
    margin: 28px 0px;
  }
`;

const ScrollText = styled.span`
  font-weight: 600;

  &:before {
    content: '';
    -webkit-animation: animateScrollText infinite 8s;
    animation: animateScrollText infinite 8s;
  }

  @keyframes animateScrollText {
    0% {
      content: 'self-taught';
    }
    25% {
      content: 'self-taught';
    }
    30% {
      content: 'passionate';
    }
    60% {
      content: 'passionate';
    }
    85% {
      content: 'committed';
    }
    100% {
      content: 'committed';
    }
  }
`;

const StyledImage = styled.img`
  position: absolute;
  width: 24%;
  top: 10%;
  right: 10%;
  transform: transformY(30px);
  opacity: 0;
  animation: 1s ease 0.7s 1 normal forwards running animateImg;

  @keyframes animateImg {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const Showcase = () => {
  return (
    <div>
      <Container style={{ position: 'relative' }}>
        <Row>
          <Col md={11}>
            <ShowcaseContent className="my-4 py-4">
              <div>
                <ShowcaseTitle>
                  <span>Hi There!</span>
                  <br />
                  <span>
                    I'm , <span> Ferolic </span>
                  </span>
                </ShowcaseTitle>
                <ShowcaseTitle2>
                  {' '}
                  A <ScrollText></ScrollText> full stack developer
                </ShowcaseTitle2>

                <a href="#about">
                  <Button className="btn-md btn-main"> About Me</Button>
                </a>
              </div>
            </ShowcaseContent>
          </Col>
        </Row>
        <StyledImage src="../img/logo_background.png" fluid />
      </Container>
    </div>
  );
};

export default Showcase;
