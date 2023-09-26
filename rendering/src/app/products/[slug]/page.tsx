import {notFound} from 'next/navigation';
import {getProduct, getProducts} from "@/service/products/products";

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

export default async function ProductPage({params: {slug}}: Props) {
    const product = await getProduct(slug);
    if (!product) {
        notFound();
    }
    return <h1>{product.name} 제품 설명 페이지</h1>;
}

export async function generateStaticParams() {
    // 파일에 있는 제품들을 미리 만들어보자
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.id,
    }));
}

