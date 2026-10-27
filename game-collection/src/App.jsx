import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import games from "./data/games.json";

function App() {
  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) => {
    const query = search.toLowerCase();
    return (
      game.title.toLowerCase().includes(query) ||
      game.platform.toLowerCase().includes(query) ||
      game.genre.toLowerCase().includes(query) ||
      game.developer.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container">
      <Header title="🎮 Ultimate Game Collection" />

      <div className="game-list">
        <div className="user-info">
          <h2>Welkom bij mijn React-applicatie!</h2>
          <p><strong>Naam:</strong> Ronas</p>
          <p><strong>Studentnummer:</strong> 2208249</p>
          <p><strong>Klas:</strong> 25B</p>
        </div>

        <input
          className="search-input"
          type="text"
          placeholder="Zoek op titel, platform, genre of developer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cards-grid">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              developer={game.developer}
              multiplayer={game.multiplayer}
              rating={game.rating}
              year={game.year}
              image={game.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;