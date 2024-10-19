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
    <Layout title="Comeet">
      <Container>
        <Title>
          Comeet <Badge>2024</Badge>
        </Title>
        <WorkImage src="/images/comeet.png" alt="comeet" />
        <Heading as="h4" size="md">
          &nbsp; 개발자들을 위한 스터디 플랫폼
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <ListItem>
              <Meta>Period</Meta>
              2024.01 - 2024.02
            </ListItem>
            <ListItem>
              <Meta>Headcount</Meta>6명
            </ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/rheeeuro/comeet" target="_blank">
              https://github.com/rheeeuro/comeet
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>UCC</Meta>
            <Link
              href="https://youtu.be/o_lnhzbL6dk?si=Y5I8S3jYPyvVFyS8"
              target="_blank"
            >
              https://youtu.be/o_lnhzbL6dk?si=Y5I8S3jYPyvVFyS8
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <Link
              href="https://youtu.be/Zgp87zizAjQ?si=YUv1EXgSzTj5zT1V"
              target="_blank"
            >
              https://youtu.be/Zgp87zizAjQ?si=YUv1EXgSzTj5zT1V
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Intro</Meta>
            <br />
            개발자들이 스터디를 구할 때 일반적으로 여러 커뮤니티를 이용하여
            스터디를 모집하고 스터디를 디스코드에서 진행하게 됩니다. 코밋은 이
            <Text as="b">두 플랫폼을 통합</Text>하고, 공유코드 편집과 메타데이터
            등 <Text as="b">개발 친화적인 기능들을 포함한 스터디 플랫폼</Text>
            입니다.
          </ListItem>
          <br />
          <ListItem>
            <Meta>Role</Meta>
            <br />- <Text as="b">WebRTC</Text>를 활용한 화상공유(캠 공유,
            화면공유, 음성공유) 및 코드 공유 편집기능 구현 <br />-{" "}
            <Text as="b">WebSocket</Text>을 활용한 마크다운 채팅 및 스터디 방
            접속시 정보 변경 이벤트 구현 <br />- Three.js와 GLSL를 활용한
            메인페이지 구현 <br />- 전반적인 프론트엔드 설계, 리팩토링 및 UI
            개선, API 연동
          </ListItem>
          <br />
          <ListItem>
            <Meta>Stack</Meta>
            <br />- <Text as="b">스터디방 관련 기능:</Text> Openvidu, Stomp,
            SockJS, Monaco editor <br />- <Text as="b">프론트엔드:</Text>{" "}
            React(v18), Typescript <br />- <Text as="b">스타일링:</Text>{" "}
            React-markdown, Tailwind-styled-components <br />-{" "}
            <Text as="b">상태및 데이터 관리:</Text> Redux-toolkit, MongoDB
          </ListItem>
          <br />
          <ListItem>
            <Meta>Retrospect</Meta>
            <br />- 코드 공유 편집 기능으로 Yjs를 많이 사용하는데 Yjs 대신
            WebRTC에 사용한{" "}
            <Text as="b">
              Openvidu를 최대한 활용해보고자 고민했고 Openvidu의 메시징 기능을
              Monaco Editor의 편집 이벤트로 커스텀하여
            </Text>{" "}
            코드 공유편집을 구현했습니다. <br />- 스터디 방 입장 시 방이나
            채널의 변경 정보가 입장한 인원들에게 실시간으로 반영되게 하기 위해
            Poling, Message Queue, Kafka 도입 등 여러 방식을 고민하던 중 채팅에
            이미 사용하고 있는{" "}
            <Text as="b">
              WebSocket을 활용해보자고 의견을 제시해 방 정보 변경 이벤트를 구현
            </Text>
            했습니다. <br />- 프로젝트에서{" "}
            <Text as="b">새로운 기술 및 기능 구현의 기술검증</Text>을 맡았는데,
            기술에 대한 분석과 제한 된 일정 및 인원에 따른{" "}
            <Text as="b">기술 도입여부를 판단하는 능력</Text>이 성장했다고
            생각합니다.
          </ListItem>
          <br />
          <ListItem>
            <Meta>Reward</Meta>
            <br /> <Text as="b">SSAFY 공통 프로젝트 우수상 (1위) 수상</Text>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
