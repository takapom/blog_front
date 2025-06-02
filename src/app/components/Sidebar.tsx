import Link from "next/link"
import { FaGithub, FaTwitter, FaBlog } from "react-icons/fa"
import styles from "@/styles/siderbar.module.css"

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>Takapon-Blogについて</h3>
        <p className={styles.sidebarText}>
          Takapon-Blogでは、インターンシップでの学びや、個人開発での学びを記事として公開しています。
        </p>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>著作者について</h3>
        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>
            <img src="/icon.JPEG" alt="HayaTech" className={styles.avatarImage} />
          </div>
          <div className={styles.authorDetails}>
            <h4 className={styles.authorName}>Takapon</h4>
            <Link href="#" className={styles.authorLink}>
              @Takapon
            </Link>
          </div>
        </div>
        <p className={styles.sidebarText}>
          「Takapn」と申します。<br />
          中学校からのニックネームです。<br />
          現在、学生エンジニアとして個人開発や、長期インターンシップ、交流会に参加したりといった活動を行っております。<br />
          将来は、Sassを通して、より多くの人に価値を提供したいと考えております。
        </p>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>技術スタック</h3>
        <div className={styles.authorInfo}>
          <p className={styles.sidebarText}>
            フロントエンド：TypeScript　Next.js　Vue.js<br />
            バックエンド：Python　Go　Ruby<br />
            その他：Docker　Git　MySQL　Firebase　<br />
            興味領域：フロントエンド　バックエンド　ios
        </p>
        </div>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>経歴</h3>
        <p className={styles.sidebarText}>
        2004年：大阪で爆誕<br />
        2020年3月：大阪府立布施高等学校　入学<br />
        2023年4月：大和大学 情報学部 情報学科 入学<br />
        </p>
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