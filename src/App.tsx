import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ROUTES } from './routes/index'
import CursorCustom from './components/CursorCustom';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <CursorCustom/>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
