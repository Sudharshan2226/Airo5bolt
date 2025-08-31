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
import LoadingErrorBoundary from "./components/LoadingErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { loadingManager } from "./utils/performance";
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
    } else {
      // No hash - scroll to top for regular route navigation
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize performance monitoring
    loadingManager.setLoading('app', true, 8000); // 8 second safety timeout

    // Prevent preloader from showing again
    if (!sessionStorage.getItem("hasLoaded")) {
      // Reduced loading time and added error handling
      const minLoadTime = 1500; // Reduced from 3000ms
      const maxLoadTime = 5000; // Maximum timeout
      
      const loadingTimer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
        loadingManager.setLoading('app', false);
      }, minLoadTime);

      // Safety timeout to prevent infinite loading
      const safetyTimer = setTimeout(() => {
        console.warn("Loading took too long, forcing completion");
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
        loadingManager.setLoading('app', false);
      }, maxLoadTime);

      return () => {
        clearTimeout(loadingTimer);
        clearTimeout(safetyTimer);
        loadingManager.setLoading('app', false);
      };
    } else {
      setLoading(false);
      loadingManager.setLoading('app', false);
    }
  }, []);

  if (loading) {
    return <Preloader isLoading={loading} setIsLoading={setLoading} />;
  }
  

  return (
    <LoadingErrorBoundary>
      <Router>
        <ScrollToTop />
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
    </LoadingErrorBoundary>
  );
}

export default App;
