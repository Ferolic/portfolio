import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(252, 252, 252);
  padding: 40px 0 0;
  margin: 50px 0 0;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 0;
    margin: 100px 0 0;
  }
`;

const LayoutWrapper = styled.div`
  padding: 20px;
  margin: 25px auto;

  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 940px;
    padding: 100px 0 0;
    margin: 75px auto;
  }
`;

const Layout = styled.div`
  margin: 60px 0;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
    margin-bottom: 50px;
  }
`;

const StyledEmail = styled.div`
  color: black;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  display: inline-block;
  transition: border-bottom 0.2s ease 0s;
`;

const InstagramGrid = styled.div`
  margin-top: 100px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: auto;
  width: 100%;
  flex-wrap: wrap-reverse;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const InstaGridLeft = styled.div`
  padding: 0;
  margin-top: 40px;
  display: flex;
  flex: 1 1 100%;
  max-width: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex: 1 1 30%;
    margin-top: 0;
    max-width: 200px;
    margin-right: 200px;
  }
`;

const InstaLeft = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 0;
  position: relative;
  background-position: center center;
`;

const InstaGridRight = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'Left Left centertop Right Right' 'Left Left centerbot Right Right';
  gap: 10px;
  padding: 0;
  flex: 1 1 100%;
  flex-wrap: wrap;

  & > * {
    position: relative;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    flex: 1 1 70%;
    gap: 20px;
  }
`;

const ImgLeft = styled.div`
  grid-area: Left / Left / Left / Left;
  height: 220px;
  background-image: url('../img/man.jpg');
  background-size: cover;
  border-radius: 4px;
  background-position: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: 300px;
  }
`;

const ImgCenterTop = styled.div`
  grid-area: centertop / centertop / centertop / centertop;
  background-image: url('../img/ranbir.jpg');
  background-size: cover;
  border-radius: 4px;
  height: auto;
  background-position: center center;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: unset;
  }
`;

const ImgCenterBottom = styled.div`
  grid-area: centerbot / centerbot / centerbot / centerbot;
  background-image: url('../img/maniratnam.jpg');
  background-size: cover;
  border-radius: 4px;
  height: auto;
  background-position: center top;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: unset;
  }
`;

const ImgRight = styled.div`
  grid-area: Right / Right / Right / Right;
  height: 220px;
  background-image: url('../img/ar3.jpg');
  background-size: cover;
  border-radius: 4px;
  background-position: center left;

  @media ${(props) => props.theme.mediaQueries.large} {
    height: 300px;
  }
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <LayoutWrapper>
        <Layout>
          <div className="max-w-700">
            <h1 className="title"> Let's Build Something Together </h1>
            <p className="desc max-md-w60">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
            <a href="mailto:ashwinferolic96@gmail.com">
              <StyledEmail>ashwinferolic96@gmail.com</StyledEmail>
            </a>
          </div>
        </Layout>

        <InstagramGrid>
          <InstaGridLeft>
            <InstaLeft>
              <h1 className="subtitle">I'm a lot cooler on instagram</h1>
              <a
                href="https://www.instagram.com/ferolic"
                target="_blank"
                rel="noreferrer"
              >
                <p className="link">
                  See More<span> › </span>
                </p>
              </a>
            </InstaLeft>
          </InstaGridLeft>

          <InstaGridRight>
            <ImgLeft> </ImgLeft>
            <ImgCenterTop></ImgCenterTop>
            <ImgCenterBottom></ImgCenterBottom>
            <ImgRight></ImgRight>
          </InstaGridRight>
        </InstagramGrid>
      </LayoutWrapper>
    </Wrapper>
  );
};

export default Contact;
