import { useRef } from 'react'
import { socials } from '../../data/socials'
import styles from './Contact.module.css'

export default function Contact() {
  const emailRef = useRef(null)

  const handleEmailHover = () => emailRef.current?.classList.add(styles.glitch)
  const handleEmailLeave = () => emailRef.current?.classList.remove(styles.glitch)

  return (
    <section className={styles.section} id="contato">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>FALE COMIGO</p>

        <a
          ref={emailRef}
          href={`mailto:${socials.email}`}
          className={styles.email}
          onMouseEnter={handleEmailHover}
          onMouseLeave={handleEmailLeave}
          id="contact-email"
        >
          <span>anahfpss</span>
          <span>@gmail.com</span>
        </a>

        <p className={styles.sub}>Para parcerias, edições e oportunidades</p>

        <div className={styles.links}>
          <a
            href={socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            id="contact-discord"
          >
            <span className={styles.arrow}>→</span>
            Discord — Comprar Edit
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            id="contact-instagram"
          >
            <span className={styles.arrow}>→</span>
            Instagram
          </a>
          <a
            href={socials.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            id="contact-linktree"
          >
            <span className={styles.arrow}>→</span>
            Linktree
          </a>
        </div>
      </div>
    </section>
  )
}
