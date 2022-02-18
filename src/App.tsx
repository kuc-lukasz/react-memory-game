import { useState } from "react";
import { SingleCartType } from "./components/CardType";
import "./App.css";
import { createdMemoryBoard } from "./components/CardType";
import { Card } from "./components/Card";
import { Grid } from "./styled/Card.styles";

function App() {
    const [cards, setCards] = useState<SingleCartType[]>(createdMemoryBoard());
    const [clickedCard, setClickedCard] = useState<undefined | SingleCartType>(
        undefined
    );
    const [matchCardCounter, setMatchCounter] = useState(0);

    const handleClick = (currentCard: SingleCartType) => {
        //funkcja która sprawia, że kliknięta karta zmieni isFlipped co spowoduje odwrócenie karty
        setCards((prev) =>
            prev.map((card) => {
                return card.id === currentCard.id
                    ? { ...card, isFlipped: true, clickable: false }
                    : card;
            })
        );

        // funkcja odpowiedzialna parowanie kart
        if (!clickedCard) {
            setClickedCard({ ...currentCard });
            return;
        }
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
            setClickedCard(undefined);
            return;
        }
        // if isnt pair turn back cards
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
    return (
        <Grid>
            {cards.map((card) => {
                return (
                    <Card key={card.id} card={card} callback={handleClick} />
                );
            })}
        </Grid>
    );
}

export default App;
