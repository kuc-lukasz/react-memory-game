import { useState } from "react";
import { SingleCartType } from "./components/CardType";
import "./App.css";
import { createdMemoryBoard } from "./components/CardType";

function App() {
    const [cards, setCards] = useState<SingleCartType[]>(createdMemoryBoard());
    console.log(cards);
    return (
        <div className="App">
            {cards.map((card) => {
                return <p key={card.id}>{card.id}</p>;
            })}
        </div>
    );
}

export default App;
