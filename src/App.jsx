// App.js
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome handleLogin={handleLogin} />} />
        <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path='/thank-you' element={isLoggedIn ? <ThankYou /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
