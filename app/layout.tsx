// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, Container, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { HeaderSearch } from '@/components/template/Header';

export const metadata = {
  title: 'Films App',
  description: 'Films information using TMDB API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <HeaderSearch />
          <Container size={"md"}>
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
