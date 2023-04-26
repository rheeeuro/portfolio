import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { Badge, Container, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="ScenarioBuilder">
      <Container>
        <Title>
          ScenarioBuilder <Badge>2022</Badge>
        </Title>
        <p>고객사가 직접 보이스봇 시나리오를 생성, 편집할 수 있는 플랫폼</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Text as="b">React, Typescript, Spring Boot</Text>
          </ListItem>
        </List>
        <WorkImage src="/images/scenariobuilder.png" alt="scenariobuilder" />
        <Paragraph>
          2021년 12월부터 <Text as="b">카카오엔터프라이즈</Text>의 솔루션플랫폼
          팀 인턴으로{" "}
          <Text as="b">
            고객사 보이스봇의 시나리오를 직접 작성 및 편집할 수 있는 플랫폼
          </Text>
          을 개발했습니다.
          <br />
          전반적인 <Text as="b">프론트엔드를 기획 및 개발</Text>했으며, 보이스봇
          <Text as="b">시나리오 테스트 자동화 기능을 구현</Text>했습니다.
          <br />
          프론트엔드 자동배포 개선으로{" "}
          <Text as="b">배포 속도를 기존 대비 1/3으로 단축</Text>시켰고, 해당
          플랫폼 개발로 이전 프로세스 대비{" "}
          <Text as="b">보이스봇의 생산량이 70%가량 상승</Text>했습니다.
          <br />
          <br />
          Back-end에는 <Text as="b">Spring boot</Text>, Front-end에는{" "}
          <Text as="b">React</Text>와 <Text as="b">Typescript</Text>를
          이용했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
