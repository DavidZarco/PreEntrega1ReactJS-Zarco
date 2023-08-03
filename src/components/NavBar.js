import React from'react';

const NavBar = () => {
return (
<header className="header">
      {/* logo de la marca */}
      <div className="logo-container">
       
      </div>

      {/* links de navegación */}
      <nav>
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
      </nav>

      {/* selector de lenguaje */}
      <select className="select-language">
        <option value="" selected disabled>
          Language
        </option>
        <option value="">Español</option>
        <option value="">日本語</option>
      </select>
    </header>
);
};



export default NavBar;