import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/navbar/NavBar";
import { ThemeProvider } from "../public/js/ThemeContext";
import Carousel from "./components/carousel/Carousel";
import { Footer } from "./components/footer/Footer";
import About from './components/about/about'
import Services from './components/about/services/services'
import Work_head from "./components/work/work_head/work_head"
import Work_content from "./components/work/work_content/work_content"
import Showcase from './components/Showcase/ShowCase'
import Residential from './components/work/residential/residential'
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Register from './components/Register/Register'
import Contact from "./components/contact/Contact";
import CHouse from './components/work/CHouse/CHouse'
import CInfra from "./components/work/CInfrastructure/CInfra";
import Hospitals from "./components/work/Hospitals/Hospitals";
import LandDev from "./components/work/LandDev/LandDev";
import FlyInfra from "./components/work/Flyovers/Flyovers";
import Projects from "./components/projects/projects"
import Villa1 from "./components/projects/Project-details/Villa1/Villa1";
import Villa2 from "./components/projects/Project-details/Villa2/Villa2";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import Institutes from "./components/work/Institutes/Institute";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
  }, [pathname]);
};


const App = () => {

  const [isSun, setIsSun] = useState(false);

  const toggleTheme = () => {
    setIsSun((prevState) => !prevState);
  };
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <NavBar isSun={isSun} toggleTheme={toggleTheme}/>
        <Routes>
          {/* Home page */}
          <Route exact path="/" element={<Home isSun={isSun} />}/>
          {/* About us page */}
          <Route exact path="/about-us" element={<About_us isSun={isSun} />} />
          {/* Work base page */}
          <Route exact path="/work" element={<Works isSun={isSun} />}/>
          {/* Work subpages */}
          <Route exact path="/work/residential-houses" element={<Resid isSun={isSun} />} />
          <Route exact path="/work/commercial-houses" element={<CHouse_Page isSun={isSun} />} />
          <Route exact path="/work/commercial-infrastructure" element={<CInfra_Page isSun={isSun} />} />
          <Route exact path="/work/hospital" element={<Hospital_page isSun={isSun} />} />
          <Route exact path="/work/land-development" element={<LandDev_Page isSun={isSun} />} />
          <Route exact path="/work/flyover-infrastructure" element={<FlyInfra_Page isSun={isSun} />} />
          <Route exact path="/work/institutes" element={<Education_Page isSun={isSun} />} />
          <Route exact path="/projects" element={<Projects_page isSun={isSun} />} />
          <Route exact path="/projects/villa-1" element={<Villa1 isSun={isSun} />} />
          <Route exact path="/projects/villa-2" element={<Villa2 isSun={isSun} />} />
          {/* Profile, Login and Signup pages */}
          <Route exact path="/profile" element={<Profile_page isSun={isSun}/>} />
          <Route exact path="/login" element={<Login_page isSun={isSun} />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/sign-up" element={<Register_page isSun={isSun} />} />
          {/* Contact us page */}
          <Route exact path="/contact-us" element={<Contact_us isSun={isSun} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

const Home = ({ isSun }) => {
    useScrollToTop();
    return (
    <div>
      <Carousel isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const About_us = ({ isSun }) => {
    useScrollToTop();
    return (
    <div>
      <About isSun={isSun} />
      <Services isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Works = ({ isSun }) => {
    useScrollToTop();
    return (
    <div>
      <Work_head />
      <Work_content isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Resid = ({ isSun }) => {
    useScrollToTop();
  return (
    <div>
      <Residential isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Hospital_page = ({ isSun }) => {
    useScrollToTop();
  return (
    <div>
      <Hospitals isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const LandDev_Page = ({ isSun }) => {
    useScrollToTop();
  return (
    <div>
      <LandDev isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Education_Page = ({ isSun }) => {
    useScrollToTop();
  return (
    <div>
      <Institutes isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const FlyInfra_Page = ({ isSun }) => {
    useScrollToTop();
  return (
    <div>
      <CInfra isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Projects_page = ({ isSun }) => {
  useScrollToTop();
return (
  <div>
    <Projects isSun={isSun} />
    <Showcase />
    <Footer />
  </div>
)
}

const CHouse_Page = ({ isSun }) => {
    useScrollToTop();
  return (
    <div>
      <CHouse isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const CInfra_Page = ({ isSun }) => {
    useScrollToTop();
  return (
    <div>
      <CInfra isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Login_page = ({ isSun }) => {
  return (
    <div>
      <Login isSun={isSun} />
    </div>
  )
}

const Profile_page = ({ isSun }) => {
  return (
    <div>
      <Profile isSun={isSun} />
      <Footer />
    </div>
  )
}

const Register_page = ({ isSun }) => {
  return (
    <div>
      <Register isSun={isSun} />
    </div>
  )
}

const Contact_us = ({ isSun }) => {
    useScrollToTop();
    return (
    <div>
      <Contact isSun={isSun} />
      <Footer />
    </div>
  )
}
export default App
