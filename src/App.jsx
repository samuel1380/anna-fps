import './styles/globals.css'
import { useEffect, useRef } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import EditGallery from './components/EditGallery/EditGallery'
import StatsBar from './components/StatsBar/StatsBar'
import Services from './components/Services/Services'
import Partners from './components/Partners/Partners'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const expand = () => cursor.classList.add('expanded')
    const shrink = () => cursor.classList.remove('expanded')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    })

    reveals.forEach(el => observer.observe(el))

    return () => {
      document.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <div className="reveal"><EditGallery /></div>
        <div className="reveal"><StatsBar /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Partners /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </>
  )
}
