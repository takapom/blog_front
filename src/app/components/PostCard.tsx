"use client"

import useSWR from "swr"
import Link from "next/link"
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
  const { data: posts, error, isLoading } = useSWR<Post[]>(`${apiUrl}/api/posts/`, fetcher)

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>読み込み中...</p>
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
            <Link href={`/posts/${post.id}`} className={styles.postTitle}>
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