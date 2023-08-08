import FacebookLoginBtn from "./FacebookLoginBtn"
import Messages from "./messages"
import SignupBtn from "./SignupBtn"
import PrevBtn from "@/components/PrevBtn"

export default function Login() {

  return (
    <div className="flex flex-col items-center relative py-10">
      <PrevBtn />

      <form
        className="py-20 px-8 flex-1 flex flex-col w-full md:w-1/2 justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button type="submit" className="bg-green-700 uppercase rounded px-4 py-2 text-white mb-2">
          Sign In
        </button>
        <Messages />
      </form>
      <FacebookLoginBtn />
      <div className="py-5 px-8 flex-1 flex flex-col w-full md:w-1/2 justify-center ">
        <p className="pb-5">Have not got an account yet? Why not sign up to become part of us? :)</p>
        <SignupBtn />
      </div>
    </div>
  )
}
