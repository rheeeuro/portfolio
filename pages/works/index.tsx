import { WorkGridItem } from "@/components/gridItem";
import Section from "@/components/section";
import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

import thumbGitmagotchi from "@/public/images/gitmagotchi.png";
import thumbJoaopenapi from "@/public/images/joaopenapi.png";
import thumbComeet from "@/public/images/comeet.png";
import thumbIceLand from "@/public/images/iceland.png";
import thumbScenarioBuilder from "@/public/images/scenariobuilder.png";
import thumbSpineSlicer from "@/public/images/spineslicer.png";
import thumbProfileFinder from "@/public/images/profilefinder.png";
import thumbGEscape from "@/public/images/gescape.png";
import thumbGStore from "@/public/images/gstore.png";
import thumbJoyrun from "@/public/images/joyrun.png";
import thumbCPosture from "@/public/images/cposture.png";
import thumbMiPhone from "@/public/images/miphone.png";
import thumbGFlight from "@/public/images/gflight.png";
import Layout from "@/components/layout/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="gitmagotchi"
              title="Gitmagotchi"
              thumbnail={thumbGitmagotchi}
            >
              Git Commit 기반 캐릭터 키우기 프로젝트
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="joaopenapi"
              title="JOA Open API"
              thumbnail={thumbJoaopenapi}
            >
              핀테크 프로젝트를 위한 가상은행 OPEN API
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="comeet" title="Comeet" thumbnail={thumbComeet}>
              개발자들을 위한 스터디 플랫폼
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="iceland" title="IceLand" thumbnail={thumbIceLand}>
              로블록스 어드벤처 게임
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="scenariobuilder"
              title="ScenarioBuilder"
              thumbnail={thumbScenarioBuilder}
            >
              고객사가 직접 보이스봇 시나리오를 생성, 편집할 수 있는 플랫폼
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="spineslicer"
              title="SpineSlicer"
              thumbnail={thumbSpineSlicer}
            >
              CT 데이터와 C-arm데이터를 한 번에 확인할 수 있는 척추 수술 보조용
              네이게이션 소프트웨어
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="profilefinder"
              title="Profile-Finder"
              thumbnail={thumbProfileFinder}
            >
              딥러닝 키워드 필터링 시스템을 이용한 배우 구인구직 서비스 플랫폼
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="gescape"
              title="G-Escape"
              thumbnail={thumbGEscape}
            >
              3D/VR 방탈출 게임
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="joyrun" title="JoyRun" thumbnail={thumbJoyrun}>
              Azure Kinect Depth Sensor를 활용해 발로 바닥 스크린의 UI를
              조작하는 전시회용 달리기 게임
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="gstore" title="GStore" thumbnail={thumbGStore}>
              경기 지역화폐 가맹점 찾기 어플
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Old Works
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="cposture"
              title="cPosture"
              thumbnail={thumbCPosture}
            >
              실시간 웹캠으로 사용자의 자세를 측정하고 스트레칭을 가이드해주는
              서비스
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="miphone" title="miPhone" thumbnail={thumbMiPhone}>
              스마트폰 스펙 비교 사이트
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="gflight"
              title="G-Flight"
              thumbnail={thumbGFlight}
            >
              HTML Canvas를 이용한 쿼드트리 시각화 비행기 게임
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
