import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="IceLand">
      <Container>
        <Title>
          IceLand <Badge>2022</Badge>
        </Title>
        <p>로블록스 게임</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Game</Meta>
            <Link
              href="https://www.roblox.com/games/8942542949/IceLand"
              target="_blank"
            >
              https://www.roblox.com/games/8942542949/IceLand
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Roblox
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Text as="b">Lua</Text>, Roblox Studio
          </ListItem>
        </List>
        <WorkImage src="/images/iceland.png" alt="iceland" />
        <Paragraph>
          2022년 3명이서 진행한 로블록스 게임입니다.
          <br />
          마음이 맞는 고등학교 친구와 지인 총 3명이서 진행했으며,{" "}
          <Text as="b">
            팀장으로서 전체적인 게임 기획 및 개발, 일정 조율
          </Text>{" "}
          등을 담당했습니다.
          <br />
          <br />
          일정기간마다 디스코드 회의를 진행해 게임기획, 장애물 및 스킬 디자인
          등을 논의했으며, <Text as="b">Lua</Text>언어 기반으로 스터디를 진행한
          뒤 구현했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
