import React from 'react'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
<main>
  <NavBar/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
</main>
  )
}

export default App;