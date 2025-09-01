import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import LoadingErrorBoundary from "./components/LoadingErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { FloatingNav } from "./components/FloatingNav";
import { loadingManager } from "./utils/performance";

// Eager load critical components for the home page
import Footer from "./components/Footer";
import PrimaryHero from "./components/PrimaryHero";
import ScrollWrapper from "./components/ScrollWrapper";
import Events from "./components/Events";
import CollegeMap from "./components/CollegeMap";
import WhyJoinUs from "./components/WhyJoinUs";
import FAQ from "./components/FAQ";

// Lazy load non-critical route components
const Rules = lazy(() => import("./components/Rules"));
const OrganizersPage = lazy(() => import("./components/OrganizersPage"));
const Results = lazy(() => import("./components/Results"));
const AiroHackathonPage = lazy(() => import("./components/AiroHackathonPage"));
const AiroChatbot = lazy(() => import("./components/AiroChatbot"));
const Airopromo = lazy(() => import("./components/Airopromo"));
const Airopitch = lazy(() => import("./components/Airopitch"));
const Airoctf = lazy(() => import("./components/Airocode"));
const Airocodebid = lazy(() => import("./components/Airocodebid"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);
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
  // Remove artificial preloader - it will only show when actually loading components
  useEffect(() => {
    // Initialize performance monitoring
    loadingManager.setLoading('app', false);
  }, []);

  return (
    <LoadingErrorBoundary>
      <Router>
        <ScrollToTop />
        <ScrollToHashElement />
        <div className="flex flex-col min-h-screen">
          <FloatingNav />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
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

                {/* Event-specific routes - using clean paths */}
                <Route path="/events" element={<div><Events /> <Footer /></div>} />
                <Route path="/events/glitch-multiverse" element={<Airocodebid />} />
                <Route path="/events/webverse-interface" element={<AiroHackathonPage />} />
                <Route path="/events/multiverse-pitch" element={<Airopitch />} />
                <Route path="/events/web-creativity" element={<Airopromo />} />
                <Route path="/events/spidey-bot" element={<AiroChatbot />} />
                <Route path="/events/ctf-dimensions" element={<Airoctf />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </LoadingErrorBoundary>
  );
}

export default App;