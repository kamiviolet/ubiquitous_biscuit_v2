"use client"

import { signInWithFacebook } from "../auth/social-login/util"

export default function FacebookLoginBtn() {
    return (
        <button onClick={signInWithFacebook}>
            Sign in with Facebook
        </button>
    )
}