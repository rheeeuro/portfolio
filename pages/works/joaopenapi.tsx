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
    <Layout title="Joaopenapi">
      <Container>
        <Title>
          Joa Open API <Badge>2024</Badge>
        </Title>
        <WorkImage src="/images/joaopenapi.png" alt="joaopenapi" />
        <Heading as="h4" size="md">
          &nbsp; 핀테크 프로젝트를 위한 가상은행 Open API
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <ListItem>
              <Meta>Period</Meta>
              2024.03 - 2024.04
            </ListItem>
            <ListItem>
              <Meta>Headcount</Meta>6명
            </ListItem>
            <Meta>GitHub</Meta>
            <Link href="https:/github.com/rheeeuro/joa-openapi" target="_blank">
              https:/github.com/rheeeuro/joa-openapi
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Intro</Meta>
            <br />
            여러 부트캠프나 해커톤 등에서 핀테크 관련 주제를 선택할 때 활용할 수
            있는 API가 너무 제한적이라는 문제를 해결하기 위한{" "}
            <Text as="b">가상은행 OpenAPI</Text>
            입니다. 비전공자도 쉽게 사용할 수 있을만큼 간단한 사용방법과 API
            테스트베드를 포함한 <Text as="b">공식 문서 페이지</Text>, 더미데이터
            생성과 대시보드를 볼 수 있는 <Text as="b">관리자 페이지</Text>,
            은행코드 변경 을 통해 자신의 은행 앱으로 사용할 수 있는{" "}
            <Text as="b">샘플 은행 앱</Text>을 제공합니다.
          </ListItem>
          <br />
          <ListItem>
            <Meta>Role</Meta>
            <br />- <Text as="b">React-Native</Text>를 활용한 샘플 은행 앱 구현{" "}
            <br />- <Text as="b">Next.js</Text>를 활용한 관리자 페이지 구현{" "}
            <br />- 전반적인 프론트엔드 설계, 리팩토링 및 UI 개선, API 연동
          </ListItem>
          <br />
          <ListItem>
            <Meta>Stack</Meta>
            <br />- <Text as="b">관리자 페이지:</Text> Next.js, React-query,
            Recoil <br />- <Text as="b">샘플 은행 앱:</Text> React-Native,
            Typescript, React-Navigation <br />- <Text as="b">스타일링:</Text>
            Tailwind-styled-components
          </ListItem>
          <br />
          <ListItem>
            <Meta>Retrospect</Meta>
            <br />- 샘플 은행 앱을 만들기 위해{" "}
            <Text as="b">
              Flutter와 React-Native 중 어떤 스택을 사용할 지 고민
            </Text>
            했습니다. 평소 React-Native를 배워보고 싶기도 했고 자료들을 리서치
            해보며 <Text as="b">React-Native의 생태계나 커뮤니티</Text>가 훨씬
            잘 구축되어있고, 익숙한{" "}
            <Text as="b">Javascript, React 문법을 사용</Text>한다는 점에서
            React-Native를 선택하게 되었습니다. <br />- 은행 내부 데이터 구조를
            알 방법이 없어 여러 API들의 request나 response 형식만 보고 ERD나
            <Text as="b">내부 데이터 구조를 파악</Text>하는 것이 어려웠습니다.
            <Text as="b">전문가 리뷰를 통해 일부 피드백</Text>을 받고 구조를 더
            개선해 볼 수 있었습니다.
          </ListItem>
          <br />
          <ListItem>
            <Meta>Reward</Meta>
            <br /> - 삼성청년소프트웨어아카데미 프로젝트{" "}
            <Text as="b">베스트 멤버 선정</Text> <br />-{" "}
            <Text as="b">하나은행 현직 전문가 리뷰</Text>를 통한 설계 및 구조
            개선
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
