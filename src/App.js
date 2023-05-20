import React from 'react'
import "../src/App.css"
import Navbar from './common/Navbar/Navbar'
import Home from "./components/Pages/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Destinations from './components/Destinations/Home'
import SinglePage from './SinglePage/SinglePage'
import Blog from './components/Blog/Blog'
import BlogSingle from './components/Blog/blog-single-page/BlogSingle'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import FormCuenta from './components/Login/FormCuenta'
import HomeHotel from "./components/Hotel/HomeHotel"



//Lugar de redireccionamientos para toda la pagina (o lugar de llamadera )

function App ()  {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/gallery" exact component={Gallery}></Route>
          <Route path="/destination" exact component={Destinations}></Route>
          <Route path="/singlepage/:id" component={SinglePage} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blogsingle/:id" exact component={BlogSingle} />
          <Route path="/testimonial" exact component={Testimonial} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/sign-in" exact component={Login} />
          <Route path="/register" exact component={FormCuenta} />
          <Route path="/hotel" exact component={HomeHotel} />
        </Switch>

      </Router>
    </>
  );
}

export default App
