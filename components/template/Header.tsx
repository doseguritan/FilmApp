"use client";
import { Burger, Button, Container, Drawer, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '@/assets/logo.png';
// import classes from './HeaderSearch.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SearchField from './SearchField';
import { redirect } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

const links = [
  { link: '/', label: 'Home' },
  { link: '/movie', label: 'Movies' },
  { link: '/tv', label: 'TV Shows' },
  { link: '/person', label: 'People' },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Button
      variant={'subtle'}
      c={opened ? 'blue' : 'white'}
      component={Link}
      key={link.label}
      onClick={() => opened && toggle()}
      href={link.link}
    >
      {link.label}
    </Button>
  ));

  const handleSearchFilm = (e: React.KeyboardEvent<HTMLInputElement>, value: string, reset: Dispatch<SetStateAction<string>>):void => {
    if(e.key === "Enter"){
      // TODO: Handle search film action
      if(!value || value.length === 0) return;
      reset("");
      redirect(`/search/${value}`);
    }
  }

  return (<>
    <Container size={"md"}>
    <Group justify="space-between" px="md" py="sm">
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" color='white' />
        <Image src={Logo} alt="Logo" width={28} height={28} />
      </Group>

      <Group>
        <Group ml={50} gap={5} visibleFrom="sm">
          {items}
        </Group>
        <SearchField handleSearch={handleSearchFilm} />
      </Group>
    </Group>
    </Container>
    <Drawer opened={opened} onClose={toggle} size="100%" padding="md" hiddenFrom="sm">
      <Stack dir='column'>
        <SearchField handleSearch={handleSearchFilm} visibleFrom={undefined} />
        {items}
      </Stack>
    </Drawer>
  </>);
}
