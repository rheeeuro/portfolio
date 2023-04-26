import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="GStore">
      <Container>
        <Title>
          GStore <Badge>2020</Badge>
        </Title>
        <p>경기 지역화폐 가맹점 찾기 어플</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>App store</Meta>
            <Link
              href="https://play.google.com/store/apps/details?id=gachon.mp.gstore&pli=1"
              target="_blank"
            >
              https://play.google.com/store/apps/details?id=gachon.mp.gstore&pli=1
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Android
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Java, <Text as="b">Android Studio</Text>
          </ListItem>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://youtu.be/37l7wXCGJcQ" target="_blank">
              https://youtu.be/37l7wXCGJcQ
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/gstore" target="_blank">
              https://github.com/rheeeuro/gstore
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/gstore.png" alt="gstore" />
        <Paragraph>
          2020년 모바일 프로그래밍 프로젝트로 진행했으며 경기지역화폐 가맹점들을
          검색하고 즐겨찾기 할 수 있는 어플입니다.
          <br />
          <br />
          4명의 팀으로 진행했으며, <Text as="b">경기데이터드림 API</Text>와{" "}
          <Text as="b">카카오 맵 API</Text>를 이용했고,{" "}
          <Text as="b">Android Studio</Text>를 이용해 앱을 제작했습니다.
          <br />
          <br />
          <Text as="b">Google Play 스토어에 배포</Text>하는 경험을 해볼 수
          있었습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
