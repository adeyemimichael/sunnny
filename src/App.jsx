import react from 'react'
import './App.css'
import NavBar from './component/Navar'
import Hero from './component/HeroMain'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Sidebar2 from './component/Sidebar2'
import Carousel from './component/Carousel'
import ImageCarousel from './component/ImageCarousel'
import Footer from './component/Footer'
function App() {
  

  return (
    <div className='block'>
      <NavBar />
       <Hero />
       <Header />
       <Sidebar />
       <Sidebar2 />
       <Carousel />
       <ImageCarousel />
       <Footer />
    </div>
 
  )
}

export default App
