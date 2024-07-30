// Interfaces
import { Post } from "@/interfaces/posts";

export const getPostsByUserId = async(userId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data: Post[] = await response.json();
    return data;
}

export const deletePostById = async(id: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, 
        {
            method: 'DELETE'
        }
    );
    return response.ok;
}