import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home/home";
import Album from "./pages/album/chronique";
import Interview from "./pages/interview/interview";
import Photo from "./pages/photo/photo";
import Contact from "./pages/contact/contact";
import Apropos from "./pages/apropos/apropos";
import Erreur404 from "./pages/erreur404/erreur404";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Album" element={<Album />} />
            <Route path="/Interview" element={<Interview />} />
            <Route path="/Photo" element={<Photo />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="*" element={<Erreur404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
