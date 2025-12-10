"use client";
import { tmdb_image } from "@/lib/image";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Image, Paper, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function FilmCast({cast} : {cast: any[]}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return <>
    <Title order={4}>Casts</Title>
    <Carousel
      slideGap={{base: 0, sm: "md"}}
      slideSize={{base: "70%", sm: "25%"}}
      controlSize={30}
      emblaOptions={{
        slidesToScroll: mobile ? 1 : 3,
        loop: true,
        dragFree: mobile,
        align: 'center'
      }}
      withIndicators
    >
      {cast.map((castMember: any) => (
        <CarouselSlide key={castMember.id}>
          <Paper
            shadow="md"
            p="xl"
            radius="md"
          >
            <div>
              <Image src={tmdb_image(castMember, "profile")} width={"auto"} height={300} radius={"md"} />
              <Title order={5}>
                {castMember.name}
              </Title>
              <Title order={6}>
                {castMember.character}
              </Title>
            </div>
          </Paper>
        </CarouselSlide>
      ))}
    </Carousel>
  </>
}
