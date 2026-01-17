import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProgressBar } from './components/layout/ProgressBar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { Experience } from './pages/Experience';
import { Research } from './pages/Research';
import { About } from './pages/About';
import { Quant } from './pages/Quant';
import { Contact } from './pages/Contact';
import { Skills } from './pages/Skills';
import { Achievements } from './pages/Achievements';
import { NotFound } from './pages/NotFound';
import { routes } from './utils/routing';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
          <ProgressBar />
          <Header />
          <main>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.projects} element={<Projects />} />
              <Route
                path={`${routes.projects}/:id`}
                element={<ProjectDetailPage />}
              />
              <Route path={routes.experience} element={<Experience />} />
              <Route path={routes.research} element={<Research />} />
              <Route path={routes.about} element={<About />} />
              <Route path={routes.quant} element={<Quant />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.skills} element={<Skills />} />
              <Route path={routes.achievements} element={<Achievements />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
