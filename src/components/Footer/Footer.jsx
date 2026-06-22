import { socials } from '../../data/socials'
import styles from './Footer.module.css'
import { IconInstagram, IconTikTok, IconYoutube, IconTwitch } from '../Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="#inicio" className={styles.logo}>
            anah.fps <span>✦</span>
          </a>
          <p className={styles.copy}>© {year} Anah FPS. Todos os direitos reservados.</p>
        </div>

        <div className={styles.socials}>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Instagram" id="footer-instagram">
            <IconInstagram />
          </a>
          <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="TikTok" id="footer-tiktok">
            <IconTikTok />
          </a>
          {socials.youtube && (
            <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="YouTube" id="footer-youtube">
              <IconYoutube />
            </a>
          )}
          {socials.twitch && (
            <a href={socials.twitch} target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Twitch" id="footer-twitch">
              <IconTwitch />
            </a>
          )}
        </div>

        <p className={styles.tagline}>Edits · Unboxing · Setup</p>
      </div>
    </footer>
  )
}
