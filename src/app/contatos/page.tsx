import Link from "next/link";
import type { Metadata } from 'next'
import { Layout } from "../components/commons/Layout";
 
export const metadata: Metadata = {
  title: 'Contact | João Pedro',
  description: "Futuro desenvolvedor fullstack, estudante de ciência da computação e apaixonado por tecnologia."
}

export default function Contatos() {
    return (
        <>
            <Layout>
                <div>
                    <h1>Contatos</h1>
                    <ul>
                        <li>
                            <span>E-mail</span>
                            <div>
                                <a href="mailto:joaopedrolouren97@gmail.com">joaopedrolouren97@gmail.com</a>
                            </div>
                        </li>
                        <li>
                            <span>Linkedin</span>
                            <div>
                                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-louren%C3%A7o-david-06a825230/">Linkedin.com/joaopedrolourencodavid</a>
                            </div>
                        </li>
                        <li>
                            <span>Git Hub</span>
                            <div>
                                <a href="github.com/joaopedroldavid-del">github.com/joaopedroldavid-del</a>
                        </div>
                        </li>
                        <li>
                            <span>Celular</span>
                            <div>
                                <a href="48998360390">(48) 9 9836-0390</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </Layout>
        </>
    );
}