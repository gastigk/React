import "./NavBar.css";
import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

  return (

    <header className="header">
      <div className="header__container">
          <h1 className="header__logo">LOGO</h1>

            <nav className="navbar">
              <li className="navbar__link">Nosotros</li>
              <li className="navbar__link">Productos</li>
              <li className="navbar__link">Blog</li>
            </nav>

          <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;

