
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Singleproduct from "./pages/Singleproduct"

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/:category/:id' element={<Singleproduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />
      </Routes>



    </div>
  );
}

export default App;
