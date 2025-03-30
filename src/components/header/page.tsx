import { Link } from "react-router-dom";
import Logo from "../../../public/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/photos">Chronique photos</Link>
        <Link to="/photosReportage">Reportage Photos</Link>
        <Link to="/albums">Chronique Album</Link>
        <Link to="/interviews">Interviews</Link>
      </nav>
      <img src={Logo} alt="logo IsosScenes" />
    </header>
  );
}
