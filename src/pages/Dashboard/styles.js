import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const StyledBalanceDiv = styled.div`
  position: fixed;
  top: 19rem;
  right: 0.2rem;

  margin: 0 1rem 0 1rem;

  grid-area: StyledBalanceDiv;

  width: 25%;

  div {
    width: 100%;

    display: flex;
    align-items: center;

    gap: 0.5rem;

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    figure:nth-child(1) {
      color: var(--primary-color);
      font-size: 1.9rem;
    }
  }

  .text-div {
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 0;
      margin-bottom: 1rem;
      padding-right: 5rem;
    }
  }
`;

export const StyledStoreDiv = styled.div`
  @media (max-width: 740px) {
    position: fixed;
    top: 7rem;

    margin: 0 2rem 0 1rem;

    grid-area: StyledStoreDiv;

    width: 90%;

    div {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;

      border-bottom: 0.1rem solid var(--primary-color);

      figure {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      figure:nth-child(1) {
        color: var(--primary-color);
        font-size: 1.7rem;
      }

      figure:nth-child(2) {
        position: absolute;
        right: 0;
        font-size: 1.6rem;
      }
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--primary-color);
      font-size: 1.4rem;
    }

    .name-edit-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 0.5rem;

      border: none;
    }
  }

  @media (min-width:450px) {
    width: 50%;
  }

  @media (max-width:783px) {

    div {
      h3 {
        font-size: 1rem;
      }
    }
    
  }

  @media (min-width: 741px) {
    position: fixed;
    top: 10rem;
    right: 0rem;

    margin: 0 1rem 0 1rem;

    width: 25%;



    div {
      width: fit-content;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;

      gap: 0.5rem;

      figure {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      figure:nth-child(1) {
        color: var(--primary-color);
        font-size: 1.5rem;
      }

      font-size: 1.2rem;

      
    }


    >div {
      gap: 1rem;
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--primary-color);
      font-size: 1.5rem;
    }

    .name-edit-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 0.5rem;

      border: none;

      width: 100%;
      
    
    }
  }
`;

export const StyledProductsDiv = styled.div`
  @media (max-width: 740px) {
    position: fixed;
    top: 10rem;

    width: 100%;
    height: 400px;

    .header-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 1.4rem;

      padding: 3rem 1rem 0 1rem;

      width: 100%;
    }

    .products-div {
      display: flex;
      flex-direction: column;
      align-items: start;

      width: 100%;
      height: 50vh;

      margin: 0.5rem 0.5rem 0 0.5rem;

      overflow-x: hidden;
      overflow-y: scroll;

    }
  }

  @media (min-width: 741px) {
    position: fixed;
    top: 10rem;

    width: 60%;
    height: 400px;

    left: 3rem;

    .header-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 2rem;

      margin: 0 1rem 0 1rem;

      width: 100%;
    }

    .products-div {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;

      width: 100%;
      height: 80%;

      margin: 5rem 1rem 0 1rem;

      overflow-x: hidden;
      overflow-y: scroll;

    }
  }
`;

export const ProductCardDiv = styled.ul`
  margin-bottom: 2rem;
  padding-right: 0.5rem;
  @media (max-width: 740px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
  }

  @media (min-width: 741px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ProductCard = styled.li`

.category {
 
    background-color: var(--invert);
    color: var(--primary-color);
    font-weight: 600;
    padding: 0.2rem;
    border-radius: 5px;
}

.name-div {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  justify-items: flex-start;
  align-items: flex-start;
  gap: 0.5rem;

}
  @media (max-width: 740px) {
    width: 100%;
    height: 100%;

    display: flex;

    gap: 0.1rem;

    .action-buttons {
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      button {
        border: none;

        color: var(--primary-color);

        font-size: 0.9rem;

        background-color: inherit;
      }
    }

    .img-info {
      width: 100px;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 90%;
        height: 5rem;

        border-radius: 5px;
      }
    }

    .product-info {
      height: 100%;
      width: 80%;

      display: flex;
      align-items: center;
      color: var(--invert);

      gap: 0.5rem;
    }

    .name-div {
      width: 30%;
      height: 100%;
    }

    .price-div {
      width: 5%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-evenly;
      padding-top: 1rem;
    }

    .description-div {
      width: 50%;
      height: 100%;
      padding-top: 1rem;

      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-evenly;
    }
  }

  @media (min-width: 741px) {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    .action-buttons {
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      button {
        border: none;

        color: var(--primary-color);

        font-size: 1rem;

        background-color: inherit;
      }
    }

    .img-info {
      width: 150px;
      height: 100px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 90%;
        height: 5rem;

        border-radius: 5px;
      }
    }

    .product-info {
      width: 80%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 0.2rem;

      color: var(--invert);
    }

    .name-div {
      width: 30%;
      height: 100%;
    }

    .price-div {
      width: 30%;
      height: 100%;
      padding-top: 1rem;

      display: flex;
      flex-direction: column;
      align-items: start;

      >div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    }

    .description-div {
      width: 40%;
      height: 100%;
      padding-top: 1rem;

      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }
`;
