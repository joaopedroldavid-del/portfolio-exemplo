import Link from "next/link";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Portifolio | João Pedro',
}

export default function Home() {
  return (
    <>
      <main>
        <h1>Hello World</h1>
        <Link href = "/contatos"> Ir para a barra contatos</Link>
      </main>
    </>
  );
}
