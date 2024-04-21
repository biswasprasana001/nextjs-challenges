// pages/image.js

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Hello, World!</h1>

            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={250}
                height={250}
            />

            <Link href="/about">
                About Us
            </Link>
        </div>
    )
}