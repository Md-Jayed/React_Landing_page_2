import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/expericenc/Experience";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
