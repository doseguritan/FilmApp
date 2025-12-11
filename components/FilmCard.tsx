"use client";
import { IconArrowRight, IconBookmark, IconDeviceTvOld, IconHeart, IconMovie, IconShare, IconUser } from '@tabler/icons-react';
import type { TablerIcon } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Text,
  useMantineTheme,
  Image,
  Button
} from '@mantine/core';
import Link from 'next/link';
import { MediaType, PathSource, tmdb_image } from '@/lib/image';



type IconMap = Record<MediaType, TablerIcon>
const media_type_icon: IconMap = {
  "movie": IconMovie,
  "tv": IconDeviceTvOld,
  "person": IconUser
}

type MediaImageSource = Record<MediaType, PathSource>
const media_type_image: MediaImageSource = {
  "movie": "poster",
  "tv": "poster",
  "person": "profile"
}

export function FilmCard(props: FilmCardProps) {
  const {id, overview, title, name} = props;
  const media_type: MediaType = props.media_type as MediaType
  const MediaIcon = media_type_icon[media_type]
  return (
    <Card withBorder radius="xs" pos={"relative"}>
      <Card.Section>
        <Image alt={title} src={tmdb_image(props, media_type_image[media_type])} width={"auto"} height={200} />
      </Card.Section>

      <Text fw={500} lh={1} my={10}>
        {name || title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={3} lh="1.2em" mb={10}>
        {overview}
      </Text>
      <Card.Section>
        &nbsp;
      </Card.Section>
      <Button
        pos={"absolute"}
        bottom={0}
        left={0}
        variant='light'
        fullWidth
        radius={"xs"}
        leftSection={<MediaIcon size={24} />}
        rightSection={<IconArrowRight size={24} />}
        component={Link}
        href={`/${media_type}/${id}`}
      >
        View Details
      </Button>
    </Card>
  );
}


export type FilmCardProps = {
  id: number;
  media_type: string;
  overview: string;
  vote_average: number;
  release_date: string;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
};
