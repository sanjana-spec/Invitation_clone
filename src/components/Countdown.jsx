import countdownTopLeft from '../assets/countdown_flowerleft.svg'
import countdownBottomRigt from '../assets/countdown_flowerright.svg'
import { useEffect, useRef, useState } from 'react'

function Countdown() {
  const countdownRef = useRef(null)
  const [flowerProgress, setFlowerProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  useEffect(() => {
    const targetDate = new Date('2026-10-31T00:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate - now

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      )
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      )
      const seconds = Math.floor(
        (difference / 1000) % 60
      )

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      })
    }

    updateCountdown()

    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      const section = countdownRef.current

      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      

      const progress = Math.min(
        Math.max(
          (windowHeight - rect.top) / (windowHeight * 0.8),
          0
        ),
        1
      )

      setFlowerProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={countdownRef} className="countdown">
      <div
        className="countdown-top-left"
        style={{
          transform: `translate(${flowerProgress * 80}px, ${flowerProgress * 80}px) scale(${1 - flowerProgress * 0.25})`,
          opacity: 1 - flowerProgress
        }}
      >
        <img src={countdownTopLeft} alt="" />
      </div>
      <div
        className="countdown-bottom-right"
        style={{
          transform: `translate(-${flowerProgress * 80}px, -${flowerProgress * 80}px) scale(${1 - flowerProgress * 0.25})`,
          opacity: 1 - flowerProgress
        }}
      >
        <img src={countdownBottomRigt} alt="" />
      </div>
      <div className="countdown-nimbus-container">
        <div className="countdown-container">
          <p className="countdown-text"> Let the countdown begin</p>
          <div className="shared-countdown">
            <div className="countdown-timer">

              <div className="time-box">
                <span className="num">{timeLeft.days}</span>
                <small className="label">DAYS</small>
              </div>

              <div className="time-box">
                <span className="num">{timeLeft.hours}</span>
                <small className="label">HRS</small>
              </div>

              <div className="time-box">
                <span className="num">{timeLeft.minutes}</span>
                <small className="label">MINS</small>
              </div>

              <div className="time-box">
                <span className="num">{timeLeft.seconds}</span>
                <small className="label">SECS</small>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown