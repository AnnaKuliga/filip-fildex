import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Info from "./components/Info";
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
    </div>
  );
}

export default App;
