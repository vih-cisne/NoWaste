import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10.64vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  //position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backColor};

  @media (min-width: 700px) {
    height: 8.78vh;
  }
`;

export const HeaderCentralized = styled.div`
  height: 100%;
  width: 86.6%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 700px) {
    width: 86.6%;
  }
`;

export const Logo = styled.img`
  height: 26px;
  @media (min-width: 700px) {
    height: 50%;
  }
`;

export const HeaderLeftDiv = styled.div`
  height: 100%;
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 420px) {
    width: 67%;
  }
  @media (min-width: 600px) {
    width: 62.4%;
  }
  @media (min-width: 1000px) {
    width: 58.4%;
  }
`;
