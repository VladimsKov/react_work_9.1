import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import HomePage from './components/menu-pages/HomePage';
import DriftPage from './components/menu-pages/DriftPage';
import ForzaPage from './components/menu-pages/ForzaPage';
import TimeAttackPage from './components/menu-pages/TimeAttackPage';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/forza" element={<ForzaPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
      </Routes>
    </Router>

  );
}

export default App;
