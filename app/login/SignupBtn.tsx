"use client"

import { useRouter } from "next/navigation"

export default function SignupBtn() {
    const router = useRouter();

    return (
    <button
        className="rounded px-4 py-2 bg-blue-300 uppercase"
        onClick={()=>router.replace("/signup")} >
        Sign Up
    </button>
    )
}