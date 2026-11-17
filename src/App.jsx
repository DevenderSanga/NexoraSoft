
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import Comparison from "./pages/Comparison";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import RequestDemo from "./pages/RequestDemo";

import "./App.css";

function ComingSoon({ title, description }) {
  return (
    <main className="coming-soon-page">
      <div className="coming-soon-content">
        <span className="coming-soon-label">NEXORASOFT</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </main>
  );
}

function AppContent() {
  const [theme, setTheme] = useState(
    localStorage.getItem("saas-theme") || "light"
  );

  const [direction, setDirection] = useState(
    localStorage.getItem("saas-direction") || "ltr"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("dir", direction);

    localStorage.setItem("saas-theme", theme);
    localStorage.setItem("saas-direction", direction);
  }, [theme, direction]);

  return (
    <div className="app">

      <ScrollToTop />

      <Navbar
        theme={theme}
        setTheme={setTheme}
        direction={direction}
        setDirection={setDirection}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/features" element={<Features />} />

        <Route path="/demo" element={<Demo />} />

        <Route path="/comparison" element={<Comparison />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/integrations" element={<Integrations />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/request-demo" element={<RequestDemo />} />

        <Route path="/case-studies" element={<CaseStudies />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/faq" element={<FAQ />} />

        <Route
          path="*"
          element={
            <ComingSoon
              title="Page Not Found"
              description="The page you are looking for does not exist."
            />
          }
        />
      </Routes>

      <Footer />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
