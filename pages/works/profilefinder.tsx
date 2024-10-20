import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="Profile-Finder">
      <Container>
        <Title>
          Profile-Finder <Badge>2021</Badge>
        </Title>
        <WorkImage src="/images/profilefinder.png" alt="profilefinder" />
        <Heading as="h4" size="md">
          &nbsp; 딥러닝 키워드 필터링 시스템을 이용한 배우 구인구직 서비스
          플랫폼
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://profile-finder0.herokuapp.com/" target="_blank">
              https://profile-finder0.herokuapp.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web / Mobile Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Text as="b">
              NodeJS, Google Teachable Machine, AWS S3, MongoDB
            </Text>
          </ListItem>
          <ListItem>
            <Meta>Wiki</Meta>
            <Link
              href="https://github.com/rheeeuro/profile-finder/wiki"
              target="_blank"
            >
              https://github.com/rheeeuro/profile-finder/wiki
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Presentation</Meta>
            <Link href="https://youtu.be/rwmUBARqEDY" target="_blank">
              https://youtu.be/rwmUBARqEDY
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              href="https://github.com/rheeeuro/profile-finder"
              target="_blank"
            >
              https://github.com/rheeeuro/profile-finder
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <Paragraph>
          2019년부터 3학기에 걸쳐 4명의 팀으로 진행한 졸업작품 프로젝트입니다.
          <br />
          2017년 뮤직비디오 제작했던 경험을 바탕으로 배우 지원 프로필을
          선별하는데 너무 많은 시간이 걸리는 문제점을 개선하고자{" "}
          <Text as="b">딥러닝 키워드 필터링 서비스를 기획</Text>했습니다.
          <br />첫 학기에는 영상 관계자분들께{" "}
          <Text as="b">설문조사를 통해 키워드를 선정</Text>하고, 키워드 별
          연예인 사이트 자료를 바탕으로 <Text as="b">이미지를 크롤링</Text>해
          <Text as="b">모델 구현 및 정확도 개선</Text>을 진행했습니다.
          <br />
          두번째 학기에는 <Text as="b">테스트 사이트를 제작</Text>했고, 마지막
          학기에는 원래 목표한대로{" "}
          <Text as="b">배우 구인구직 웹서비스를 제작</Text>했습니다.
          <br />
          모델에는 <Text as="b">Google Teachable Machine</Text>을 이용했고,{" "}
          <Text as="b">Node.js, Express, MongoDB, AWS S3</Text>로 웹서비스를
          제작했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
