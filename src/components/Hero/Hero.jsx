import { useEffect, useRef } from 'react'
import { socials } from '../../data/socials'
import styles from './Hero.module.css'
import {
  IconInstagram,
  IconTikTok,
  IconYoutube,
  IconTwitch,
  IconDiscord,
} from '../Icons'

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
              {socials.youtube && (
                <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube" id="hero-youtube">
                  <IconYoutube />
                </a>
              )}
              {socials.twitch && (
                <a href={socials.twitch} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitch" id="hero-twitch">
                  <IconTwitch />
                </a>
              )}
              {socials.discord && (
                <a href={socials.discord} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Discord" id="hero-discord">
                  <IconDiscord />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
