import React from 'react';
import styles from './layout.module.css';

function ProductsLayout({children,}: { children: React.ReactNode }) {
    return (
        <>
            <nav className={styles.nav}>
                <a href="">여성 옷</a>
                <a href="">남성 옷</a>
            </nav>
            <section>
                {children}
            </section>
        </>
    );
}

export default ProductsLayout;