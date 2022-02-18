import { useState } from "react";
import { SingleCartType } from "./components/CardType";
import "./App.css";
import { createdMemoryBoard } from "./components/CardType";
import { Card } from "./components/Card";
import { Grid } from "./styled/Card.styles";

function App() {
    const [cards, setCards] = useState<SingleCartType[]>(createdMemoryBoard());
    console.log(cards);
    const handleClick = () => {
        console.log("clicked");
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
