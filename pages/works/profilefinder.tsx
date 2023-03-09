import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="Profile-Finder">
      <Container>
        <Title>
          Profile-Finder <Badge>2021</Badge>
        </Title>
        <p>딥러닝 키워드 필터링 시스템을 이용한 배우 구인구직 서비스 플랫폼</p>
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
            NodeJS, Google Teachable Machine, AWS S3, MongoDB
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
        <WorkImage src="/images/profilefinder.png" alt="profilefinder" />
        <Paragraph>
          2019년 1학기부터 2021년 1학기까지 3학기에 걸쳐 4명의 팀으로 진행한
          졸업작품 프로젝트입니다.
          <br />
          2017년 뮤직비디오 제작했던 경험을 바탕으로 배우 지원 프로필을
          선별하는데 너무 많은 시간이 걸리는 문제점을 개선하고자 딥러닝 키워드
          필터링 서비스를 기획했습니다.
          <br />첫 학기에는 영상 관계자분들께 설문조사를 통해 키워드를 선정하고,
          키워드 별 연예인 사이트 자료를 바탕으로 이미지를 크롤링해 모델 구현 및
          정확도 개선을 진행했습니다.
          <br />
          두번째 학기에는 테스트 사이트를 제작했고, 마지막 학기에는 원래
          목표한대로 배우 구인구직 웹서비스를 제작했습니다.
          <br />
          모델에는 Google Teachable Machine을 이용했고, Node.js, Express,
          MongoDB, AWS S3로 웹서비스를 제작했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
