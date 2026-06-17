import { MyRoutes } from "./routers/routes";
import "./App.css"; // Estilos globales

function App() {
  return (
    <div className="App">
      {/* Ya no llamamos a LandingPage aquí, 
         porque las rutas se encargan de eso.
      */}
      <header className="title">
        <h1>Rick and Morty</h1>
      </header>

      {/* Aquí se inyecta la navegación */}
      <main>
        <MyRoutes />
      </main>
    </div>
  );
}

export default App;