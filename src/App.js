import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/FooTer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services />
      <Experience />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
