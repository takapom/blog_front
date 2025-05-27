"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "@/styles/postcard.module.css"

//必要なのはタイトル、作成日、言語、内容、作成日時
interface Post {
  id: number
  title: string
  content: string
  created_at: string
  develop_lang: string
}

//必要な状態管理は記事データ、読み込み中、エラー
export default function PostCard() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
        const response = await fetch(`${apiUrl}/api/posts/`)
        if (!response.ok) {
          throw new Error("投稿の取得に失敗しました")
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "予期せぬエラーが発生しました")
        console.error("Error:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>読み込み中...</p>
      </div>
    )
  }

  if (error) {
    return <div className={styles.error}>エラー: {error}</div>
  }

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
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
