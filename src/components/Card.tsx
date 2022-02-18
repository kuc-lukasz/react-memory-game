import React from "react";
import { SingleCartType } from "./CardType";
import { Wrapper, FrontImg, BackImg } from "./Card.styles";

type Props = {
    card: SingleCartType;
    callback: (card: SingleCartType) => void;
};

export const Card = ({ card, callback }: Props) => {
    const handleClick = () => {
        if (card.clickable) {
            callback(card);
        }
    };
    return (
        <Wrapper onClick={handleClick}>
            <FrontImg
                flipped={card.isFlipped}
                src={card.frontImg}
                alt="card-front"
            />

            <BackImg
                flipped={card.isFlipped}
                src={card.backImg}
                alt="card-back"
            />
        </Wrapper>
    );
};
