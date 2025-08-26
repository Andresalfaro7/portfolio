import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CursorCustom from './components/CursorCustom';
import './App.css';
import './styles/MenuMobile.css';
import { ROUTES } from './routes/index';
import MenuMobile from './components/MenuMobile';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Stack = lazy(() => import('./pages/Stack'));
const Contact = lazy(() => import('./pages/Contact'));

// Wrapper que aplica animación slide + fade
type PageWrapperProps = {
  children: React.ReactNode;
  left?: boolean; // horizontal: true=left, false=right
  top?: boolean;  // vertical: true=up, false=down
};

const PageWrapper = ({ children, left, top }: PageWrapperProps) => {
  const variants = top !== undefined
    ? { // vertical animation
      enter: { y: top ? "-100%" : "100%", opacity: 0 },
      center: { y: 0, opacity: 1 },
      exit: { y: top ? "-100%" : "100%", opacity: 0 }
    }
    : { // horizontal animation
      enter: { x: left ? "-100%" : "100%", opacity: 0 },
      center: { x: 0, opacity: 1 },
      exit: { x: left ? "-100%" : "100%", opacity: 0 }
    };

  return (
    <motion.div
      className="min-h-screen w-screen"
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Componente que maneja las rutas animadas
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Cargando...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<PageWrapper top={true}><Home /></PageWrapper>} />          {/* from top */}
          <Route path={ROUTES.PROJECTS} element={<PageWrapper left={false}><Projects /></PageWrapper>} />     {/* from right */}
          <Route path={ROUTES.STACK} element={<PageWrapper left={true}><Stack /></PageWrapper>} />       {/* from left */}
          <Route path={ROUTES.CONTACT} element={<PageWrapper top={false}><Contact /></PageWrapper>} /> {/* from bottom */}
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

// App principal
export default function App() {
  return (
    <div className="overflow-hidden">
      <CursorCustom />
      <AnimatedRoutes />
      <div className="fixed bottom-9 left-4 md:hidden">
        <MenuMobile />
      </div>
    </div>
  );
}
