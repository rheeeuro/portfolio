import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="G-Flight">
      <Container marginBottom={10}>
        <Title>
          G-Flight <Badge>2019</Badge>
        </Title>
        <p>HTML Canvas를 이용한 쿼드트리 시각화 비행기 게임</p>
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
            Javascript, PHP, MariaDB
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/g-flight" target="_blank">
              https://github.com/rheeeuro/g-flight
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/gflight.png" alt="gflight" />
        <Paragraph>
          2019년 자료구조 수업 프로젝트로 진행한 HTML Canvas 게임입니다.
          수업시간에 배운 개념인 Quad Tree 및 Prim algorithm 시각화 비행기
          게임입니다. 2학년 학생 4명의 팀으로 진행했고 대부분의 학생들이
          C언어밖에 배우지 못한 상황이어서 구현의 전반적인 부분을 도맡아
          진행하였습니다.
        </Paragraph>
        <Paragraph>
          프로젝트 발표 후 우수 프로젝트로 선정되어 소프트웨어 학과의 날
          교수님들과 많은 기업체 대표님들, 관계자분들 앞에서 발표할 수 있는
          기회를 얻게 되었고, 교수님의 권유로 상점 기능, 랭킹 시스템을
          추가했습니다. 바닐라 자바스크립트만으로 모든 게임의 기능, UI, 상점을
          구현했으며 랭킹은 MariaDB와 PHP로 구현했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
