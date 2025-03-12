import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <Top />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ServicesPage;
