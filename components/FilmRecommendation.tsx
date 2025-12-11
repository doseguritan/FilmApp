"use client";
import { tmdb_image } from "@/lib/image";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Image, Paper, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export default function FilmCast({recommedations, title} : {recommedations: any[], title?: string}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return <>
    <Title order={4}>{title || "Recommendations"}</Title>
    <Carousel
      slideGap={{base: 0, sm: "md"}}
      slideSize={{base: "70%", sm: "25%"}}
      controlSize={30}
      emblaOptions={{
        slidesToScroll: mobile ? 1 : 3,
        loop: false,
        dragFree: mobile,
        align: 'center'
      }}
      withIndicators
    >
      {recommedations.map((recommedation: any) => (
        <CarouselSlide key={recommedation.id}>
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            component={Link}
            href={`/${recommedation.media_type}/${recommedation.id}`}
          >
            <div>
              <Image src={tmdb_image(recommedation, "poster")} width={"auto"} height={300} radius={"md"} fallbackSrc={"/cast.jpg"} />
              <Title order={5} ta={"center"}>
                {recommedation.name || recommedation.title}
              </Title>
            </div>
          </Paper>
        </CarouselSlide>
      ))}
    </Carousel>
  </>
}
