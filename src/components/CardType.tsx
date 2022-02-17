import card1 from "../img/photo1.jpg";
import card2 from "../img/photo2.jpg";
import card3 from "../img/photo3.jpg";
import card4 from "../img/photo4.jpg";
import card5 from "../img/photo5.jpg";
import card6 from "../img/photo6.jpg";
import card7 from "../img/photo7.jpg";
import card8 from "../img/photo8.jpg";
import card9 from "../img/photo9.jpg";
import card10 from "../img/photo10.jpg";
import startCard from "../img/photoStart.jpg";

// Create a type of card

export type SingleCartType = {
    id: string;
    isFlipped: boolean;
    clickable: boolean;
    backImg: string;
    frontImg: string;
    matchingCardId: string;
};

//Create array
const Cards: string[] = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
];

//Create board with ts, map two times because I need img twice
export const createdMemoryBoard = (): SingleCartType[] =>
    [...Cards, ...Cards].map((card, i) => ({
        id: `card${i}`,
        isFlipped: false,
        clickable: true,
        backImg: startCard,
        frontImg: card,
        matchingCardId:
            i < Cards.length
                ? `card${i + Cards.length}`
                : `card${i - Cards.length}`,
    }));
