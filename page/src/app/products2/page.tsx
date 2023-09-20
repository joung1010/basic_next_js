import React from 'react';
import Link from 'next/link';

const products = ['shirt', 'pants', 'skirt', 'shoes'];

function Products2Page(props:any) {
    return (
        <div>
            <h1>제품을 소개 할까??</h1>
            <ul>
                {
                    products.map((product,idx) => (
                        <li key={idx}>
                            <Link href={`/products2/${product}`}>{product}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Products2Page;