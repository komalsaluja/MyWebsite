import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import Contact1 from './components/contact/Contact1';
import Achieve from './components/achieve/Achieve';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import Navbar1 from './components/navbar/Navbar1';
import Footer from './components/Footer';
// import CourseScreen from './components/courses/CourseScreen';
import SingleProduct from './components/courses/SingleProduct';
import Error from './components/Error';
import ScrollToTop from "./components/courses/ScrollToTop"
import CourseBunch from './components/courses/CourseBunch';
import Studio from './components/studio/Studio';
import Director from './components/director/Director';
// import {Link} from 'react-scroll'



function App() {
  
  return (
    <>
    <Navbar1/>
    {/* <Navbar/> */}
    <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/courses" element={<CourseBunch/>} />
        <Route path="/courses/:name" element={<SingleProduct/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/contact" element={<Contact1/>} /> */}
        <Route path="/achieve" element={<Achieve/>} />
        <Route path="/studio" element={<Studio/>} />
        <Route path="/director" element={<Director/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
