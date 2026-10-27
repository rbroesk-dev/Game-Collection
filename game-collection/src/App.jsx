import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="games">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Ronas</p>
        <p>Studentnummer: 2208249</p>
        <p>Klas: 25B</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;