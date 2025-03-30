import { Outlet } from "react-router-dom";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {}
      </main>
      <Footer />
    </>
  );
}
