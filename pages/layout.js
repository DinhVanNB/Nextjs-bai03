
import styles from "../styles/Layout.module.css"
import Link from "next/link";

export default function Layout({children}){
    return (
        <div class={styles.ul}>
           <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
           
           </ul>
           <div class={styles.container}>{children} 
           </div>
        </div>
    );
}