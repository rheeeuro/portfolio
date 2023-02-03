import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import { Router } from "next/router";
import Room from "../room";
import NoSsr from "../noSsr";
interface MainProps {
  children: React.ReactNode;
  router: Router;
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rhee Euro's portfolio homepage" />
        <meta name="author" content="Rhee Euro" />
        <title>Rhee Euro - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={16}>
        <NoSsr>
          <Room />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
