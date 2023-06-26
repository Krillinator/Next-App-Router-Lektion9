import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  return NextResponse.json({ id })
}

// localhost:3000/api/post/5 <-- 5 (dynamic query param)
