import React, { useEffect, useRef } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import EditGallery from './components/EditGallery/EditGallery'
import StatsBar from './components/StatsBar/StatsBar'
import Services from './components/Services/Services'
import Shop from './components/Shop/Shop'
import Partners from './components/Partners/Partners'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/globals.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050505',
          color: '#F5F5F5',
          fontFamily: 'Outfit, sans-serif',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', marginBottom: '1rem' }}>Algo deu errado</h1>
          <p style={{ color: '#888888', marginBottom: '2rem' }}>Tente recarregar a página.</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              background: '#FF2D78',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
            }}
          >
            Tentar novamente
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

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

    const interactive = document.querySelectorAll('a, button, [role="button"]')
    interactive.forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    document.addEventListener('mousemove', move)

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
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', shrink)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <ErrorBoundary>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <div className="reveal"><EditGallery /></div>
        <div className="reveal"><StatsBar /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Shop /></div>
        <div className="reveal"><Partners /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
