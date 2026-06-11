import { useState } from 'react'
import { shopProducts } from '../../data/shop'
import styles from './Shop.module.css'

const categories = [
  { id: 'all', label: 'TODOS' },
  { id: 'mouse', label: 'MOUSES' },
  { id: 'teclado', label: 'TECLADOS' },
  { id: 'audio', label: 'ÁUDIO' },
  { id: 'setup', label: 'SETUP' }
]

// Ícones SVG para os botões e categorias
const IconExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const IconTag = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
)

export default function Shop() {
  const [activeTab, setActiveTab] = useState('all')
  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = (coupon, id) => {
    navigator.clipboard.writeText(coupon)
    setCopiedId(id)
    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }

  const filteredProducts = shopProducts.filter(p => 
    activeTab === 'all' ? true : p.category === activeTab
  )

  // Mapeamento de cor / gradiente por categoria para dar um look super customizado e vivo!
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

        {/* Categorias Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.tabBtn} ${activeTab === cat.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(cat.id)}
                id={`shop-tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
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
                    <div
                      className={`${styles.couponBadge} ${isCopied ? styles.couponCopied : ''}`}
                      onClick={() => handleCopy(p.coupon, p.id)}
                      title="Clique para copiar o cupom"
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => e.key === 'Enter' && handleCopy(p.coupon, p.id)}
                    >
                      <IconTag />
                      <span>{isCopied ? 'COPIADO!' : p.coupon}</span>
                      {isCopied ? <IconCheck /> : <IconCopy />}
                    </div>
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
