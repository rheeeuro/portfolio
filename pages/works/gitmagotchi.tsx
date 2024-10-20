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
    <Layout title="Gitmagotchi">
      <Container>
        <Title>
          Gitmagotchi <Badge>2024</Badge>
        </Title>
        <WorkImage src="/images/gitmagotchi.png" alt="comeet" />
        <Heading as="h4" size="md">
          &nbsp; Git Commit 기반 캐릭터 키우기 프로젝트
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <ListItem>
              <Meta>Period</Meta>
              2024.04 - 2024.05
            </ListItem>
            <ListItem>
              <Meta>Headcount</Meta>5명
            </ListItem>
            <Meta>GitHub</Meta>
            <Link href="https:/github.com/rheeeuro/gitmagotchi" target="_blank">
              https:/github.com/rheeeuro/gitmagotchi
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>UCC</Meta>
            <Link
              href="https:/youtu.be/w9rcBkjkh_k?si=2DhdjvvC3QBGiSmP"
              target="_blank"
            >
              https:/youtu.be/w9rcBkjkh_k?si=2DhdjvvC3QBGiSmP
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <Link
              href="https:/youtu.be/wR1I_SgJ_X4?si=jJiT-Hss6wcS1s78"
              target="_blank"
            >
              https:/youtu.be/wR1I_SgJ_X4?si=jJiT-Hss6wcS1s78
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>DevLog</Meta>
            <Link
              href="https://chocolate-mint-5ac.notion.site/92d7679a0bb44aeba7cb5922cfb4b403"
              target="_blank"
            >
              https://chocolate-mint-5ac.notion.site/92d7679a0bb44aeba7cb5922cfb4b403
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Intro</Meta>
            <br />
            <Text as="b">AWS Korea와의 기업연계 프로젝트</Text>로 깃허브 1일 1
            커밋을 생활화하기 위해 깃허브와 연동시켜{" "}
            <Text as="b">커밋 기반으로 밥을 먹여 성장하는 다마고치</Text> 게임
            서비스입니다. <Text as="b">AWS Bedrock을 통해 생성형 AI</Text>가
            생성한 이미지의 캐릭터를 키울 수 있고 생성형 AI가 생성한 텍스트로
            캐릭터와 대화도 나눌 수 있습니다.
          </ListItem>
          <br />
          <ListItem>
            <Meta>Role</Meta>
            <br />- <Text as="b">React, Typescript</Text>를 활용한 반응형
            프론트엔드 구현 <br />- <Text as="b">GitLab Runner</Text>를 활용한
            AWS S3, CloudFront 자동배포 구현 <br />-{" "}
            <Text as="b">Cognito를 활용한 Github 소셜로그인</Text> 및 인증/인가
          </ListItem>
          <br />
          <ListItem>
            <Meta>Stack</Meta>
            <br />- <Text as="b">프론트엔드:</Text> React, Typescript, Recoil,
            React-Query <br />- <Text as="b">배포:</Text> AWS S3, AWS
            CloudFront, AWS Route53, GitLab Runner <br />-{" "}
            <Text as="b">인증/인가:</Text> AWS Cognito, SST, aws-amplify,
            amazon-congito-identity-js
          </ListItem>
          <br />
          <ListItem>
            <Meta>Retrospect</Meta>
            <br />- 일반적으로 프론트엔드 배포를 진행할 때 EC2 서버에 올리게
            되는데 이번에는{" "}
            <Text as="b">
              S3에 빌드된 파일을 올리고 CloudFront로 배포해본 경험
            </Text>
            이 새로웠고{" "}
            <Text as="b">
              GitLab CI/CD 와 AWS-cli를 활용한 자동배포 스크립트
            </Text>
            도 새롭게 작성해 볼 수 있었습니다. <br />- Cognito를 활용한 로그인
            구현도 새로웠고{" "}
            <Text as="b">
              Cognito 유저풀에 깃허브 유저를 추가하기 위해 커스텀
            </Text>
            했으며{" "}
            <Text as="b">
              토큰을 헤더에 넣어주기 위해 aws-amplify 이외에 amazon cognito
              identity js도 활용
            </Text>
            하여 인증/인가를 구현했습니다.
          </ListItem>
          <br />
          <ListItem>
            <Meta>Reward</Meta>
            <br /> <Text as="b">AWS 기업연계 멘토링을 통한</Text> 설계 및 구조
            개선
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
