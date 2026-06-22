import { edits } from '../../data/edits'
import EditCard from './EditCard'
import styles from './EditGallery.module.css'

export default function EditGallery() {
  return (
    <section className={styles.section} id="edicoes">
      <div className={styles.header}>
        <h2 className={styles.title}>EDIÇÕES EM DESTAQUE</h2>
        <div className={styles.underline} />
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {edits.map(edit => (
            <EditCard key={edit.id} edit={edit} />
          ))}
        </div>
      </div>

      <div className={styles.viewAll}>
        <button
          className={styles.viewAllBtn}
          id="gallery-ver-todas"
        >
          VER TODAS AS EDIÇÕES ⊞
        </button>
      </div>
    </section>
  )
}
