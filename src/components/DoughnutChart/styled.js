import styled from "styled-components";


export const DoughnutContainer = styled.div`
    padding: 1rem;
    border: 1px solid var(--invert);
    border-radius: 10px;
    width: 25vw;
    height: auto;

    >p {
            font-weight: 600;
            color: var(--invert);
            width: 100%;
            text-align: center;

    }

    @media (max-width: 650px) {
        width: 40vw;

}

@media (max-width: 420px) {
        width: 70vw;

}

`