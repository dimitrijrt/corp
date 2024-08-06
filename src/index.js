import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Slide from './components/Slide/Slide'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from './components/Card/Card'
import style from './index.css'






ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Card/>
         <Slide/>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)