import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ROUTES } from './routes/index'
import CursorCustom from './components/CursorCustom';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));

function App() {
  return (
    <Router>
      <CursorCustom/>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
