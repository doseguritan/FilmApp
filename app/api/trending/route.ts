import { fetchFromTMDB } from "@/lib/tmdb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url)
  const page = url.searchParams.get('page')
  const response = await fetchFromTMDB(`/trending/all/week?page=${page}`);
  return NextResponse.json(response, { status: 200 });
}
