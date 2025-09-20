import Header from "./components/layout/Header/Header";
import "./App.scss"; // Cambiamos por un archivo CSS principal

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>Rimac Frontend Challenge</h1>
        <p>Header funcionando correctamente ✅</p>
      </main>
    </div>
  );
}

export default App;
