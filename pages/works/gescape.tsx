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
    <Layout title="G-Escape">
      <Container>
        <Title>
          G-Escape <Badge>2020</Badge>
        </Title>
        <WorkImage src="/images/gescape.png" alt="gescape" />
        <Heading as="h4" size="md">
          &nbsp; 3D/VR 방탈출 게임
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://g-escape.netlify.app/" target="_blank">
              https://g-escape.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Javascript, <Text as="b">Three.js</Text>
          </ListItem>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://youtu.be/152jPOcxpz4" target="_blank">
              https://youtu.be/152jPOcxpz4
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/g-escape" target="_blank">
              https://github.com/rheeeuro/g-escape
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <Paragraph>
          2020년 컴퓨터 그래픽스 프로젝트로 진행한 3D VR 방 탈출 게임입니다.
          <br />
          3명의 팀으로 진행했으며 Three.js와 HTML Canvas를 이용하여 게임을
          제작했습니다.
          <br />
          <br />
          Ray casting을 이용하여 물체 클릭 시 힌트를 얻을 수 있으며 열쇠를 획득
          시 방을 탈출할 수 있습니다.
          <br />
          플레이 언어를 선택 할 수 있으며, WebXR을 이용하여 VR지원이 될 경우
          VR모드로도 게임을 진행할 수 있습니다.
          <br />
          오브젝트의 배치나 게임의 스토리, 힌트 등도 직접 아이디어를 내면서
          제작해 컨텐츠 적인 면에도 신경을 많이 쓴 프로젝트입니다.
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          오브젝트 오픈소스 사이트를 참고하여 장애물과 힌트를 배치시켰고 빛이나
          손전등 효과, 장애물, 벽과의 충돌이나 상호작용을 직접 구현해 보았으며
          교수님의 조언으로 <Text as="b">VR모드를 추가</Text>했습니다.
          <br />
          <br />
          <Text as="b">학과의 날 우수 프로젝트로 선정되어 발표및 수상</Text>
          하였으며 <Text as="b">학과 연구실 대표 프로젝트로 게시</Text>
          되었습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
