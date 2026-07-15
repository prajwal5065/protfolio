import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import ErrorPage from './components/ErrorPage';
import { ToastContainer, Zoom } from 'react-toastify';
import useTheme from "./hooks/useTheme";
import { AnimatePresence, motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Lazy loading components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Skill = lazy(() => import('./components/Skill'));

function App() {
  const path = useLocation();

  const knownPaths = ["/", "/about", "/skills", "/projects", "/contact"];

  const hideLayout = !knownPaths.includes(location.pathname);

  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {!hideLayout && <Navbar theme={theme} toggleTheme={toggleTheme}/>}
          <main>
          <AnimatePresence mode="wait">
            <Routes location={path} key={path.pathname}>
              <Route path="/" element={<PageWrapper><Home theme={theme}/></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/skills" element={<PageWrapper><Skill /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><ErrorPage /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        {!hideLayout && <Footer />}
      </Suspense>
      <ScrollToTop />
      
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div >
  );
}

export default App;