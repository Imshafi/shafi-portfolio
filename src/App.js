import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Certificate from "./components/certificate";
import Footer from "./components/footer";

function App() {
  const isMobile = window.navigator.userAgent.toLowerCase().includes("mobi");
  return (
    <div className="App">
      <Navbar isMobile={isMobile} />
      <About isMobile={isMobile} />
      <Skills isMobile={isMobile} />
      <Certificate isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
