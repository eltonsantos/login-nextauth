"use client"

import { signIn } from "next-auth/react";

export default function LoginGithub() {
  return (
    <>
      <button onClick={() => signIn('github', { callbackUrl: '/dashboard' })} className="btn btn-square w-full text-white">Login com Github</button>
    </>
  )
}