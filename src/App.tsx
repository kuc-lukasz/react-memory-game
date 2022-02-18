import { useEffect, useState } from "react";
import { SingleCartType } from "./components/CardType";
import "./App.css";
import { createdMemoryBoard } from "./components/CardType";
import { Card } from "./components/Card";
import { Grid, WinAlert } from "./styled/Card.styles";
import { Alert } from "./components/WonAlert";

function App() {
    const [cards, setCards] = useState<SingleCartType[]>(createdMemoryBoard());
    const [clickedCard, setClickedCard] = useState<undefined | SingleCartType>(
        undefined
    );
    const [matchCardCounter, setMatchCounter] = useState<number>(0);
    const [won, setWon] = useState<boolean>(false);

    useEffect(() => {
        if (matchCardCounter === cards.length / 2) {
            setWon(true);
            console.log("WINNNEEER!");
        }
    }, [matchCardCounter]);

    const handleClick = (currentCard: SingleCartType) => {
        //funkcja która sprawia, że kliknięta karta zmieni isFlipped co spowoduje odwrócenie karty
        setCards((prev) =>
            prev.map((card) => {
                return card.id === currentCard.id
                    ? { ...card, isFlipped: true, clickable: false }
                    : card;
            })
        );

        // funkcja odpowiedzialna parowanie kart, wrzuca nam klikniętą kartę "do pamięci"
        if (!clickedCard) {
            setClickedCard({ ...currentCard });
            return;
        }

        // jeśli wcześniej kliknięta karta pasuje do obecnie klikniętej karty to dodaj do Countera +1. Dodatkowo w funkcji setCards przestaw klikalność na wyłączoną
        if (clickedCard.matchingCardId === currentCard.id) {
            setMatchCounter((matchCardCounter) => matchCardCounter + 1);
            console.log(matchCardCounter);

            setCards((prev) =>
                prev.map((card) =>
                    card.id === clickedCard.id || card.id === currentCard.id
                        ? { ...card, clickable: false }
                        : card
                )
            );
            //wyzerowanie licznika klikniętych kart
            setClickedCard(undefined);
            return;
        }
        // jeśli kliknięta wczesniej i klięta teraz karta nie pasują do siebie
        setTimeout(() => {
            setCards((prev) =>
                prev.map((card) =>
                    card.id === clickedCard.id || card.id === currentCard.id
                        ? { ...card, clickable: true, isFlipped: false }
                        : card
                )
            );
        }, 500);
        setClickedCard(undefined);
    };

    const handleBtnClick = () => {
        setCards((prev) =>
            prev.map((card) => {
                return { ...card, isFlipped: false, clickable: true };
            })
        );
        setWon(false);
        setMatchCounter(0);
    };
    return (
        <>
            <Grid>
                {won && <Alert handleBtnClick={handleBtnClick} />}
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            card={card}
                            callback={handleClick}
                        />
                    );
                })}
            </Grid>
        </>
    );
}

export default App;
