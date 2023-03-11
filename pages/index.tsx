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
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoMail,
  IoMailOutline,
} from "react-icons/io5";

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
          안녕하세요, 저는 프론트엔드 개발자 이유로 입니다.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              이유로 (Rhee Euro)
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
            저는 프론트엔드 개발자 이유로 입니다.
            <br /> 원활한 커뮤니케이션을 할 수 있는 기획자이자 개발자가 되고
            싶습니다.
            <br /> 저의 아이디어와 함께 향상 시킬 개발 실력으로 사람들의 삶에
            새로운 경험을 제공하는 서비스를 만들고 싶습니다.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                포트폴리오 보기
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
            서울 은평구 출생
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            <b>이화여자대학교 사범대학 부속이화금란고등학교</b> 졸업
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            <a
              href="http://gmeditec.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>지메디텍</b>
            </a>{" "}
            학부생연구원
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            <b>가천대학교</b> 소프트웨어학과 졸업
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            <a
              href="https://kakaoenterprise.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>카카오엔터프라이즈</b>
            </a>{" "}
            솔루션플랫폼팀 인턴
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>
          <Paragraph>
            개발, 영화감상, 영상편집, 게임, 그림그리기, 음악감상 등
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:rheeeuro@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  rheeeuro@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:eurohand@naver.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMailOutline} />}
                >
                  eurohand@naver.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/rheeeuro" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  rheeeuro
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
