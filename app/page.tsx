"use client";
import { Button, Center, SimpleGrid, Title } from "@mantine/core";
import { FilmCard, FilmCardProps } from "@/components/FilmCard";
import { Suspense, useEffect, useState } from "react";
import { fetchTrending } from "@/requests/film";
import FilmSkeleton from "@/components/FilmSkeleton";

export default function TrendingPage() {
  const [trendings, setTrendings] = useState<FilmCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [hasMorePages, setHasMorePages] = useState(false);
  const fetchData = async (page:number) => {
    setLoading(true);
    const data = await fetchTrending(page);
    setTrendings([...trendings, ...(data?.results || [])])
    setHasMorePages(data?.total_pages === page);
    setLoading(false)
  }
  useEffect(() => {
    fetchData(page);
  }, [])
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    fetchData(nextPage);
    setPage(nextPage)
  }
  return (<>
    <Title order={4} my={10}>Trending</Title>
    <SimpleGrid cols={{base: 1, xs: 2, sm: 3, md: 4, lg: 5}}>
      <Suspense fallback={<FilmSkeleton />}>
        {trendings.map((item: FilmCardProps) => (<FilmCard key={`${item.name || item.title}-${item.id}`} {...item} />))}
      </Suspense>
    </SimpleGrid>
    {!hasMorePages && <Center>
      <Button
        variant="gradient"
        size="md"
        radius={"xs"}
        w={"50%"}
        my={10}
        loading={loading}
        mx={"auto"}
        onClick={handleLoadMore}
      >
        Load more
      </Button>
    </Center>}
  </>)
}
