import Link from "next/link";
import type { Metadata } from 'next';
import { Layout } from "../components/commons/Layout";

export const metadata: Metadata = {
    title: 'About me | João Pedro',
    description: "Future fullstack developer, computer science student and passionate about technology."
}

export default function AboutMe() {
    return (
        <>
            <Layout>
                <h1>Sobre mim</h1>
            </Layout>
        </>
    );
}