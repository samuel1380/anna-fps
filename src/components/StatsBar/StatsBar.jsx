import { useEffect, useState, useRef } from 'react'
import styles from './StatsBar.module.css'

const IconYoutube = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
)

const IconUsers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconZap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const IconMail = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

function CountUp({ value }) {
  const [current, setCurrent] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  const hasNumber = /\d/.test(value)

  useEffect(() => {
    if (!hasNumber) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasNumber])

  useEffect(() => {
    if (!hasAnimated || !hasNumber) return

    const match = value.match(/^([^\d]*)([0-9.]+)([^\d]*)$/)
    if (!match) return

    const targetNum = parseFloat(match[2])
    let startTime = null
    const duration = 2000 // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = progress * (2 - progress) // easeOutQuad
      
      setCurrent(easeProgress * targetNum)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasAnimated, hasNumber, value])

  if (!hasNumber) {
    return <span>{value}</span>
  }

  const match = value.match(/^([^\d]*)([0-9.]+)([^\d]*)$/)
  if (!match) return <span>{value}</span>

  const prefix = match[1]
  const suffix = match[3]
  const isDecimal = match[2].includes('.')
  const formattedValue = isDecimal ? current.toFixed(1) : Math.floor(current)

  return (
    <span ref={ref}>
      {prefix}{formattedValue}{suffix}
    </span>
  )
}

const stats = [
  { Icon: IconYoutube, value: '+108K',           label: 'INSCRITOS' },
  { Icon: IconUsers,   value: '4.3M',            label: 'CURTIDAS' },
  { Icon: IconZap,     value: '+150',            label: 'PARCERIAS' },
  { Icon: IconMail,    value: 'anahfpss@gmail.com', label: 'CONTATO COMERCIAL' },
]

export default function StatsBar() {
  return (
    <div className={styles.bar} id="sobre">
      {stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.icon}><s.Icon /></div>
          <p className={styles.value}><CountUp value={s.value} /></p>
          <p className={styles.label}>{s.label}</p>
          {i < stats.length - 1 && <div className={styles.divider} />}
        </div>
      ))}
    </div>
  )
}
