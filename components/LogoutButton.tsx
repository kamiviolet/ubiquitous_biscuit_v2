export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="border-0 ml-6 font-semibold text-lg px-1 uppercase bg-gray-300 hover:bg-gray-400">
        Logout
      </button>
    </form>
  )
}
