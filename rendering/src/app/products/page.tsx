import Link from 'next/link';
import {getProducts} from "@/service/products/products";

export const revalidate = 3;
export default async function ProductsPage() {
    const products = await getProducts();
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
    </>
  );
}
