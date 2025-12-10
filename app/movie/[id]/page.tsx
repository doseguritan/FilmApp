import { tmdb_image } from "@/lib/image";
import { fetchFilmDetail } from "@/requests/film";
import { Badge, Container, Grid, GridCol, Group, Image, Paper, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useMediaQuery } from "@mantine/hooks";
import { FilmCast } from "@/components/FilmCast";

export default async function MoviePage({params}: {params: {id: string}}) {
  const data = await params;
  const {id} = data;
  const movie = await fetchFilmDetail(id);
  return (<>
    <Image src={tmdb_image(movie, "backdrop")} width={"100%"} height={400} visibleFrom="sm" />
    <Container size={"md"} mt={{base: 0, sm: -50}} bg={"rgba(255,255,255,1)"} p={10} style={{position: 'relative', borderRadius: 5, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 999}}>
      <Grid>
        <GridCol span={{base: 12, sm: 2}}>
          <Image radius={"md"} src={tmdb_image(movie, "poster")} width={64} />
        </GridCol>
        <GridCol span={{base: 12, sm: 10}}>
          <Stack gap={"xs"} flex={1}>
            <Title order={2}>{movie.name || movie.title}</Title>
            <Group>{movie.genres.map((genre: any) => (<Badge key={genre.id} radius={"exit"} variant="light" color="blue">{genre.name}</Badge>))}</Group>
            <Text>{movie.overview}</Text>
          </Stack>
        </GridCol>
      </Grid>
    </Container>
    <FilmCast cast={movie.credits.cast} />
  </>);
}
