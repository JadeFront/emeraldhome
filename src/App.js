import './App.css';
import About from './Components/About';
import Campsite from './Components/Campsite';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menubar from './Components/Menubar';
import Property from './Components/Property';
import Resort from './Components/Resort';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Home/>
      <About/>
      <Property/>
      <Resort/>
      <Campsite/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
