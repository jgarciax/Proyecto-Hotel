import React from 'react'
import "../src/App.css"
import Navbar from './common/Navbar/Navbar'
import Home from "./components/Pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Destinations from './components/Destinations/Home'
import SinglePage from './SinglePage/SinglePage'
import Blog from './components/Blog/Blog'
import BlogSingle from './components/Blog/blog-single-page/BlogSingle'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import FormCuenta from './components/Login/FormCuenta'
import EventAdd from './components/EventoHotel/EventAdd '
import ListUser from './components/User/component/ListUser'
import HotelComponent from './components/Hotel/components/HotelComponent'
import EventHome from './components/Event/EventHome'




//Lugar de redireccionamientos para toda la pagina (o lugar de llamadera )

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<HotelComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle/:id" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<FormCuenta />} />
          <Route path="/evento" element={<EventHome />} />
          <Route path="/addEvent" element={<EventAdd />} />
          <Route path="/usuarios" element={<ListUser />} />
        </Routes>
      </Router>
    </>
  );
}



export default App
