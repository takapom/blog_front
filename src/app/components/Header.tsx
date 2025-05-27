'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          Takapom Blog
        </Link>
        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            ホーム
          </Link>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/posts/new' ? styles.active : ''}`}
          >
            hogehoge
          </Link>
          <Link 
            href="/technology" 
            className={`${styles.navLink} ${pathname === '/technology' ? styles.active : ''}`}
          >
            このブログについて
          </Link>
        </nav>
      </div>
    </header>
  );
}
