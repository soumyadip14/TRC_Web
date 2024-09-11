import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Commitee from './components/Commitee';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/commitee' element={<Commitee />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>  
  )
}

export default App
