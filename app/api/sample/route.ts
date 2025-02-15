import { NextResponse } from "next/server";
import { sampleAction } from "@/actions/sample-action";

export async function POST(request: Request) {
  try {
    const { input } = await request.json();

    if (!input || typeof input !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const result = await sampleAction(input);

    if (!result.isSuccess) {
      return NextResponse.json({ error: result.message }, { status: 500 });
    }

    return NextResponse.json({
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    console.error("Error in sample route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
