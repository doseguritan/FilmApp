import { tmdb_image } from "@/lib/image";
import { fetchFilmDetail } from "@/requests/film";
import { Badge, Container, Grid, GridCol, Group, Image, Stack, Text, Title } from "@mantine/core";
import '@mantine/carousel/styles.css';
import { FilmCast } from "@/components/FilmCast";
import FilmRecommendation from "@/components/FilmRecommendation";

export default async function TVPage({params}: {params: {id: string}}) {
  const data = await params;
  const {id} = data;
  const tv = await fetchFilmDetail(id, "show");
  return (<>
    <Image src={tmdb_image(tv, "backdrop")} width={"100%"} height={400} visibleFrom="sm" />
    <Container size={"md"} mt={{base: 0, sm: -50}} bg={"rgba(255,255,255,1)"} p={10} style={{position: 'relative', borderRadius: 5, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 999}}>
      <Grid>
        <GridCol span={{base: 12, sm: 2}}>
          <Image radius={"md"} src={tmdb_image(tv, "poster")} width={64} />
        </GridCol>
        <GridCol span={{base: 12, sm: 10}}>
          <Stack gap={"xs"} flex={1}>
            <Title order={2}>{tv.name || tv.title}</Title>
            <Group>{tv?.genres?.map((genre: any) => (<Badge key={genre.id} radius={"exit"} variant="light" color="blue">{genre.name}</Badge>))}</Group>
            <Text>{tv.overview}</Text>
          </Stack>
        </GridCol>
      </Grid>
    </Container>
    {tv?.credits?.cast && <FilmCast cast={tv?.credits?.cast} />}
    {tv?.recommendations?.results && <FilmRecommendation recommedations={tv?.recommendations?.results} />}
  </>);
}
