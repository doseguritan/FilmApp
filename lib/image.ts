export type PathSource = "poster" | "profile" | "backdrop";
export type MediaType = "movie" | "tv" | "person";
const ImageSize: Record<PathSource, String> = {
  "poster": "w300",
  "profile": "w185",
  "backdrop": "w780"
}
export function tmdb_image(item: any, path_source: PathSource) {
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/${ImageSize[path_source]}${item[`${path_source}_path`]}`
}
