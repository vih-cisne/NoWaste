import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseTypograph } from "../../components/BaseTypograph";
import { FormRegister } from "../../components/FormRegister";
import Logo from "../../components/Logo";
import images from "../../data/carouselData";
import Carousel from "../../components/Carousel";

import { Container, LinkStyled, RegisterFormContainer, RegisterPage } from "./styles";
import { ToogleTheme } from "../../components/ToogleTheme";

export const SignUp = () => {
  const [animate, setAnimate] = useState()
  
  useEffect(() => {
    const animation = window.innerWidth < 620 ? { y: ["100%", "10%"], x: {} } : { x: ["-100%", "-5%"], y: {} }
    setAnimate(animation)
  }, []);

  return (
    <RegisterPage>
      <Container animate={animate}  ></Container>
      <RegisterFormContainer>
      <LinkStyled to='/home/about'>Saiba mais</LinkStyled>
      <Logo lw="50%" mw="50%" sw="55%"/>
        <h2>Criar conta</h2>
        <FormRegister />
        <BaseTypograph tag="small">
          Já tem uma conta? <Link to="/">Login</Link>
        </BaseTypograph>
      </RegisterFormContainer>
      <ToogleTheme style={{position: 'fixed', bottom: '5px', left: '5px' }}/>
       <Carousel side='right' dataImages={images}/>
    </RegisterPage>
  );
};
