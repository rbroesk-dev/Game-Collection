import { useState } from "react";

function GameCard(props) {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className="game-card">
            {props.image && (
                <img
                    src={`/images/${props.image}`}
                    alt={props.title}
                    className="game-image"
                />
            )}
            <h2>{props.title}</h2>
            <p><strong>Platform:</strong> {props.platform}</p>
            <p><strong>Genre:</strong> {props.genre}</p>
            <p><strong>Developer:</strong> {props.developer}</p>
            <p><strong>Multiplayer:</strong> {props.multiplayer}</p>
            <p><strong>Rating:</strong> ⭐ {props.rating}</p>
            <p><strong>Jaar:</strong> {props.year}</p>

            <button
                className={`favorite-button ${favorite ? "is-favorite" : ""}`}
                onClick={() => setFavorite(!favorite)}
            >
                {favorite ? "❤️ In Favorieten" : "🤍 Toevoegen aan favorieten"}
            </button>
        </div>
    );
}

export default GameCard;