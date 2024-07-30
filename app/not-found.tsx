"use client"
// Hooks
import { useRouter } from "next/navigation";

// Components
import { Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFounPage() {
    const router = useRouter();

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center">
                <p className="font-bold text-9xl mb-6">Oops!</p>
                <p className="font-bold text-lg">404 - PAGE NOT FOUND</p>
                <p className="text-slate-600 mb-6">The page you are looking for might have been removed had its name changed or is temporaily unavaible.</p>
                <Button onClick={() => {
                    router.push('/');
                }}>
                    <Undo2 className="mr-2" />
                    Home
                </Button>
            </div>
        </div>
    );
}