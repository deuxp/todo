import { NextResponse } from "next/server";
const { json } = NextResponse;

export async function GET(request: Request) {
  // const {searchParams} = new URL(request.url);
  // const id = searchParams.get('id')
  return json({ guy: "says hi" });
}
