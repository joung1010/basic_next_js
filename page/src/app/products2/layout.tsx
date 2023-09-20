import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '나이스한 페이지 프로젝트 | 전체 상품 확인',
    description: '전체 상품을 확인!!!',
}

function ProductsLayout({children,}: { children: React.ReactNode }) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href="/products2/woman">여성 옷</Link>
                <Link href="/products2/man">남성 옷</Link>
            </nav>
            <section>
                {children}
            </section>
        </>
    );
}

export default ProductsLayout;