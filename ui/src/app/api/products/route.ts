import {getProducts} from "@/service/products/products";

export async function GET(request: Request) {
    const products =await getProducts();
    return Response.json({products});
}