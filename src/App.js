import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Store from './Pages/Store';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Terms from './Pages/Terms';
import FAQ from './Pages/FAQ';
import Testimonials from './Pages/Testimonals';
import CourseBooking from './Data/CourseBooking';
import ServiceCard from './Pages/ServiceCard';
import HealingCard from './Pages/HealingCard';


function App() {
  return (
    <div className="min-h-screen flex flex-col ">
    <Router>
      <Header />
      <Routes>
        {/* Define Routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courseBooking/:courseTitle" element={<CourseBooking/>} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/healingCard" element={<HealingCard />} />
        <Route path="/services" element={<ServiceCard/>} />
      </Routes>
      <Footer /> 
    </Router>
    </div>
  );
}

export default App;
