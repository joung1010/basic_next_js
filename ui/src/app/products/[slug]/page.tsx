import {notFound} from 'next/navigation';
import {getProduct, getProducts} from "@/service/products/products";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({params}: Props) {
    return {
        title: `제품의 이름: ${params.slug}`,
    };
}
export const revalidate = 3;
export default async function ProductPage({params: {slug}}: Props) {
    const product = await getProduct(slug);
    if (!product) {
        notFound();
    }
    return (
        <>
            <h1>{product.name} 제품 설명 페이지</h1>
            <Image src={`/images/${product.image}`} alt={product.name} width='300' height='300'/>
        </>
    );
}

export async function generateStaticParams() {
    // 파일에 있는 제품들을 미리 만들어보자
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.id,
    }));
}

