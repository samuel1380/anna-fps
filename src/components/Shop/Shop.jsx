import { useState, useCallback } from 'react'
import { shopProducts } from '../../data/shop'
import styles from './Shop.module.css'
import { IconExternalLink, IconCopy, IconCheck, IconTag } from '../Icons'

const categories = [
  { id: 'all', label: 'TODOS' },
  { id: 'mouse', label: 'MOUSES' },
  { id: 'teclado', label: 'TECLADOS' },
  { id: 'audio', label: 'ÁUDIO' },
  { id: 'setup', label: 'SETUP' }
]

export default function Shop() {
  const [activeTab, setActiveTab] = useState('all')
  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = useCallback((coupon, id) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(coupon).then(() => {
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
      }).catch(() => {
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
      })
    } else {
      const ta = document.createElement('textarea')
      ta.value = coupon
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }, [])

  const filteredProducts = shopProducts.filter(p =>
    activeTab === 'all' ? true : p.category === activeTab
  )

  const getCategoryTheme = (category) => {
    switch (category) {
      case 'mouse':
        return styles.themeMouse
      case 'teclado':
        return styles.themeTeclado
      case 'audio':
        return styles.themeAudio
      case 'setup':
        return styles.themeSetup
      default:
        return ''
    }
  }

  return (
    <section className={styles.section} id="lojinha">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>MINHA LOJINHA</h2>
          <p className={styles.sub}>
            Acessórios e periféricos recomendados por mim. Compre com os links abaixo e use os cupons para apoiar o canal!
          </p>
          <div className={styles.underline} />
        </div>

        <div className={styles.tabsContainer} role="tablist" aria-label="Categorias da loja">
          <div className={styles.tabs}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.tabBtn} ${activeTab === cat.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(cat.id)}
                role="tab"
                aria-selected={activeTab === cat.id}
                id={`shop-tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProducts.map(p => {
            const isCopied = copiedId === p.id
            const themeClass = getCategoryTheme(p.category)

            return (
              <div
                key={p.id}
                className={`${styles.card} ${themeClass}`}
                id={`shop-item-${p.id}`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.categoryBadge}>
                    {p.category.toUpperCase()}
                  </span>
                  {p.coupon && (
                    <button
                      className={`${styles.couponBadge} ${isCopied ? styles.couponCopied : ''}`}
                      onClick={() => handleCopy(p.coupon, p.id)}
                      type="button"
                      aria-label={`Copiar cupom ${p.coupon}`}
                      id={`shop-coupon-${p.id}`}
                    >
                      <IconTag className={styles.iconTag} />
                      <span>{isCopied ? 'COPIADO!' : p.coupon}</span>
                      {isCopied ? <IconCheck className={styles.iconCheck} /> : <IconCopy className={styles.iconCopy} />}
                    </button>
                  )}
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.productName}>{p.name}</h3>
                  <p className={styles.productDesc}>{p.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buyBtn}
                    id={`shop-buy-${p.id}`}
                  >
                    COMPRAR AGORA
                    <IconExternalLink />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
