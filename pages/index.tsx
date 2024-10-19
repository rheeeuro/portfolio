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
              src="/images/euro.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph className="indent-0">
            저는 프론트엔드 개발자 <b>이유로</b> 입니다.
            <br /> 오픈소스나 다른 사람의{" "}
            <b>코드를 빠르게 이해하고 분석하는 능력</b>을 바탕으로 이외의{" "}
            <b>다양한 영역에서도 유연하게 작업</b>할 수 있습니다.
            <br /> <b>시각적으로 매력적인 웹 경험</b>을 디자인하고 개발하는 것을
            즐기며 개발한 프로젝트를 <b>피드백 받아보고 개선하는 일</b>을
            좋아합니다.
            <br /> 개발자로서 끊임없이 <b>새로운 기술을 배우는 것</b>에 열정이
            가득하며, 이를 <b>팀과 공유하며 함께 성장</b>하고 싶습니다.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                포트폴리오 바로가기
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
            <BioYear>2020</BioYear>
            <a
              href="https://www.joyfun.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>조이펀 (JoyFun)</b>
            </a>{" "}
            산학협력인턴
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            <a
              href="http://gmeditec.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>지메디텍 (Gmeditec)</b>
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
              <b>카카오엔터프라이즈(Kakaoenterprise)</b>
            </a>{" "}
            솔루션플랫폼팀 인턴
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            <a
              href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>삼성소프트웨어아카테미 (SSAFY)</b> 자바 전공반
            </a>
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            <a
              href="https://www.nethru.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>넷스루 (Nethru)</b> 프론트엔드 개발자
            </a>
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
              <Link href="mailto:eurohand@naver.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
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
