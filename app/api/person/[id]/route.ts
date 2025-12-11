import { fetchFromTMDB } from "@/lib/tmdb";
import { NextResponse } from "next/server"

export async function GET(request: Request, {params}: {params: Promise<{ id: string }>} ) {
  const data = await params;
  const {id} = data;
  const movie = await fetchFromTMDB(`/person/${id}?append_to_response=reviews,credits,recommendations,combined_credits`);
  return NextResponse.json(movie, {status: 200})
}
