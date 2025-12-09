import FilmSkeleton from "@/components/FilmSkeleton";
import TrendingPage from "@/components/trending";
import { Title, Typography } from "@mantine/core";
import { Suspense } from "react";

export default function HomePage() {
  return (<>
  <Suspense fallback={<FilmSkeleton />}>
    <TrendingPage />
  </Suspense>
  </>);
}
