import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 86.6%;
  cursor: pointer;
  
  @media (min-width: 420px) {
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }

  @media (min-width: 700px) {
    width: 80vw;
    height: auto;
  }
`;

export const Circle = styled.div`
  display: flex;
  border-radius: 50px;
  border: 1px solid var(--primary-color);
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.color};

  svg {
    filter: ${(props) => props.iconColor};

    @media (min-width: 700px) {
      height: 30px;
      width: auto;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 55px;
  margin: 0 5px 0 5px;
  @media (min-width: 700px) {
    height: 75px;
    width: 75px;
  }
`;

export const Title = styled.h4`
  color: var(--primary-color);
  font-size: 0.7rem;
  font-family: "Montserrat";
  font-weight: 300;
`;
