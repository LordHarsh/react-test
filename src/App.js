import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';

function App() {
  return (
    <div className="bg-slate-600 h-svh">
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test name='Sir' />} />
        </Routes>
      </div>  
    </Router>
    </div>
  );
}

export default App;
