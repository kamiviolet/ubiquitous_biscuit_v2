"use client"

import { signInWithFacebook } from "../auth/social-login/util";

const styles = {
    btn: "px-4 py-1 bg-blue-700 text-white"
}

export default function FacebookLoginBtn() {
    return (
        <button className={styles.btn} onClick={signInWithFacebook}>
            Sign in with Facebook
        </button>
    )
}