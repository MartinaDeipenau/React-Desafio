import NavBar from './components/NavBar';
//import Footer from './components/Footer';
import { Cart } from './pages/Cart';
import { HomePage } from './pages/HomePage';
import { Category } from './pages/Category';
import { ItemDetailContainer } from './pages/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:CategoryId' element={<Category />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App; 
