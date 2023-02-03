import { BioSection, BioYear } from "@/components/bio";
import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.500")}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in Korea!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rhee Euro
            </Heading>
            <p>Frontend Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/euro.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I want to be a full-stack developer, PM and developer who can
            communicate well. I want to create a service that provides new
            experiences in people&apos;s lives with development skills to
            improve with my ideas. I want to improve my ability by interacting
            with team members in each sector, understanding different ideas, and
            thinking about what developers need to do to make a better service.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Seoul, Korea.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Graduate <b>Ewha Womans University HighSchool</b>
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at{" "}
            <a
              href="http://gmeditec.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Gmeditec</b>
            </a>{" "}
            as an undergraduate researcher
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Graduate <b>Gachon University</b> (Department of Software)
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at{" "}
            <a
              href="https://kakaoenterprise.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Kakao Enterprise</b>
            </a>{" "}
            Solution Platform Team as an intern
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥︎
          </Heading>
          <Paragraph>Development, Movie, Edit Video, Drawing, Music</Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
