import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media ${(props) => props.theme.mediaQueries.large} {
    margin: 6rem 0;
  }
`;

const ArWrapper = styled.div`
  margin-top: 20px;

  @media ${(props) => props.theme.mediaQueries.large} {
    margin-top: 100px;
  }
`;

const StyledImgWrapper = styled.div`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  width: 100%;
  border-radius: 4px;
  height: 300px;
  background-size: cover;
  background-image: url('../img/ar1.jpg');
  background-color: rgb(245, 245, 245);
  background-position: top right !important;
  transform: translateY(-30px);
  opacity: 0;
  animation: 1s ease 0.6s 1 normal forwards running animateImg;
  background-repeat: no-repeat;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 100%;
    height: 400px;
    background-position: 100% 50%;
  }

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

const SkillsWrapper = styled.div`
  margin: 100px 0 200px;
  width: 100%;
  height: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const Section = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const CoffeeImg = styled.img`
  margin: 50px 0 20px;
  width: 105%;
  transform: translateX(-2.5%);
  height: auto;
  border-radius: 4px;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: auto;
    margin: 50px 0;
  }
`;

const About = () => {
  return (
    <>
      <Container id="about">
        <Wrapper>
          <ArWrapper>
            <StyledImgWrapper></StyledImgWrapper>
          </ArWrapper>
          <div>
            <Row>
              <Col md={6}>
                <p className="desc">
                  I’m Ferolic , a 24 years old self-taught Web developer , from
                  Tiruchirapalli.
                  <br />
                  <br />
                  Technology has always been at the very core of my interests.I
                  love to to build something new that people around the world
                  can experience and interact with.
                </p>
              </Col>

              <Col md={6}>
                <p className="desc p-right">
                  After my college degree in Computer Science and Engineering
                  I’ve been learning Web development full time ever since. Apart
                  from coding, I love to watch movies and i'm a big fan of
                  <strong> Ar Rahman </strong> and
                  <strong> Mani Ratnam </strong>.
                  <br />
                  <br />I always want to learn more,do more, and be more. I’m
                  also a firm believer that we should never settle.
                </p>
              </Col>
            </Row>
          </div>

          <SkillsWrapper>
            <Section>
              <div className="w-100">
                <div className="max-w-700">
                  <h1 className="title"> My Skills </h1>
                  <p className="desc">
                    Through my studies, I've gained a solid understanding of
                    computer science and web development concepts, and have
                    dedicated a lot of my free time to apply these concepts to
                    real-world scenarios and applications.
                  </p>
                </div>
                <Row>
                  <Col md={3} className="pb-4 skill">
                    HTML & CSS
                  </Col>
                  <Col md={3} className="pb-4 skill">
                    JavaScript ES6
                  </Col>
                  <Col md={3} className="pb-4 skill">
                    React
                  </Col>
                  <Col md={3} className="pb-4 skill">
                    Styled Components
                  </Col>
                </Row>

                <Row className="mt-4 small-m0">
                  <Col md={3} className="pb-4 skill">
                    Node JS
                  </Col>
                  <Col md={3} className="pb-4 skill">
                    Express
                  </Col>
                  <Col md={3} className="pb-4 skill">
                    Git
                  </Col>
                  <Col md={3} className="pb-4 skill">
                    Mongo DB
                  </Col>
                </Row>
              </div>
            </Section>
          </SkillsWrapper>

          <Section id="portfolio">
            <div className="max-w-700">
              <div>
                <h1 className="title"> What I've been working on </h1>
                <p className="desc">
                  I like to stay busy and always have a project in the works.
                  Take a look at some of the projects which i have done lately!.
                </p>
              </div>
            </div>
          </Section>
          <div>
            <a
              href="https://ferolic-coffee-by-benjamin.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <CoffeeImg src="../img/pro1.jpg" alt="coffee-by-benjamin" />
            </a>
            <h1 className="title"> Coffee By Benjamin </h1>
            <p className="desc">
              Developed a clone of a Coffee By Benjamin Website from
              scratch.This was my first project after learning
              <strong> MERN </strong> stack. It's a kind of an e-commerce app,
              where the user can add items to the cart, to place an order and
              make payment.
              <br />
              <br />I worked hard to keep components as reusable as possible and
              utilized props for many slight variations. I also used
              <strong> styled-components </strong>, because the structure of
              CSS-in-js is much clearer and prevents overrides.
              <br /> <br />
              For backend I used <strong> Node Js </strong> and
              <strong> Mongo DB </strong> to store the data. I have used
              React-Bootstrap for some of the pages,so that i can concentrate on
              server side work,than styling components. The user have to login
              in order to place an order, and the credentials like passwords
              will be encrypted.The payment will be done with help of
              <strong> PayPal </strong> gateway.
              <br />
              <br />I also created a separate pages for admin, where he/she can
              login as a admin and can view list of orders placed and mark the
              order to delivered.
              <br />
              <br />
              As it was my first large project using React, I learned a lot of
              lessons regarding code structure and organization. When I first
              began, I would write sloppy code and move on, but now I know how
              doing so can come back to bite you; I now spend a lot more time
              refactoring and improving every line I code I write, for the best
              readability and far fewer headaches.
            </p>

            <a
              href="https://ferolic-coffee-by-benjamin.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Button className="btn-main btn-sm bg-dark">View Project</Button>
            </a>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
