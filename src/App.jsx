import NavBar from './components/NavBar'
import './App.css'
import React from 'react'



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory'element={<ItemListContainer />} />
        <Route path='/detail'element={<ItemDetailContainer />} />
        <Route path='/vacio'element={<h1>Vacio</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App; 
