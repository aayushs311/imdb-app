import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import FavList from '../pages/favList/FavList'
import WatchList from '../pages/watchList/WatchList'
import NotFound from '../pages/notFound/NotFound'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/favList' element={<FavList />}></Route>
            <Route path='/watchList' element={<WatchList />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </>
  )
}

export default Routing