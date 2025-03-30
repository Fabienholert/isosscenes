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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
