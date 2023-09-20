import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link'

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