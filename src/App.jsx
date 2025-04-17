import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}