// Components
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Button } from "../ui/button";

import { Trash } from "lucide-react";

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
            {post.title}
            <Button variant="link" size="icon" className="ml-2">
              <Trash className="h-4 w-4" />
            </Button>
        </CardTitle>
        <CardDescription>{post.body}</CardDescription>
      </CardHeader>
    </Card>
  );
}