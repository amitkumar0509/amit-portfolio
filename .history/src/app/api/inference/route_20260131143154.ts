import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    status: "placeholder",
    message:
      "ML inference API placeholder. Replace with model endpoint or serverless inference logic.",
    input: body,
  });
}
