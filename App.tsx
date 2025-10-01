import CV from "./cv";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Mathis Fajeau - Software Engineer</h1>
        <p className="subtitle">CV Application</p>
      </header>
      <main>
        <CV />
      </main>
      <footer className="app-footer">
        <p>© 2025 Mathis Fajeau</p>
      </footer>
    </div>
  );
}

export default App;
