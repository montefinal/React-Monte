import React from 'react'
import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div>
    <nav><ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos Sellados</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Contacto</a></li>
        <li> <CartWidget/>  </li>
    </ul></nav>
    </div>
  )
}

export default NavBar