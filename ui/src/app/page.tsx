import Image from 'next/image';
import styles from './page.module.css';
import os from 'os';
import Counter from "@/components/Counter";


export default function Home() {
    console.log('Hello!! - Server Component');
    console.log(os.hostname())
    return (
        <>
            <h1>홈페이지다!!</h1>
            <Counter/>
            <Image src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
                   alt='shop'
                   width={400}
                   height={400}
                   priority
            />
        </>
    );
}
