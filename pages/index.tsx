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
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

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
          Hello, I&apos;m a frontend developer based in Korea!
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
              src="/images/euro.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph className="indent-0">
            I&apos;m Euro Rhee, a passionate frontend developer.
            <br /> I like to receive feedback and improve the projects.
            <br /> I want to be a planner and developer who can communicate
            well.
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
            Hobby
          </Heading>
          <Paragraph>
            Development, Movie, Edit Video, Game, Drawing, Music
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/rheeeuro" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @rheeeuro
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/2.euro" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @2.euro
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
