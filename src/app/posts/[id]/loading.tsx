import styles from '@/styles/detail.module.css'
import Header from '../../components/Header'

export default function Loading() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.skeleton} style={{ width: '100px', height: '20px' }}></div>
          <div className={styles.skeleton} style={{ width: '80%', height: '40px', marginTop: '20px' }}></div>
          <div className={styles.meta}>
            <div className={styles.skeleton} style={{ width: '100px', height: '16px' }}></div>
            <div className={styles.skeleton} style={{ width: '60px', height: '16px' }}></div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.skeleton} style={{ width: '100%', height: '200px' }}></div>
        </div>
      </div>
    </>
  )
}