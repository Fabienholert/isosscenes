import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo Isosscenes" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          {" "}
          Accueil
        </NavLink>
        <NavLink to="/Apropos" className="header__link">
          {" "}
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
