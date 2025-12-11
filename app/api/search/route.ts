import { fetchFromTMDB } from "@/lib/tmdb";
import { NextResponse } from "next/server"

export async function GET(request: Request, {params}: {params: Promise<{ text: string }>} ) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const page = searchParams.get("page") || 1;
  const text = searchParams.get("text") || "";
  const movie = await fetchFromTMDB(`/search/multi?query=${text}&page=${page}`);
  return NextResponse.json(movie, {status: 200})
}
