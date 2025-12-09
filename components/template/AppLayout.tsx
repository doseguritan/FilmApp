"use client";

import { AppShell, AppShellHeader, AppShellMain, Container } from "@mantine/core";
import { HeaderSearch } from "./Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      header={{height: 60}}
    >
      <AppShellHeader bg={'var(--mantine-primary-color-filled)'}>
        <HeaderSearch />
      </AppShellHeader>
      <AppShellMain>
        <Container size={"xl"}>{children}</Container>
      </AppShellMain>
    </AppShell>
  );
}
