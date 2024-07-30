// Interfaces
import { User } from "@/interfaces/users";

export const getUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();
    return data;
}