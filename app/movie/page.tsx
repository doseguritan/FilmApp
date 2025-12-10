
export default async function MoviePage({params}: {params: {id: string}}) {
  const id = params.id;
  return (<div>Movie Page for ID: {id}</div>);
}
