import { fetchFromTMDB } from "@/lib/tmdb";
import { NextResponse } from "next/server"

type RouteParams = {
  params: { id: String }
}
export async function GET(request: Request, {params}: RouteParams ): Promise<NextResponse> {
  const id = params.id;
  const movie = await fetchFromTMDB(`/movie/${id}?append_to_response=videos,credits`);
  return NextResponse.json(movie, {status: 200})
}
