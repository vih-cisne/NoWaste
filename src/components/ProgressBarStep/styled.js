import styled from "styled-components";

export const ProgressBar = styled.div`
    display: flex;
    position: relative;
    gap: 6rem;

    ::after {
        content: '';
        width: 100%;
        position: absolute;
        top: calc(50% - 0.1rem);
        z-index: -2;
        height: 0.2rem;
        background-color: var(--grey-1);
    }

    @media (max-width: 450px) {
        gap: 5rem;
    }
`

export const Step = styled.div`
    color: ${(props) => props.currentStep >= props.stepCounter ? 'white' : 'var(--primary-color)'};
    background-color: ${(props) => props.currentStep >= props.stepCounter ?'var(--primary-color)' : 'white'};
    padding: 0.1rem 0;
    width: 1.4rem;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid;
`

export const Progress = styled.div`
    width: ${(props) => props.currentStep*50+'%'};
    position: absolute;
    top: calc(50% - 0.1rem);
    z-index: -1;
    height: 0.2rem;
    background-color: var(--primary-color);
`