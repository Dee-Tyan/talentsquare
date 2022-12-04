import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<dashboard />} />


      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
