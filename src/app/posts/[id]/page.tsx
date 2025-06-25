import { notFound } from 'next/navigation'
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

interface PageProps {
  params: Promise<{ id: string }>
}

async function getPost(id: string): Promise<Post | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
  
  try {
    const response = await fetch(`${apiUrl}/api/posts/${id}`, {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) {
      return null
    }
    
    return response.json()
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function generateStaticParams() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
  
  try {
    const response = await fetch(`${apiUrl}/api/posts/`)
    if (!response.ok) return []
    
    const posts: Post[] = await response.json()
    return posts.map((post) => ({
      id: post.id.toString(),
    }))
  } catch {
    return []
  }
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.id)
  
  if (!post) {
    notFound()
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