import { useEffect, useState } from "react"
import Expedition from "./Expedition/Expedition"
import About from "./components/About/About"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery/Gallery"
import Team from "./components/Team/Team"
import {AiOutlineArrowUp} from 'react-icons/ai'

const App = () => {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const scrollAnimation = () => {
      return window.scrollY > 50 ? setShowArrow(true) : setShowArrow(false)

    }

    window.addEventListener('scroll', scrollAnimation)

    return () => {
      window.addEventListener('scroll', scrollAnimation)
    }
  }, [])

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Banner />
      <About />
      <Expedition />
      <Team />
      <Gallery />

      <div className={`fixed right-10 bottom-20 transition-all duration-500 ${showArrow ? 'translate-x-0' : 'translate-x-20'}`}>
        <button onClick={handleScroll} className="bg-blue-950 text-white text-xl cursor-pointer hover:bg-blue-800 p-2"><AiOutlineArrowUp /></button>
      </div>
    </>
  )
}

export default App