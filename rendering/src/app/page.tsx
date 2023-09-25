import Image from 'next/image';
import styles from './page.module.css';
import os from 'os';




export default function Home() {
  console.log('Hello!');
  console.log(os.hostname())
  return <h1>홈페이지다!!</h1>;
}
