import { useState } from 'react'
import { partners } from '../../data/partners'
import styles from './Partners.module.css'

export default function Partners() {
  // Duplicate the list of partners to create a seamless infinite loop
  const list = [...partners, ...partners]

  // Rastreia logos que falharam no carregamento (ex: 404) para usar a letra inicial de fallback
  const [failedLogos, setFailedLogos] = useState({})

  const handleImageError = (partnerId, index) => {
    setFailedLogos(prev => ({
      ...prev,
      [`${partnerId}-${index}`]: true
    }))
  }

  return (
    <section className={styles.section} id="parcerias">
      <div className={styles.inner}>
        <h2 className={styles.title}>PARCEIROS</h2>
        <p className={styles.sub}>Marcas que confiam na Anah FPS para levar seu produto ao público gamer.</p>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {list.map((p, i) => {
            const key = `${p.id}-${i}`
            const showFallback = !p.logo || failedLogos[key]

            return (
              <div
                key={key}
                className={styles.partnerCard}
                id={`partner-${p.id}-${i}`}
              >
                <div className={styles.cardHeader}>
                  {showFallback ? (
                    <span className={styles.logoIcon}>{p.name.charAt(0)}</span>
                  ) : (
                    <div className={styles.logoContainer}>
                      <img
                        src={p.logo}
                        alt={p.name}
                        className={styles.logoImg}
                        onError={() => handleImageError(p.id, i)}
                      />
                    </div>
                  )}
                  <span className={styles.name}>{p.name}</span>
                </div>
                {p.coupon ? (
                  <div className={styles.couponTag}>
                    <span className={styles.couponLabel}>CUPOM</span>
                    <span className={styles.couponCode}>{p.coupon}</span>
                  </div>
                ) : (
                  <div className={styles.officialTag}>Parceiro Oficial</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
