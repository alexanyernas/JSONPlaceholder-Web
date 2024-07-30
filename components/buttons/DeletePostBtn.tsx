"use client"

// Hooks
import { useToast } from "../ui/use-toast";

// Services
import { deletePostById } from "@/services/posts";

// Components
import { Trash } from "lucide-react";

import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger 
} from "../ui/alert-dialog";

import { Button } from "../ui/button"

interface Props {
    id: number; 
}

export const DeletePostBtn = ({ id }: Props) => {
    const { toast } = useToast();

    const handleDeletePost = async () => {
        const result = await deletePostById(id);
        if (result) {
            toast({
                title: "Notification",
                description: "The post has been successfully deleted.",
                duration: 5000
            })
        } else {
            toast({
                title: "Notification",
                description: "Oops, a glitch has occurred! Please try again in a few minutes.",
                variant: "destructive",
                duration: 5000
            })
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                    <Trash className="h-4 w-4" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete this post?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. This will permanently delete your post.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDeletePost()}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}