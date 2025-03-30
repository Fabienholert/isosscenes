import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout.js";
import Albums from "./pages/albums/page.js";
import Connexion from "./pages/connexion/page.js";
import Home from "./pages/Home/page.js";
import Interviews from "./pages/interviews/page.js";
import Membres from "./pages/membre/page.js";
import Photos from "./pages/photosChronique/page.js";
import PhotosReport from "./pages/photosReportage/page.js";
export default function App() {
  return (
    <div id="accueil">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/photosReportage" element={<PhotosReport />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/membres" element={<Membres />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
