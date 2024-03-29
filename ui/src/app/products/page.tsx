import Link from 'next/link';
import {getProducts} from "@/service/products/products";
import styles from './page.module.css';
import MeowArticle from "@/components/article/MeowArticle";
import Image from "next/image";
import clothImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;
export default async function ProductsPage() {
    // throw new Error('test Error');
    const products = await getProducts();

    return (
        <>
            <h1>제품 소개 페이지!</h1>
            <Image src={clothImage} alt='Clothes'/>
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
