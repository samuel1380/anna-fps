import { useState, useEffect } from 'react'
import { socials } from '../../data/socials'
import styles from './Nav.module.css'

const links = [
  { label: 'INÍCIO',     href: '#inicio' },
  { label: 'SOBRE',      href: '#sobre' },
  { label: 'EDIÇÕES',    href: '#edicoes' },
  { label: 'PARCERIAS',  href: '#parcerias' },
  { label: 'CONTATO',    href: '#contato' },
]

const IconCart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const whatsappLink = `https://wa.me/55${socials.whatsapp}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20comprar%20uma%20edit.`

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#inicio" className={styles.logo} onClick={() => setActive('#inicio')}>
        anah.fps <span className={styles.star}>✦</span>
      </a>

      <nav className={styles.links} aria-label="Menu principal">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`${styles.link} ${active === l.href ? styles.activeLink : ''}`}
            onClick={() => setActive(l.href)}
          >
            {l.label}
            {active === l.href && <span className={styles.activeDot} />}
          </a>
        ))}
      </nav>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
        id="nav-buy-btn"
      >
        COMPRAR EDIT
        <IconCart />
      </a>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir menu"
        aria-expanded={open}
        id="hamburger-btn"
      >
        <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
      </button>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerLinks}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.drawerLink} ${active === l.href ? styles.activeLink : ''}`}
              onClick={() => { setActive(l.href); setOpen(false) }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            COMPRAR EDIT
            <IconCart />
          </a>
        </nav>
      </div>
    </header>
  )
}
