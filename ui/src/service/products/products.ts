import path from "path";
import {promises} from "fs";

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
}
export async function getProducts():Promise<Product[]> {
    const filePath = path.join(process.cwd(), 'data','products.json');
    // console.log(process.cwd()); //C:\nextJs\rendering
    const data = await promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function getProduct(id:string):Promise<Product | undefined> {
    const products = await getProducts();
    return products.find(product => product.id === id);
}