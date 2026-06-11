import { useEffect, useRef } from 'react'
import { socials } from '../../data/socials'
import styles from './Hero.module.css'

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/>
  </svg>
)

const IconYoutube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
)

const IconTwitch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
  </svg>
)

const IconDiscord = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

export default function Hero() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)
  const subtextRef = useRef(null)
  const ctasRef = useRef(null)
  const tagRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const els = [tagRef, line1Ref, line2Ref, line3Ref, subtextRef, ctasRef]
    els.forEach((ref, i) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(30px)'
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 150 + i * 120)
    })
    if (rightRef.current) {
      rightRef.current.style.opacity = '0'
      setTimeout(() => {
        if (!rightRef.current) return
        rightRef.current.style.transition = 'opacity 0.8s ease'
        rightRef.current.style.opacity = '1'
      }, 400)
    }
  }, [])

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div ref={tagRef} className={styles.tag}>
            <span className={styles.dot} />
            DISPONÍVEL PARA PROJETOS
          </div>

          <h1 className={styles.headline}>
            <span ref={line1Ref} className={styles.hline}>EDIÇÕES QUE</span>
            <span ref={line2Ref} className={styles.hline}>ELEVAM SEU</span>
            <span ref={line3Ref} className={`${styles.hline} ${styles.pink}`}>GAMEPLAY.</span>
          </h1>

          <p ref={subtextRef} className={styles.subtext}>
            Edits impactantes, feitas para streamers e jogadores que querem se destacar.
          </p>

          <div ref={ctasRef} className={styles.ctas}>
            <a href="#edicoes" className={styles.ctaPrimary} id="hero-ver-edicoes">
              Ver Edições
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#contato" className={styles.ctaOutline} id="hero-fale-comigo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Fale Comigo
            </a>
          </div>
        </div>

        <div ref={rightRef} className={styles.right}>
          <div className={styles.bgImage}>
            <div className={styles.overlayLeft} />
            <div className={styles.overlayBottom} />
            <div className={styles.purpleGlow} />
          </div>

          <div className={styles.avatarBlock}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarGlow} />
              <img
                src="/images/avatar.png"
                alt="Anah FPS"
                className={styles.avatar}
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('no-avatar')
                }}
              />
            </div>
            <p className={styles.avatarName}>ANAH.FPS</p>
            <p className={styles.avatarRole}>EDITORA | STREAMER | CRIADORA DE CONTEÚDO</p>
            <div className={styles.socials}>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram" id="hero-instagram">
                <IconInstagram />
              </a>
              <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok" id="hero-tiktok">
                <IconTikTok />
              </a>
              <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube" id="hero-youtube">
                <IconYoutube />
              </a>
              <a href={socials.twitch} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitch" id="hero-twitch">
                <IconTwitch />
              </a>
              <a href={socials.discord} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Discord" id="hero-discord">
                <IconDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
