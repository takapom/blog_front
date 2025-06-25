"use client"

import useSWR from "swr"
import Link from "next/link"
import { useRouter } from "next/navigation"
import styles from "@/styles/postcard.module.css"

interface Post {
  id: number
  title: string
  content: string
  created_at: string
  develop_lang: string
}

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("投稿の取得に失敗しました")
  }
  return response.json()
}

export default function PostCard() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
  const router = useRouter()
  const { data: posts, error, isLoading } = useSWR<Post[]>(
    `${apiUrl}/api/posts/`, 
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
      refreshInterval: 300000,
    }
  )

  if (isLoading) {
    return (
      <div className={styles.postList}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.skeletonCard}>
            <div className={styles.postHeader}>
              <div className={`${styles.skeleton}`} style={{ width: '70%', height: '24px' }}></div>
              <div className={`${styles.skeleton}`} style={{ width: '60px', height: '20px' }}></div>
            </div>
            <div style={{ padding: '1rem 1.5rem' }}>
              <div className={`${styles.skeleton}`} style={{ width: '100%', height: '16px', marginBottom: '8px' }}></div>
              <div className={`${styles.skeleton}`} style={{ width: '90%', height: '16px', marginBottom: '8px' }}></div>
              <div className={`${styles.skeleton}`} style={{ width: '80%', height: '16px' }}></div>
            </div>
            <div className={styles.postFooter}>
              <div className={`${styles.skeleton}`} style={{ width: '80px', height: '14px' }}></div>
              <div className={`${styles.skeleton}`} style={{ width: '60px', height: '14px' }}></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className={styles.error}>エラー: {error.message}</div>
  }

  return (
    <div className={styles.postList}>
      {posts?.map((post) => (
        <div key={post.id} className={styles.postCard}>
          <div className={styles.postHeader}>
            <Link 
              href={`/posts/${post.id}`} 
              className={styles.postTitle}
              onMouseEnter={() => router.prefetch(`/posts/${post.id}`)}
            >
              {post.title}
            </Link>
            <span className={styles.postLang}>{post.develop_lang}</span>
          </div>
          <div className={styles.postContent}>{post.content}</div>
          <div className={styles.postFooter}>
            <div className={styles.postDate}>{new Date(post.created_at).toLocaleDateString("ja-JP")}</div>
            <Link href={`/posts/${post.id}`} className={styles.readMore}>
              続きを読む
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}