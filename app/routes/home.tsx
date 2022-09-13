import type { Post } from "@prisma/client"
import type { LoaderFunction } from "@remix-run/node"
import { json} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { db } from "~/utils/db.server"

type LoaderData = { posts: Array<Post>}

export const loader: LoaderFunction = async () => {
    const data: LoaderData = {
        posts: await db.post.findMany()
    }
    return json(data) || []
}

export default function Home() {
    const { posts } = useLoaderData<LoaderData>()
    return <>
    <div>Welcome to the blog</div>
    {posts.map((post) => <div key={`post-${post.id}-key`}>{post.title}</div>)}
    </>
};