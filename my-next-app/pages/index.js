// pages/index.js

import React from 'react';
import Link from 'next/link';
import logger from './middlewares/logger';

export default function Home({ data }) {
    return (
        <>
            <h1>Welcome to Next.js!</h1>
            <p>This is a simple Next.js application.</p>
            <div>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
            </div>
            <Link href="/about">About</Link>
            <br />
            <Link href="/hello">Hello</Link>
        </>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    return {
        props: { data },
    }
}