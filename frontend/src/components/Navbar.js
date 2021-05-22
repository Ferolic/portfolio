import React from 'react';
import styled from 'styled-components';
import useToggle from './Toggle';

const Wrapper = styled.div`
  padding: 20px 25px;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: unset;
  height: 60px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0.5rem 2rem ${(props) => props.theme.colors.shadowColor};
  animation: ${(props) =>
    props.scrolled ? ' 0.5s ease 0s 1 normal none running animateNav;' : ''};
  z-index: 9;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding-left: 50px;
    padding-right: 50px;
  }

  @keyframes animateNav {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const NavWrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.mediaQueries.large} {
    display: block;
    vertical-align: middle;
  }
`;

const StyledNav = styled.a`
  text-transform: uppercase;
  font-size: 13.5px;
  font-weight: 700;
  padding: 0 10px;
  transition: color 0.2s ease-out 0s;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

const SideNav = styled.div`
  display: flex;
  -webkit-box-algin: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;
  height: calc(100% - 64px);
  width: ${(props) => (props.isSidenavOpened ? '100%' : 0)};
  -webkit-transition: 0.6s ease-in;
  transition: 0.6s ease-in;
  position: fixed;
  top: 60px;
  left: 0;
  background: #fff;
  z-index: 99;
  @media ${(props) => props.theme.mediaQueries.large} {
    display: none;
  }
`;

const MenuBtn = styled.div`
  position: fixed;
  top: 26px;
  right: 38px;
  width: 20px;
  height: 30px;
  cursor: pointer;
  -webkit-transition: 0.5s all ease-in-out;
  transition: 0.5s all ease-in-out;
  z-index: 9999;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: none;
  }
`;

const BtnLine = styled.div`
  width: 18px;
  height: 3.12px;
  background: ${(props) => (props.isSidenavOpened ? 'transparent' : `#127eb1`)};
  border-radius: 12px;
  transition: ${(props) =>
    props.isSidenavOpened ? 'translateX(-50px)' : '0.5s all ease-in-out'};

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 3.12px;
    border-radius: 12px;
    background: ${(props) => props.theme.colors.main};
    transition: all 0.5s ease-in-out;
  }

  &:before {
    transform: ${(props) =>
      props.isSidenavOpened ? 'rotate(45deg)' : 'translateY(-6px)'};
  }

  &:after {
    transform: ${(props) =>
      props.isSidenavOpened ? 'rotate(-45deg)' : 'translateY(6px)'};
  }
`;

const SideNavLink = styled.a`
  font-size: 13.5px;
  display: block;
  margin: 2rem 0;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

const StyledIconImage = styled.img`
  width: 40px;
`;

const Navbar = () => {
  let [isSidenavOpened, setIsSidenavOpened] = useToggle();

  return (
    <>
      <Wrapper>
        <a href="#">
          <StyledIconImage src="../icon.png" alt="icon" />
        </a>
        <NavWrapper>
          <StyledNav href="#about"> About Me </StyledNav>
          <StyledNav href="#portfolio"> Portfolio </StyledNav>
          <StyledNav href="#contact"> Contact Me </StyledNav>
        </NavWrapper>
      </Wrapper>

      <SideNav id="side-nav" isSidenavOpened={isSidenavOpened}>
        <div>
          <SideNavLink href="#about" onClick={setIsSidenavOpened}>
            About Me
          </SideNavLink>
          <SideNavLink href="#portfolio" onClick={setIsSidenavOpened}>
            Portfolio
          </SideNavLink>
          <SideNavLink href="#contact" onClick={setIsSidenavOpened}>
            Contact Me
          </SideNavLink>
        </div>
      </SideNav>

      <MenuBtn onClick={setIsSidenavOpened}>
        <BtnLine isSidenavOpened={isSidenavOpened}> </BtnLine>
      </MenuBtn>
    </>
  );
};

export default Navbar;
