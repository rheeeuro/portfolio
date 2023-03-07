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
      <Text>페이지를 찾을 수 없습니다</Text>
      <Divider my={6} />
      <Box my={6} textAlign="center">
        <Link href="/">
          <Button colorScheme="teal">홈 화면으로 돌아가기</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
