import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="Comeet">
      <Container>
        <Title>
          Comeet <Badge>2024</Badge>
        </Title>
        <p>개발자들을 위한 스터디 플랫폼</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/rheeeuro/comeet" target="_blank">
              https://github.com/rheeeuro/comeet
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Text as="b">WebRTC (Openvidu)</Text>, WebSocket, React, Typescript,
            React-query, Redux-toolkit
          </ListItem>
        </List>
        <WorkImage src="/images/comeet.png" alt="comeet" />
        <Paragraph>
          2024년 6인 팀으로 삼성청년소프트웨어아카데미 공통 프로젝트로 진행한
          프로젝트입니다.
          <br />
          개발자들이 스터디를 구할 때 일반적으로 여러 커뮤니티를 이용하여
          스터디를 모집하고 스터디를 디스코드에서 진행하게 됩니다. 코밋은 이 두
          플랫폼을 통합하고, 공유코드 편집과 메타데이터 등 개발 친화적인
          기능들을 포함한 스터디 플랫폼입니다.
          <br />
          <Text as="b">
            기술 검증과 프론트엔드 고도화, WebRTC, WebSocket
          </Text>{" "}
          등을 담당했습니다.
          <br />
          <br />
          프로젝트 방법론에 대해 깊게 고민했으며,
          <Text as="b">우수 프로젝트(1위)로 수상할 수 있었습니다.</Text>
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
