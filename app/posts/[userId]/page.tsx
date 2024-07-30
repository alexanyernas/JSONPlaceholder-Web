// Services
import { getPostsByUserId } from "@/services/posts";

// Components
import { PostsList } from "@/components/lists/PostsList";

interface Props {
    params: {
        userId: string
    }
}

export default async function PostsByUserIdPage({ params }: Props) {
    const { userId } = params;
    const posts = await getPostsByUserId(Number(userId));

    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <PostsList posts={posts} />
            </div>
        </div>
    );
}
