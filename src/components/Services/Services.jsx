import { useState } from 'react'
import { socials } from '../../data/socials'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    name: 'EDIT PERSONALIZADA',
    desc: 'Motion, efeitos visuais e sync de áudio para gameplay. Cada frame construído para impactar.',
  },
  {
    num: '02',
    name: 'EDIT REELS / TIKTOK',
    desc: 'Vertical, otimizado para algoritmo, sync no beat. Conteúdo que prende do primeiro segundo.',
  },
  {
    num: '03',
    name: 'PACOTE CRIADOR',
    desc: 'Múltiplas edições com identidade visual consistente. Sua marca, elevada a um novo nível.',
  },
  {
    num: '04',
    name: 'EDIT PARA MARCAS',
    desc: 'Unboxing, reviews e divulgação de produto gamer. Conteúdo que converte e engaja.',
  },
]

export default function Services() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i)

  return (
    <section className={styles.section} id="unboxing">
      <div className={styles.inner}>
        <h2 className={styles.title}>SERVIÇOS</h2>
        <div className={styles.list}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`${styles.row} ${openIdx === i ? styles.open : ''}`}
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && toggle(i)}
              id={`service-${s.num}`}
            >
              <div className={styles.rowTop}>
                <span className={styles.num}>{s.num}</span>
                <div className={styles.divLine} />
                <span className={styles.name}>{s.name}</span>
                <span className={styles.arrow}>
                  {openIdx === i ? '−' : '+'}
                </span>
              </div>
              <div className={styles.body}>
                <p className={styles.desc}>{s.desc}</p>
                <a
                  href={`mailto:${socials.email}`}
                  className={styles.bodyBtn}
                  onClick={e => e.stopPropagation()}
                  id={`service-cta-${s.num}`}
                >
                  SOLICITAR →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
