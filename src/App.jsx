import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import AboutCouple from './components/AboutCouple'
import WishesSection from './components/WishesSection'
import SendWishes from './components/SendWishes'
import MusicSection from './components/MusicSection'
import Schedule from './components/Schedule'
import Footer from './components/Footer'
import Location from './components/Location'
function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show')
          }

        })

      },
      {
        threshold: 0.5
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }

  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <MusicSection />
      <div className="scroll-reveal">
        <Countdown />
      </div>

      <div className="scroll-reveal">
        <AboutCouple />
      </div>

      <div className="scroll-reveal">
        <WishesSection />
      </div>

      <div className="scroll-reveal">
        <SendWishes />
      </div>

      <div className="scroll-reveal">
        <Schedule />
      </div>
      <Location />
      <Footer />
    </>
  )
}

export default App
