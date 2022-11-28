import About from "./components/About/About";
import Advantage from "./components/Adventage/Advantage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import './scss/style.scss'


function App() {
  return (
    <>
    <Header/>
    <About/>
    <Portfolio/>
    <Services/>
    <Advantage/>
    <Footer/>
    </>
  );
}

export default App;
