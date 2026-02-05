import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Home from "./pages/home";
import Concluidos from "./pages/concluidos";
import Pendentes from "./pages/pendentes";
import { Login as Login } from "./pages/login";

export default function App() {
  return (
    <BrowserRouter>
      <div className="navbar-container">
        <nav className="navbar-sidebar">
          <Navbar />
        </nav>
        <main className="navbar-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pendentes" element={<Pendentes />} />
            <Route path="/concluidos" element={<Concluidos />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
