import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled(motion.div)`
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background-color: var(--primary-color);
  bottom: -10%;
  left: 48%;
  z-index: 2;
  //transform: translateY(-50%);

  @media (max-width: 620px) {
    width: 1500px;
    height: 1500px;
    left: -130%;
    top: -1500px;
    //transform: translateX(-50%);
  }
  /*display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  border-radius: 1rem;
  //0px 0px 50px 10px rgba(0, 0, 0, 0.25)
  //box-shadow: 0px 0px 5px black;
  width: 36rem;

  */
`;

export const RegisterFormContainer = styled.div`
  gap: 0.5rem;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;

  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 620px) {
    width: 100%;
    top: 15%;
  }
`;

export const RegisterPage = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  align-items: center;
  height: 100vh;
  padding-left: 10rem;
  justify-content: flex-start;
  color: var(--invert);

  @media (max-width: 620px) {
    //min-height: 800px;
    //height: 100vh;
  }
`;

export const LinkStyled = styled(Link)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 6;


  @media (max-width: 620px) {
    color: white;
    top: 0.5rem;
    left: 0.5rem;
  }

`
