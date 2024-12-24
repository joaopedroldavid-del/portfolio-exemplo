import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({children} : LayoutProps) => { 
    return (
        <>
            <header>
                <nav>
                    <Link href ="/">Sobre mim</Link>
                    <Link href ="/contatos">Entre em contato</Link>
                    <Link href ="/portifolio">Portifolio</Link>
                </nav>
            </header> 
            {children}   
        </>
        
    );
}