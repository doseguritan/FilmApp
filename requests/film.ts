export async function fetchTrending(page:number){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trending?page=${page}`);
  const response = await request.json();
  return response;
}

export async function fetchFilmDetail(id: string){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${id}`);
  const response = await request.json();
  return response;
}
