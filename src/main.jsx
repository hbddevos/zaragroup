// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ServicesPage from "./pages/ServicesPage.jsx";
import Services from "./components/Services.jsx";
import ServicePage from "./pages/ServicePage.jsx";

// const router = createBrowserRouter


createRoot(document.getElementById("root")).render(

  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="services" element={<ServicesPage />}>
        <Route path=":id" element={<ServicePage />} />
        <Route index element={<Services />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
