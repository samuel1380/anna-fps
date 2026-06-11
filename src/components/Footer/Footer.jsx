import { socials } from '../../data/socials'
import styles from './Footer.module.css'

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const IconTikTok = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/>
  </svg>
)

const IconYoutube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
)

const IconTwitch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="#inicio" className={styles.logo}>
            anah.fps <span>✦</span>
          </a>
          <p className={styles.copy}>© 2025 Anah FPS. Todos os direitos reservados.</p>
        </div>

        <div className={styles.socials}>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Instagram" id="footer-instagram">
            <IconInstagram />
          </a>
          <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="TikTok" id="footer-tiktok">
            <IconTikTok />
          </a>
          <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="YouTube" id="footer-youtube">
            <IconYoutube />
          </a>
          <a href={socials.twitch} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Twitch" id="footer-twitch">
            <IconTwitch />
          </a>
        </div>

        <p className={styles.tagline}>Edits · Unboxing · Setup</p>
      </div>
    </footer>
  )
}
