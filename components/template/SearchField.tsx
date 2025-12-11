'use client';

import { CloseButton, Input, InputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function SearchField({ handleSearch, ...props }: Props) {
  const [searchValue, setSearchValue] = useState('');
  return <Input
    placeholder='Search films...'
    leftSection={<IconSearch size={16} stroke={1.5} />}
    visibleFrom="xs"
    rightSectionPointerEvents="all"
    rightSection={
      <CloseButton
        onClick={() => setSearchValue('')}
        style={{ display: searchValue ? undefined : 'none' }}
      />
    }
    value={searchValue}
    onChange={(event) => setSearchValue(event.currentTarget.value)}
    {...props}
    onKeyDown={e => handleSearch(e, searchValue, setSearchValue)}
  />
}

type Props = InputProps & {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>, value: string, resetValue: Dispatch<SetStateAction<string>>) => void;
}
