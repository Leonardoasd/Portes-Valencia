import './App.css';
import NavBar from './Components/NavBar.js';
import Inicio from './Screens/Inicio.js';
import Footer from './Components/footer.js';
import Presupuesto from './Screens/Presupuesto.js';
import { Route, Routes } from 'react-router-dom';
import QuienesSomos from './Screens/QuienesSomos.js';
import NavButton from './Components/navButton.js';
import Contacto from './Screens/Contacto.js';
import ScrollToTop from './Components/ScrollToTop.js';
import Opiniones from './Screens/Opiniones.js';
function App() {
  return (
    <div className="App">
      <NavBar />
      <NavButton />
      <ScrollToTop />
      <Routes scrollToTop={true} >
        <Route path='/Portes-Valencia' element={<Inicio />} />
        <Route path='/Quienes-somos' element={<QuienesSomos />} />
        <Route path='/Presupuesto' element={<Presupuesto />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Opiniones" element={<Opiniones />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
