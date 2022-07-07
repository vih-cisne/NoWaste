import styled from "styled-components";

export const FormRegisterStyled = styled.form`

    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 14rem;
    gap: 0.7rem;
    >div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 16rem;

        >div {
            display: flex;
            gap: 0.5rem;
        }
    }

`

export const StepButtons = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;

    >button:disabled {
        visibility: hidden;
    }


`