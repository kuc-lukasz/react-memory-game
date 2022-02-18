import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    perspective: 1000px;
    .front.flipped {
        z-index: 1;
        transform: rotateY(180deg);
    }
`;

type Props = {
    flipped: boolean;
};

const sharedStyles = css`
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    backface-visibility: hidden;
    cursor: pointer;
    transform-style: preserve-3d;
    border-radius: 10px;
`;

export const FrontImg = styled.img<Props>`
    ${sharedStyles}
    z-index: ${({ flipped }) => (flipped ? 2 : 1)};
    transform: ${({ flipped }) =>
        flipped ? "rotate(0deg)" : "rotateY(180deg)"};
`;

export const BackImg = styled.img<Props>`
    ${sharedStyles}
    z-index: ${({ flipped }) => (flipped ? 1 : 2)};
    transform: ${({ flipped }) =>
        flipped ? "rotateY(180deg)" : "rotate(360deg)"};
    position: absolute;
    top: 0px;
    left: 0px;
`;

export const Grid = styled.div`
    margin: 20px;
    padding: 20px;
    background-color: lightgray;
    box-shadow: 0px 0px 5px 1px black;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1rem;
    position: relative;
`;

export const WinAlert = styled.div`
    position: absolute;
    left: -2%;
    right: -2%;
    top: -2%;
    bottom: -2%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    background-color: #909090de;
    font-size: large;
    color: black;
    border: 3px solid black;
    border-radius: 10px;
    z-index: 5;
    text-transform: uppercase;
    & > button {
        background-color: black;
        width: 150px;
        height: 50px;
        font-size: medium;
        color: white;
        border-radius: 10px;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
    }
`;
