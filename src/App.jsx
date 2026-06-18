import { MyRoutes } from "./routers/routes";
import "./App.css"; // Estilos globales
import iconLogo from "./assets/iconrn.png";
function App() {
  return (
    <div className="App">
      {/* Ya no llamamos a LandingPage aquí, 
         porque las rutas se encargan de eso.
      */}
      <header className="title">
        <h1>
          {" "}
          <img src={iconLogo} alt="logo" width={60} /> Rick & Morty
        </h1>
      </header>

      {/* Aquí se inyecta la navegación */}
      <main>
        <MyRoutes />
      </main>

      <footer>
        <p>Hecho con ❤️ por Nilo Quispe</p>
        <p>© 2026 Rick and Morty App</p>
      </footer>
    </div>
  );
}

export default App;
