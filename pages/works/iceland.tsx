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
          캐릭터를 빙판 위에서 조작해 장애물을 피하고 탐험하는 로블록스
          게임입니다.
          <br />
          평소에 로블록스에 관심이 있던 지인 두 명을 섭외해 3명의 팀으로
          진행했으며,{" "}
          <Text as="b">팀장으로 전체적인 게임 기획 및 일정 조율을 진행</Text>
          했습니다.
          <br /> 게임 개발을 기획하던 중 로블록스 스튜디오를 통해 쉽게{" "}
          <Text as="b">멀티플레이와 크로스플랫폼</Text>을 구현할 수 있어 개발 및
          저장소 관리에 로블록스 스튜디오를 이용했습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
