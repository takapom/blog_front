import Link from "next/link"
import styles from "@/styles/page.module.css"
import PostCard from "./components/PostCard"
import Header from "./components/Header"
import { FaGithub, FaTwitter, FaBlog } from "react-icons/fa"

export default function Page() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>学生エンジニア日記</h1>
          <div className={styles.socialLinks}>
            <Link href="https://github.com/takapom?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub size={32} />
            </Link>
            <Link href="https://x.com/takapom_engin" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTwitter size={32} />
            </Link>
            <Link href="https://portfolio-site-psi-olive.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaBlog size={32} />
            </Link>
          </div>
        </div>
        <PostCard />
      </div>
    </div>
  )
}