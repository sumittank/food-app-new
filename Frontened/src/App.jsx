import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import TopCity from './Components/TopCity'
import TopItems from './Components/TopItems'
import FavouriteItem from './Components/FavouriteItem'
import Register from './Components/Register'
import Login from './Components/Login'
import FavouriteProvider from './Components/FavouriteProvider'
import Logout from './Components/Logout'
import MyOrders from './Components/MyOrders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FavouriteProvider>
      <BrowserRouter>
      <Content />
    </BrowserRouter>
    </FavouriteProvider>
  )
}

function Content() {
  const location = useLocation()

  return (
    <>
      {/* Conditionally render Navbar based on the route */}
      {location.pathname !== '/register' && location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topcity' element={<TopCity />} />
        <Route path='/topitems' element={<TopItems />} />
        <Route path='/favitem' element={<FavouriteItem />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
    </>
  )
}

export default App
