import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Creative from './components/Creative';
import Tech from './components/Tech';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
