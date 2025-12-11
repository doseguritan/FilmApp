import { tmdb_image } from "@/lib/image";
import { fetchFilmDetail } from "@/requests/film";
import { Badge, Container, Grid, GridCol, Group, Image, Stack, Text, Title } from "@mantine/core";
import '@mantine/carousel/styles.css';
import { FilmCast } from "@/components/FilmCast";
import FilmRecommendation from "@/components/FilmRecommendation";

export default async function MoviePage({params}: {params: {id: string}}) {
  const data = await params;
  const {id} = data;
  const person = await fetchFilmDetail(id, "person");
  return (<>
    <Container size={"md"} bg={"rgba(255,255,255,1)"} mb={20} p={10} style={{position: 'relative', borderRadius: 5, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 999}}>
      <Grid>
        <GridCol span={{base: 12, sm: 2}}>
          <Image radius={"md"} src={tmdb_image(person, "profile")} width={64} />
        </GridCol>
        <GridCol span={{base: 12, sm: 10}}>
          <Stack gap={"xs"} flex={1}>
            <Title order={2}>{person.name || person.title}</Title>
            <Title order={6}>Place of Birth: {person.place_of_birth || "Unknown"}</Title>
            <Group gap={2}>{person.also_known_as.map((name: any, index: number) => (<Badge key={index} radius={"exit"} variant="light" color="blue">{name}</Badge>))}</Group>
            <Text>{person.biography}</Text>
          </Stack>
        </GridCol>
      </Grid>
    </Container>
    {/* <FilmCast cast={person.credits.cast} /> */}
    <FilmRecommendation recommedations={person.combined_credits.cast} title="Films" />
  </>);
}
