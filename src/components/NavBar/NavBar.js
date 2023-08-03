import React from'react';
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
return (
<header className="header">

      {/* links de navegación */}
      <nav>
        <h3>
          Verduleria Rosa
        </h3>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
);
};



export default NavBar;