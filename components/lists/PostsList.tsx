// Interfaces
import { Post } from "@/interfaces/posts";

// Components
import { PostCard } from "../cards/PostCard";

interface Props {
  posts: Post[];
}

export const PostsList = ({ posts }: Props) => {
  return (
    <>
      {
        posts.map((post: Post) => (
          <PostCard post={post} key={post.id} />
        ))
      }
    </>
  );
}
