import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './components/table.jsx'
import SummarizePage from './pages/summarizePage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/summarize" element={<SummarizePage />} />
      </Routes>
    </Router>
  )
}

export default App
