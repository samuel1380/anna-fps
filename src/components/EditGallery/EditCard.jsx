import styles from './EditCard.module.css'

export default function EditCard({ edit }) {
  const handleClick = () => {
    if (edit.videoUrl && !edit.videoUrl.startsWith('PLACEHOLDER')) {
      window.open(edit.videoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <article
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      id={`edit-card-${edit.id}`}
    >
      <div className={styles.thumbnail}>
        <img
          src={edit.thumbnail}
          alt={edit.title}
          className={styles.img}
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentElement.classList.add(styles.noImage)
          }}
        />
        <div className={styles.overlay} />
        <div className={styles.playWrap}>
          <span className={styles.play}>▶</span>
        </div>
        <span className={styles.category}>{edit.category}</span>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{edit.title}</p>
        <p className={styles.desc}>{edit.description}</p>
      </div>
    </article>
  )
}
