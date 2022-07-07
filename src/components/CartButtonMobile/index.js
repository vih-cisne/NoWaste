import {
  Button,
  CartPriceContainer,
  QttCartPriceContainer,
  Titles,
} from "./styled";

const CartButtonMobile = () => {
  return (
    <>
      <Button>
        <QttCartPriceContainer>
          <Titles fontSize="18px">3</Titles>
          <CartPriceContainer>
            <Titles fontSize="23px">Carrinho</Titles>
            <Titles fontSize="18px">R$ 19,90</Titles>
          </CartPriceContainer>
        </QttCartPriceContainer>
      </Button>
    </>
  );
};

export default CartButtonMobile;