import Messages from "./messages";
import PrevBtn from "@/components/PrevBtn";

const styles = {
  signupFormContainer: "px-8 w-full flex flex-col items-center relative py-10",
  signupForm: "py-20 px-8 flex-1 flex flex-col w-full md:w-1/2 justify-center gap-2 text-foreground text-md",
  signupInput: "rounded-md px-4 py-2 bg-white border",
  signupLabel: "mt-6 font-semibold",
  signupBtn: "bg-green-700 uppercase rounded px-4 py-2 text-white my-6",
  hint: "text-sm before:content-['*'] text-red-800"
}

export default function Signup() {
  return (
    <div className={styles.signupFormContainer}>
      <PrevBtn />
      <form
        className={styles.signupForm}
        action="/auth/sign-up"
        method="post"
      >
        <label className={styles.signupLabel} htmlFor="email">
          Email
        </label>
        <input
          className={styles.signupInput}
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className={styles.signupLabel} htmlFor="username">
          Username
        </label>
        <input
          className={styles.signupInput}
          type="text"
          name="username"
          required
        />
        <label className={styles.signupLabel} htmlFor="password">
          Password
        </label>
        <input
          className={styles.signupInput}
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <p className={styles.hint}>
          Password must have at least 6 character length
        </p>
        <label className={styles.signupLabel} htmlFor="avatarUrl">
          Avatar (please provide an valid link)
        </label>
        <input
          className={styles.signupInput}
          type="url"
          name="avatarUrl"
        />
        <button
          formAction="/auth/sign-up"
          className={styles.signupBtn}
        >
          Submit
        </button>
        <Messages />
      </form>
    </div>
  )
}
