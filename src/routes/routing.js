import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import BrandPage from "../pages/brandpage/BrandPage";
import BrandDetailsPage from "../pages/branddetailspage/BrandDetailsPage";
import Navbar from "../components/navbar/NavBar";

export default function Routing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/brand/:id" exact element={<BrandDetailsPage />} />
        <Route path="/:country" exact element={<BrandPage />} />
        <Route path="/route" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/route" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
