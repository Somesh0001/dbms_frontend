import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id } = await req.json();

  const res = await fetch(`https://dbms-backend-jmi6.onrender.com/q${id}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return new NextResponse(JSON.stringify(data), { status: 200 });
}
