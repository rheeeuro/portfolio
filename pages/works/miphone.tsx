import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="miPhone">
      <Container marginBottom={10}>
        <Title>
          miPhone <Badge>2019</Badge>
        </Title>
        <p>스마트폰 스펙 비교 사이트</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://miphone.herokuapp.com/" target="_blank">
              https://miphone.herokuapp.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Text as="b">NodeJs, AWS S3, MongoDB</Text>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/miPhone" target="_blank">
              https://github.com/rheeeuro/miPhone
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/miphone.png" alt="miphone" />
        <Paragraph>
          2019년 데이터베이스 수업 프로젝트로 진행한{" "}
          <Text as="b">스마트폰 스펙 비교 웹 서비스</Text>입니다.
          <br />
          2명의 팀으로 진행했고 Microsoft Access를 이용하여 기본적인 UI와 틀을
          구상해보는 프로젝트였지만 실제 웹서비스를 제작해보고 싶다고 교수님께
          건의 드렸고,{" "}
          <Text as="b">
            Express와 Node.js, MongoDB를 기반으로 웹서비스를 제작
          </Text>
          했습니다.
        </Paragraph>
        <Paragraph>
          동기들의 피드백으로 댓글 기능과 자신의 스마트폰으로 등록 시 기본
          프로필 이미지가 바뀌도록 설정, 스펙 상세 검색 기능을 추가했습니다.
          <br />
          프로젝트 발표 후 <Text as="b">투표를 통해 우수 프로젝트로 선정</Text>
          되었습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
