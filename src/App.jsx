import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Service/>
      <Footer/>
    </>
  );
}

export default App;
