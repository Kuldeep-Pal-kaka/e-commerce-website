import Navbar from './components/Navbar/Navbar';
import {Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop'
import Shopcategary from './pages/Shopcatogary'
import Product from './pages/Product'
import  Cart from './pages/Cart'
import Footer from './components/footer/Footer';
import Login from './pages/LoginSignup'
import men_banner from './components/Assets/Assets/banner_mens.png'
import women_banner from './components/Assets/Assets/banner_women.png'
import kids_banner from './components/Assets/Assets/banner_kids.png'


function App() {
  return (
  <div className="App">
 
  <Navbar />
 
      <Routes>
      <Route exact path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcategary banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<Shopcategary banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<Shopcategary banner={kids_banner} category="kids"/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>

  <Footer/>s
  
  </div>
  );
}

export default App;
