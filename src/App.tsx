import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Description from "./components/Description";
// import { TimelineSection } from "./components/TimeLineSection";
import Rules from "./components/Rules";
import OrganizersPage from "./components/OrganizersPage";
// import { FireParticles } from "./components/FireParticles";
import CollegeMap from "./components/CollegeMap";
import WhyJoinUs from "./components/WhyJoinUs";
import Results from "./components/Results";
import Preloader from "./components/Preloader";
import Prizes from "./components/Prizes";

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent preloader from showing again
    if (!sessionStorage.getItem("hasLoaded")) {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 3000);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <ScrollToHashElement />
      <div className="flex flex-col min-h-screen">
        {/* <FireParticles /> */}
        <main className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={
              <div>
                <Hero />
                <Description />
                <Prizes />
                <WhyJoinUs />
                <CollegeMap />
                <Footer />
              </div>
            } />
            <Route path="/team" element={<div><OrganizersPage /> <Footer /> </div>} />
            <Route path="/guidelines" element={<div><Rules /> <Footer /> </div>} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
