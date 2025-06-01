import styles from "@/styles/page.module.css"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import PostCard from "./components/PostCard"

export default function Page() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.container}>
        {/* メインヘッダー */}
        <div className={styles.mainHeader}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>🏠</div>
            <h1 className={styles.title}>Takapon</h1>
          </div>
          <p className={styles.subtitle}>エンジニア向けの記事を発信しています！</p>
        </div>

        {/* メインコンテンツエリア */}
        <div className={styles.contentWrapper}>
          {/* 左側：記事一覧 */}
          <main className={styles.mainContent}>
            <PostCard />
          </main>
          {/* 右側：サイドバー */}
          <Sidebar />
        </div>
      </div>
    </div>
  )
}