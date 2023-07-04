import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Join from "./components/Join";
import Reasons from "./components/Reasons";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Reasons />
      <Info />
      <Contact />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
