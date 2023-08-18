import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata = {
  title: "Ubiquitous Biscuit (v2)",
  description: "Built with NextJS Supabase Typescript",
}

export const dynamic = "force-dynamic"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies });

  const {data: { user }} = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className="min-h-screen w-screen text-center bg-[--background] flex justify-center">
        <div className="max-w-screen-lg w-full shadow-lg">
          <Header user={user} />
          <Nav user={user}/>
          <main className="min-h-[70vh] w-full">
            <div className="h-full w-full grid place-items-center">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
