import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiencia from "./components/Experiencia";
import Contacto from "./components/Contacto";
import Plus from "./components/Plus";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiencia/>
    <Contacto/>
    <Plus/>
    <SocialLinks/>

    </div>
  );
}

export default App;
