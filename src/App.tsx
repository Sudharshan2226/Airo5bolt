import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import PrimaryHero from "./components/PrimaryHero";
import ScrollWrapper from "./components/ScrollWrapper";
import Rules from "./components/Rules";
import OrganizersPage from "./components/OrganizersPage";
import CollegeMap from "./components/CollegeMap";
import WhyJoinUs from "./components/WhyJoinUs";
import Results from "./components/Results";
import Preloader from './components/Preloader';
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import { FloatingNav } from "./components/FloatingNav";
import AiroHackathonPage from "./components/AiroHackathonPage";
import AiroChatbot from "./components/AiroChatbot";
import Airopromo from "./components/Airopromo";
import Airopitch from "./components/Airopitch";
import Airoctf from "./components/Airocode";
import Airocodebid from "./components/Airocodebid";
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      
      // Use setTimeout to ensure the element is rendered
      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // If element not found, retry after a short delay
        const timeoutId = setTimeout(() => {
          scrollToElement();
        }, 100);
        
        return () => clearTimeout(timeoutId);
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
    return <Preloader isLoading={loading} setIsLoading={setLoading} />;
  }
  

  return (
    <Router>
      <ScrollToHashElement />
      <div className="flex flex-col min-h-screen">
        <FloatingNav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <ScrollWrapper>
                <PrimaryHero />
                <div data-scroll-section>
                </div>
                <div data-scroll-section>
                  <Events />
                </div>
                <div data-scroll-section>
                  <WhyJoinUs />
                </div>
                <div data-scroll-section>
                  <CollegeMap />
                </div>
                <div data-scroll-section>
                  <FAQ />
                </div>
                <div data-scroll-section>
                  <Footer />
                </div>
              </ScrollWrapper>
            } />
            <Route path="/team" element={<div><OrganizersPage /> <Footer /> </div>} />
            <Route path="/guidelines" element={<div><Rules /> <Footer /> </div>} />
            <Route path="/results" element={<div><Results /> <Footer /></div>} />

            <Route path="/airo-hackathon" element={<AiroHackathonPage />} />
            <Route path="/airo-chatbot" element={<AiroChatbot />} />
            <Route path="/airo-promo" element={<Airopromo />} />
            <Route path="/airo-pitch" element={<Airopitch />} />
            <Route path="/airo-ctf" element={<Airoctf />} />
            <Route path="/airo-code-bid" element={<Airocodebid />} />
            
            {/* Event-specific routes */}
            <Route path="/events" element={<div><Events /> <Footer /></div>} />
            <Route path="/events/glitch-multiverse" element={<Airocodebid />} />
            <Route path="/events/webverse-interface" element={<AiroHackathonPage />} />
            <Route path="/events/multiverse-pitch" element={<Airopitch />} />
            <Route path="/events/web-creativity" element={<Airopromo />} />
            <Route path="/events/spidey-bot" element={<AiroChatbot />} />
            <Route path="/events/ctf-dimensions" element={<Airoctf />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
