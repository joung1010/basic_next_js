import React from 'react';
import {getProducts, Product} from "@/service/products/products";
import Link from "next/link";
import MeowArticle from "@/components/article/MeowArticle";

type Props = {
    products: Product[];
}

function Ssg({products}:Props) {
    return (
        <>
            <h1>제품 소개 페이지!</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle/>
        </>
    );
}

export async function getStaticProps() {
    const products = await getProducts();
    return {
        props: {products},
        revalidate:10,
    };
}

export default Ssg;