import Layout from "@/components/Layout";
import Link from "next/link";

export default function About() {
    return (
        <Layout>
            <h1>About Us</h1>
            <p>This is the about page.</p>
            <Link href="/">Home</Link>
            <br />
            <Link href="/hello">Hello</Link>
        </Layout>
    )
}