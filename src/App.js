import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Creative from './components/Creative';
import Tech from './components/Tech';
import About from './components/About';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import ContactThankYou from './components/ContactThankYou';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/tech/#uiux-projects" element={<Tech />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<ContactForm />} />
          <Route path="/thankyou" element={<ContactThankYou />} />
          <Route />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
