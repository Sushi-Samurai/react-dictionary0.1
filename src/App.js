import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h3 className="logo d-none d-md-block">Sam Turner</h3>
          <h3 className="logo d-block d-md-none">ST</h3>
        </header>

        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            ✌ This project was coded by Sam Turner-Lara and it is{" "}
            <a href="https://github.com/Sushi-Samurai/react-dictionary0.1">
              open-sourced
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
