import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json("Hello world")
}

// localhost:3000/api/hello
