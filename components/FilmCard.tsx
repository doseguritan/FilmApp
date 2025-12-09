"use client";
import { IconArrowRight, IconBookmark, IconDeviceTvOld, IconHeart, IconMovie, IconShare } from '@tabler/icons-react';
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

export function FilmCard(props: FilmCardProps) {
  const theme = useMantineTheme();
  const {id, media_type, overview, vote_average, release_date, title, poster_path, backdrop_path, name} = props;
  return (
    <Card withBorder radius="xs">
      <Card.Section>
        <Image alt={title} src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w300${poster_path}`} width={"auto"} height={200} />
      </Card.Section>

      <Text fw={500} lh={1} my={10}>
        {name || title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={3} lh="1.2em" mb={10}>
        {overview}
      </Text>

      <Group justify="space-between" mb={10}>
        <Center>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            Bill Wormeater
          </Text>
        </Center>
        <Group gap={8} mr={0}>
          <ActionIcon>
            <IconHeart size={16} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon>
            <IconBookmark size={16} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon>
            <IconShare size={16} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>

      <Button
        variant='light'
        leftSection={media_type === 'tv' ? <IconDeviceTvOld size={24} /> : <IconMovie size={24} />}
        rightSection={<IconArrowRight size={24} />}
        component={Link}
        href={`/${media_type}/${id}`}
      >View Details</Button>
    </Card>
  );
}


type FilmCardProps = {
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
