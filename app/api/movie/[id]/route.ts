import { fetchFromTMDB } from "@/lib/tmdb";
import { NextResponse } from "next/server"

type RouteParams = {
  params: { id: String }
}
export async function GET(request: Request, {params}: {params: {id: String}} ) {
  const data = await params;
  const {id} = data;
  const movie = await fetchFromTMDB(`/movie/${id}?append_to_response=videos,credits`);
  return NextResponse.json(movie, {status: 200})
}
