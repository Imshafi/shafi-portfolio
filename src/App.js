import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Certificate from "./components/certificate";
import Footer from "./components/footer";
import Projects from "./components/projects";

function App() {
  const isMobile = window.navigator.userAgent.toLowerCase().includes("mobi");
  return (
    <div className="App">
      <Navbar isMobile={isMobile} />
      <About isMobile={isMobile} />
      <Skills isMobile={isMobile} />
      <Certificate isMobile={isMobile} />
      <Projects isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
