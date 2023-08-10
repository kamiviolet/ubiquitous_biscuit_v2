import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET () {
    const supabase = createRouteHandlerClient({cookies});
    const {data: comments} = await supabase.from("comments").select("*");

    return NextResponse.json(comments);
}