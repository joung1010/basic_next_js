import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '나이스한 페이지 프로젝트',
  description: '넥스트js 에서 라우팅을 하는 방법을 공부하고 있어요!!',
    icons:{
      icon:'/favicon.ico',
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
            <h1>Routing Next.js App</h1>
            <nav>
                <Link href="/about2">About</Link>
                <Link href="/products2">Products</Link>
            </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
