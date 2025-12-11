export async function fetchTrending(page:number){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trending?page=${page}`);
  const response = await request.json();
  return response;
}

export async function fetchMovies(page:number){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movie?page=${page}`);
  const response = await request.json();
  return response;
}

export async function fetchShows(page:number){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/show?page=${page}`);
  const response = await request.json();
  return response;
}

export async function fetchPeople(page:number){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/person?page=${page}`);
  const response = await request.json();
  return response;
}

export async function fetchBySearch(text: string, page:number){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?text=${encodeURIComponent(text)}&page=${page}`);
  const response = await request.json();
  return response;
}

export async function fetchFilmDetail(id: string, type: 'movie' | 'show' | 'person' = 'movie'){
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${type}/${id}`);
  const response = await request.json();
  return response;
}
