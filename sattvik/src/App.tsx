import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import Sustainability from './components/Sustainability';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingNavbar from './components/FloatingNavbar';
import BananaLeafLoader from './components/BananaLeafLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-body">
      {isLoading && <BananaLeafLoader onComplete={handleLoadingComplete} />}
      
      <FloatingNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
