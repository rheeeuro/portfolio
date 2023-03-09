import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="JoyRun">
      <Container>
        <Title>
          JoyRun <Badge>2020</Badge>
        </Title>
        <p>
          Azure Kinect Depth Sensor를 활용해 발로 바닥 스크린의 UI를 조작하는
          전시회용 달리기 게임
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            Windows
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Unity, C#
          </ListItem>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://youtu.be/lgxhdsTtIAQ" target="_blank">
              https://youtu.be/lgxhdsTtIAQ
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/joyrun" target="_blank">
              https://github.com/rheeeuro/joyrun
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/joyrun.png" alt="joyrun" />
        <Paragraph>
          2020년 여름 <Text as="b">JoyFun</Text>이라는 기업에서 산학협력
          인턴에서 진행한 프로젝트로,{" "}
          <Text as="b">Azure Kinect의 Depth Sensor</Text>로 사람의 몸을 3D로
          스캔해 별다른 조작법 없이 직접 달리면서 장애물을 피하는 게임을
          제작했습니다.
          <br />
          3명의 팀으로 진행하였고 <Text as="b">Unity</Text>를 이용해
          만들었습니다.
          <br />
          <Text as="b">
            센서와의 연동과 인식속도 개선, 게임의 전반적인 개발, 바닥 UI 발 좌표
            연동과 저장소 브랜치 관리 등
          </Text>
          을 맡았습니다.
        </Paragraph>
        <Paragraph>
          Unity로 개발해야 했으나 3명의 팀원 모두 C#과 Unity가 처음이라 스터디를
          진행하면서 프로젝트를 진행했습니다.
          <br />
          인턴을 진행하면서 기획서를 확인, 체크하고 GitHub의 Milestone 등의 계획
          절차를 배울 수 있는 계기가 되었습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
