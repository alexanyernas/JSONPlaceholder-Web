// Components
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { DeletePostBtn } from "../buttons/DeletePostBtn";

// Interfaces
import { Post } from "@/interfaces/posts";

interface Props {
  post: Post
}

export function PostCard({ post }: Props) {
  return (
    <Card className="bg-blue-100">
      <CardHeader>
        <CardTitle>
          <div className="grid grid-cols-6 items-center">
            <span className="col-span-5">{post.title}</span>
            <DeletePostBtn />
          </div>
        </CardTitle>
        <CardDescription>{post.body}</CardDescription>
      </CardHeader>
    </Card>
  );
}