import { fetchFromTMDB } from "@/lib/tmdb";
import { SimpleGrid, Title } from "@mantine/core";
import { FilmCard } from "../FilmCard";

export async function TrendingPage() {
  const trendings = await fetchFromTMDB('/trending/all/day');
  return (<>
    <Title order={4} my={10}>Trending</Title>
    <SimpleGrid cols={{base: 1, xs: 2, sm: 3, md: 4}}>
      {trendings.results.map((item: any) => (<FilmCard key={item.id} {...item} />))}
    </SimpleGrid>
  </>)
}
