import { fetchFromTMDB } from "@/lib/tmdb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const page = searchParams.get("page") || 1;

  const response = await fetchFromTMDB(`/movie`);

  return NextResponse.json(response, { status: 200 });
}
