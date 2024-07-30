"use client"

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { 
  Eye, 
  Globe, 
  Mail, 
  Phone 
} from "lucide-react";

import { Button } from "@/components/ui/button";

// Hooks
import { useRouter } from "next/navigation";

// Interfaces
import { User } from "@/interfaces/users";

interface Props {
  user: User
}

export function UserCard({ user }: Props) {
  const router = useRouter();

  return (
    <Card className="bg-blue-100">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.username}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center mb-3">
            <Phone className="mr-2" />
            {user.phone}
          </li>
          <li className="flex items-center mb-3">
            <Mail className="mr-2" />
            {user.email}
          </li>
          <li className="flex items-center">
            <Globe className="mr-2" />
            {user.website}
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full rounded-lg bg-blue-400 hover:bg-blue-900"
          onClick={() => {
            router.push(`/posts/${user.id}`)
          }}
        >
          <Eye className="mr-2 h-4 w-4" /> View Posts
        </Button>
      </CardFooter>
    </Card>
  );
}