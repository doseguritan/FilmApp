import { fetchFromTMDB } from "@/lib/tmdb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await fetchFromTMDB(`/trending/all/day`);
  return NextResponse.json(response, { status: 200 });
}
