import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="Joaopenapi">
      <Container>
        <Title>
          Joa Open API <Badge>2024</Badge>
        </Title>
        <p>핀테크 프로젝트를 위한 가상은행 Open API</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link
              href="https://github.com/rheeeuro/joa-openapi"
              target="_blank"
            >
              https://github.com/rheeeuro/joa-openapi
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web, Android
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Text as="b">React-Native</Text>, React, Typescript, Next.js
          </ListItem>
        </List>
        <WorkImage src="/images/joaopenapi.png" alt="joaopenapi" />
        <Paragraph>
          2024년 6인 팀으로 진행한 핀테크 도매인 가상은행 OPEN API입니다.
          <br />
          삼성 청년 소프트웨어 아카데미에서 특화 도매인 프로젝트로 진행했으며,{" "}
          <Text as="b">프론트엔드 전체적인 개발와 앱 개발</Text> 등을
          담당했습니다.
          <br />
          <br />
          하나은행 현업 전문가 리뷰를 통해 설계를 피드백 받았으며, 대시보드를
          포함한 관리자 페이지와 데스트베드를 포함한 공식문서 페이지, 샘플
          프로젝트 테스트를 위한 은행 앱을 구현했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
