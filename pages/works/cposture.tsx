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
    <Layout title="C-posture">
      <Container>
        <Title>
          C-posture <Badge>2020</Badge>
        </Title>
        <WorkImage src="/images/cposture.png" alt="cposture" />
        <Heading as="h4" size="md">
          &nbsp; 실시간 웹캠으로 사용자의 자세를 측정하고 스트레칭을
          가이드해주는 서비스
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://c-posture.herokuapp.com/" target="_blank">
              https://c-posture.herokuapp.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            NodeJs,{" "}
            <Text as="b">Tensorflow poseNet, Google Teachable Machine</Text>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/c-posture" target="_blank">
              https://github.com/rheeeuro/c-posture
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <Paragraph>
          2020년 소프트웨어공학 프로젝트로 진행한 자세 교정 및 스트레칭 트레이너
          서비스 입니다.
          <br />
          3명의 팀으로 진행했고 <Text as="b">ml5</Text>와{" "}
          <Text as="b">TensorFlow poseNet</Text>을 이용해 실시간으로 사용자의
          Skeleton 자세를 측정하고, <Text as="b">Google Teachable Machine</Text>
          을 이용해 스트레칭 자세를 교정합니다.
          <br />
          <Text as="b">개발의 전반적인 부분</Text>을 도맡아 했으며 직접 스트레칭
          자세를 캡처해가며 학습시켜 사이트에 적용시켰습니다.
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          처음으로 프로젝트를 진행하면서 <Text as="b">Model</Text>과{" "}
          <Text as="b">Pattern</Text>을 구상하고, 유닛테스트 등 절차 위주로
          레포트를 작성하고 진행해본 프로젝트였습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
