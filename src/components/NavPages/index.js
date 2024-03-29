import { PageContainer } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal } from "../Modals";

import { AiFillHome } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import {  BiLogOut, BiLogIn } from "react-icons/bi";
import { GoDashboard } from "react-icons/go";
import { FaCarrot } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useContext, useState } from "react";

import { ModalConfirm } from "../Modals/ModalConfirm";
import { FormContext } from "../../providers/Form";
import { ThemeContext } from "../../providers/Theme";

const NavPages = ({ setAsidePages }) => {

  const { userToken, user } = useContext(FormContext)
  const location = useLocation();

  const home = { name: "Home", icon: <AiFillHome size="20px" /> };
  const balance = { name: "Balanço", icon: <FaBalanceScale size="20px" /> };
  const dash = { name: "Dashboard", icon: <GoDashboard size="20px" /> };
  const stats = { name: "Sobre nós", icon: <FaCarrot size="20px" /> };
  const logout = { name: "Logout", icon: <BiLogOut size="20px" /> };
  const login = { name: "Login", icon: <BiLogIn size="20px" /> };
  const register = { name: "Registrar-se", icon: <MdAccountCircle size="20px" /> };


  const pageHome = user.account === "seller" ? [dash, balance, stats, logout] : [stats, logout]
  const pageDash = [balance, stats, logout, home];
  const pageStats = [dash, stats, logout, home];
  const pageAbout = !userToken ? [login, register] : [home, dash, balance, logout];
  const pageCheckout = [ home, stats, logout]


  const [showConfirm, setShowConfirm] = useState(false);

  const { theme } = useContext(ThemeContext);
  const { exitUser } = useContext(FormContext);

  const whichLocation = () => {
    const href = location.pathname;
    if (href === "/home") {
      return pageHome;
    } else if (href === "/home/dashboard") {
      return pageDash;
    } else if (href === "/home/dashboard/stats") {
      return pageStats;
    } else if (href === "/home/about") {
      return pageAbout;
    } else if (href === "/home/checkout") {
      return pageCheckout;
    }
  };

  const pages = whichLocation();

  const onConfirmLogout = () => {
    exitUser();
  };

  const navigate = useNavigate();

  const handleRedirect = (page) => {
    if (page.name === "Dashboard") {
      navigate("/home/dashboard");
      setAsidePages(false);
    } else if (page.name === "Balanço") {
      navigate("/home/dashboard/stats");
      setAsidePages(false);
    } else if (page.name === "Sobre nós") {
      navigate("/home/about");
      setAsidePages(false);
    } else if (page.name === "Logout") {
      setShowConfirm(true);
    } else if (page.name === "Home") {
      navigate("/home");
      setAsidePages(false);
    } else if (page.name === "Login") {
      navigate("/");
      setAsidePages(false);
    } else if(page.name === "Registrar-se" ) {
      navigate("/signUp");
      setAsidePages(false);

    }
  };

  return (
    <Modal
      typeModal="NavPages"
      top="100%"
      padding="0.8rem"
      backgroundColor={
        theme === "dark" ? "var(--primary-color)" : "var(--secondary-color)"
      }
      borderRadius="0 0 15px 15px"
      borderTop={theme === "dark" ? "1px solid white" : "1px solid black"}
    >
      {pages.map((page, index) => {
        return (
          <PageContainer
            geralColor={theme === "dark" && "white"}
            onClick={() => handleRedirect(page)}
            borderBottom={
              index === pages.length - 1
                ? "0"
                : `0.5px solid ${theme === "dark" ? "white" : "black"}`
            }
            key={index}
          >
            {page.icon}
            {page.name}
          </PageContainer>
        );
      })}
      <ModalConfirm
        text="Deseja mesmo fazer logout?"
        onConfirmFunction={onConfirmLogout}
        setVisible={setShowConfirm}
        visible={showConfirm}
      />
    </Modal>
  );
};

export default NavPages;
