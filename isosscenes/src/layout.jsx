import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Les routes enfants seront affichées ici */}
      </main>
      <Footer />
    </>
  );
}
