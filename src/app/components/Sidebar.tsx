import Link from "next/link"
import { FaGithub, FaTwitter, FaBlog } from "react-icons/fa"
import styles from "@/styles/siderbar.module.css"

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>Takapon-Blogについて</h3>
        <p className={styles.sidebarText}>
          Takapon-Blogでは、エンジニアのための情報共有コミュニティである
          <Link href="#" className={styles.link}>
            ZENN
          </Link>
          に投稿している記事を取得して、エンジニア向けのブログとして公開しています。
          仕事やプライベートでNext.jsやTypeScript、TailwindCSSなどを普段した知見を活かしたいと思いましたので、
          それらを活用した個人開発の一環として、ブログサイトを作りました。
        </p>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>著作者について</h3>
        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>
            <img src="/placeholder.svg?height=80&width=80" alt="HayaTech" className={styles.avatarImage} />
          </div>
          <div className={styles.authorDetails}>
            <h4 className={styles.authorName}>Takapon</h4>
            <Link href="#" className={styles.authorLink}>
              @hayatech-gh
            </Link>
          </div>
        </div>
        <p className={styles.sidebarText}>
          「HayaTech」と申します。自分の名前とテクノロジーを合わせたニックネームです。
          大学卒業後、仕事でWeb制作を経験し、今現在はWeb系の開発に携わっています。
        </p>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>経歴</h3>
        <p className={styles.sidebarText}>青山学院大学 社会情報学部 社会情報学科 学士卒</p>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>ソーシャルリンク</h3>
        <div className={styles.socialLinks}>
          <Link
            href="https://github.com/takapom?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://x.com/takapom_engin"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://portfolio-site-psi-olive.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaBlog size={24} />
          </Link>
        </div>
      </div>
    </aside>
  )
}
