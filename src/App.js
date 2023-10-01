import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LuxuryCars from "./pages/LuxuryCars";
import Brands from "./pages/Brands";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import PricacyPolicy from "./pages/PricacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import CarDetails from "./pages/CarDetails";
import BrandsList from "./pages/BrandsList";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luxury-cars" element={<LuxuryCars />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PricacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/luxury-cars/:id" element={<CarDetails />} />
        <Route path="/collections/:brandurl" element={<BrandsList />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
