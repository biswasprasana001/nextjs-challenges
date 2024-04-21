// pages/hello.js

import Greeting from "@/components/Greeting"
import Layout from "@/components/Layout"
import Link from "next/link"

export default function Hello({ data }) {
    return (
        <Layout>
            <h1>Hello, World!</h1>
            <Greeting />
            <Link href="/">
                Home
            </Link>
            <br />
            <Link href="/about">
                About Us
            </Link>
            <h1>{data.text} from Server</h1>
        </Layout>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/hello')
    const data = await response.json()

    return {
        props: { data },
    }
}