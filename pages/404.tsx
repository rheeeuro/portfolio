import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} textAlign="center">
        <Link href="/">
          <Button colorScheme="teal">Return to home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
