import { useEffect, useState, useRef } from 'react'
import styles from './StatsBar.module.css'
import { IconYoutube, IconUsers, IconZap, IconMail } from '../Icons'

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
    const duration = 2000

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = progress * (2 - progress)

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
