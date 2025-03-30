import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout.js";
import Home from "./pages/Home/page.js";
export default function App() {
  return (
    <div id="accueil">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Home />} />
            <Route path="/photosReportage" element={<Home />} />
            <Route path="/albums" element={<Home />} />
            <Route path="/interviews" element={<Home />} />
            <Route path="/connexion" element={<Home />} />
            <Route path="/membres" element={<Home />} />
            <Link to="/photos">Chronique photos</Link>
            <Link to="/photosReportage">Reportage Photos</Link>
            <Link to="/albums">Chronique Album</Link>
            <Link to="/interviews">Interviews</Link>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
