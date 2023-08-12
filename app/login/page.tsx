import FacebookLoginBtn from "./FacebookLoginBtn"
import Messages from "./messages"
import SignupBtn from "./SignupBtn"
import PrevBtn from "@/components/PrevBtn"

const styles = {
  formWrapper: "px-8 flex w-full flex-col items-center relative py-10",
  form: "py-20 px-8 flex-1 flex flex-col w-full md:w-1/2 justify-center gap-2 text-foreground text-md",
  input: "rounded-md px-4 py-2 bg-white border mb-6",
  loginBtn: "bg-green-700 uppercase rounded px-4 py-2 text-white mb-2",
  signupWrapper: "py-5 px-8 flex-1 flex flex-col w-full md:w-1/2 justify-center"
}

export default function Login() {

  return (
    <div className={styles.formWrapper}>
      <PrevBtn />
      <form
        className={styles.form}
        action="/auth/sign-in"
        method="post"
      >
        <label htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          name="email"
          placeholder="you@example.com"
          required
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button type="submit" className={styles.loginBtn}>
          Sign In
        </button>
        <Messages />
      </form>
      <FacebookLoginBtn />
      <div className={styles.signupWrapper}>
        <p className="pb-5">Have not got an account yet? Why not sign up to become part of us? :)</p>
        <SignupBtn />
      </div>
    </div>
  )
}
