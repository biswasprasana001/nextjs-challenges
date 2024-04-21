// pages/[id].js

import { useRouter } from 'next/router'

export default function Page({ data }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Page {router.query.id}</h1>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            // { params: { id: '1' } },
            // { params: { id: '2' } },
        ],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await response.json()

    return {
        props: { data },
    }
}