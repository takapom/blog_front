// 個々のブログに遷移

'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import styles from '@/styles/detail.module.css'
import Header from '../../components/Header'

interface Post {
  id: number
  title: string
  content: string
  body : string
  created_at: string
  develop_lang: string
}

export default function PostPage() {
  const params = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
        const response = await fetch(`${apiUrl}/api/posts/${params.id}`)
        if (!response.ok) {
          throw new Error("記事の取得に失敗しました")
        }
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "予期せぬエラーが発生しました")
        console.error("Error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  if (isLoading) {
    return (
      <>
        <Header />
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
          <p>読み込み中...</p>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <div className={styles.error}>エラー: {error}</div>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className={styles.error}>記事が見つかりませんでした</div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            記事一覧に戻る
          </Link>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>
              {new Date(post.created_at).toLocaleDateString("ja-JP")}
            </span>
            <span className={styles.lang}>{post.develop_lang}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.content}
        </div>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </>
  )
}

