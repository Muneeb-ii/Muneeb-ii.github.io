import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProgressBar } from './components/layout/ProgressBar';
import { PageTransition } from './components/layout/PageTransition';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { CustomCursor } from './components/shared/CustomCursor';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { Experience } from './pages/Experience';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { routes } from './utils/routing';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={routes.home} element={<PageTransition><Home /></PageTransition>} />
        <Route path={routes.projects} element={<PageTransition><Projects /></PageTransition>} />
        <Route
          path={`${routes.projects}/:id`}
          element={<PageTransition><ProjectDetailPage /></PageTransition>}
        />
        <Route path={routes.experience} element={<PageTransition><Experience /></PageTransition>} />
        <Route path={routes.about} element={<PageTransition><About /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen page-gradient">
          <LoadingScreen minDuration={1800} />
          <CustomCursor />
          <ProgressBar />
          <Header />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
