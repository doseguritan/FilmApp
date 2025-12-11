export async function fetchFromTMDB(endpoint: string, options: RequestInit = {}) {
  const accessToken = process.env.TMDB_ACCESS_TOKEN;
  const baseUrl = process.env.TMDB_API_BASE_URL;
  const url = `${baseUrl}${endpoint}`;

  const request = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json;charset=utf-8',
      ...options.headers,
    },
  });

  if (!request.ok) {
    console.log(`API request failed: ${request.status} ${request.statusText}`);
  }
  const response = await request.json()
  return response;
}
