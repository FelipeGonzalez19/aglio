import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo y Nombre */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span>aglio.</span>
      </div>

      {/* Botón Menú Hamburguesa */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Servicios</a></li>
        <li><a href="/">Contacto</a></li>
      </ul>
    </nav>
  );
}