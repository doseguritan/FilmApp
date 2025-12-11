import { Title } from "@mantine/core";
import SearchResult from "./SearchResult";

export default async function SearchPage({params}:{params: Promise<{text: string}>}) {
  const data = await params;
  const {text} = data;
  return (<>
    <Title order={4} my={10}>Search Results</Title>
    <SearchResult text={text} />
  </>)
}
