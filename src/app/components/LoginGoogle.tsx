"use client"

import { signIn } from "next-auth/react";

export default function LoginGoogle() {
  return (
    <>
      <h5 className="font-semibold text-slate-600">OU</h5>
      <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="btn btn-secondary w-full text-white">Login com Google</button>
    </>
  )
}