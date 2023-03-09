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
            React, Typescript, Spring Boot
          </ListItem>
        </List>
        <WorkImage src="/images/scenariobuilder.png" alt="scenariobuilder" />
        <Paragraph>
          2021년 12월부터 <Text as="b">카카오엔터프라이즈</Text>의
          솔루션플랫폼팀 인턴으로 <Text as="b">KICC DA Framework 프로젝트</Text>
          에 참여하게 되었습니다.
          <br />
          고객사 보이스 봇의 시나리오를 고객사 담당자가 코딩 없이 구현할 수
          있도록 SaaS화 하여 배포할 수 있도록 지원하였습니다.
          <br />
          <Text as="b">전반적인 프론트엔드의 설계 및 구현</Text>을 도맡아
          진행하였고,{" "}
          <Text as="b">고객사의 시나리오 테스트 자동화 부분의 백엔드</Text>를
          담당했습니다.
          <br />
          <Text as="b">Back-end에는 Spring boot</Text>,{" "}
          <Text as="b">Front-end에는 React와 Typescript, Redux 등</Text>을
          이용했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
