import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import VAccount from './components/VAccounts/VAccounts'

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dd" element={<VAccount />} />


      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
