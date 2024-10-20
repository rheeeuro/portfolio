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
    <Layout title="G-Flight">
      <Container marginBottom={10}>
        <Title>
          G-Flight <Badge>2019</Badge>
        </Title>
        <WorkImage src="/images/gflight.png" alt="gflight" />
        <Heading as="h4" size="md">
          &nbsp; HTML Canvas를 이용한 쿼드트리 시각화 비행기 게임
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://g-flight.web.app/" target="_blank">
              https://g-flight.web.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Text as="b">Javascript</Text>, PHP, MariaDB
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/g-flight" target="_blank">
              https://github.com/rheeeuro/g-flight
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <Paragraph>
          2019년 자료구조 프로젝트로 시작한 Quad Tree 및 Prim algorithm 시각화
          비행기 게임입니다.
          <br />
          2학년 학생 4명의 팀으로 진행했고{" "}
          <Text as="b">게임 기획과 장애물 디자인 및 구현의 전반적인 부분</Text>
          을 도맡아 진행하였습니다.
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          프로젝트 발표 후 <Text as="b">우수 프로젝트</Text>로 선정되어
          <Text as="b">소프트웨어 학과의 날</Text> 교수님들과 많은 기업체
          대표님들, 관계자분들 앞에서 발표할 수 있는 기회를 얻게 되었고, 이후
          상점 기능, 랭킹 시스템을 추가했습니다.
          <br />
          <br />
          <Text as="b">HTML Canvas</Text>로 모든 게임의 기능, UI, 상점을 구현
          했으며 랭킹은 <Text as="b">MariaDB</Text>와 <Text as="b">PHP</Text>로
          구현했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
