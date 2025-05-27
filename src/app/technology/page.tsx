import styles from "@/styles/technology.module.css"
import Header from "../components/Header"

export default function Technology() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>このブログについて</h1>
        </div>
        <div className={styles.content}>
          <section>
            <h2>概要</h2>
            <p>
              このブログは、髙木優希のアウトプット用のブログです。<br />
              寝る前の1時間を使って毎日書いているので日本語がおかしな点も多々あります笑<br />
              日頃の学習成果を記録として残してみたく、このブログを作成しました。<br />
              またフルスタック開発をしてみたく、フロントエンドとバックエンドを両方とも自分で作ってみたかったので、このブログを作成しました。<br />
              ※ちなみに「このブログについて」のページはNext.jsに直書きしています。<br />
              (スキーマ定義忘れたため笑)
            </p>
          </section>

          <section>
            <h2>使用技術</h2>
            <ul>
              <li>
                フロントエンド: <span className={styles.tech}>Next.js</span>, <span className={styles.tech}>React</span>,{" "}
                <span className={styles.tech}>TypeScript</span>
              </li>
              <li>
                バックエンド: <span className={styles.tech}>Python</span>, <span className={styles.tech}>Django</span>,{" "}
                <span className={styles.tech}>Rest Framework</span>
              </li>
              <li>
                データベース: <span className={styles.tech}>MySQL</span>
              </li>
            </ul>
          </section>

          <section>
            <h2>ディレクトリ構造</h2>
            <p>
              ディレクトリ構造は以下のようになっています。<br />
              Next.jsのサーバーサイド、クライアントとして基本的な構造です。<br />
              DjangoはバックエンドをAPI化にするためにシリアライザー定義を行いました。
            </p>
            <pre className={styles.codeBlock}>
              <code>
{`blog/
├── blog-backend/
│   ├── blog_backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── posts/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── db.sqlite3
│   ├── Dockerfile
│   ├── manage.py
│   └── requirements.txt
├── blog-frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   └── Header.tsx
│   │   │   ├── technology/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── styles/
│   │       └── technology.module.css
│   ├── public/
│   ├── .next/
│   ├── Dockerfile
│   ├── next.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── eslint.config.mjs
├── docker-compose.yml
├── package.json
└── README.md`}
              </code>
            </pre>
          </section>

          <section>
            <h2>デプロイ</h2>
            <p>
              デプロイはDockerを使用し、AWSのEC2によるものです。<br />
              AWSは初めての操作なので、理解にかなり苦労しました。<br />
              EC2のインスタンスを作成し、Dockerをインストールしました。
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
