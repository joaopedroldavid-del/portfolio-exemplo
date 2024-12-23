import Link from "next/link";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact | João Pedro',
}

export default function Contatos() {
    return (
        <>
            <main>
                <Link href="/">Contact Page</Link>
            </main>
        </>
    );
}