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
      <div className="max-sm:h-0 md:h-10"></div>
      <Footer />
    </>
  );
}

export default ServicesPage;
