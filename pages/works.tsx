import { WorkGridItem } from "@/components/gridItem";
import Section from "@/components/section";
import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

import thumbScenarioBuilder from "../public/images/scenarioBUilder.png";
import thumbSpineSlicer from "../public/images/spineSlicer.png";
import thumbProfileFinder from "../public/images/profileFinder.png";
import thumbGEscape from "../public/images/gEscape.png";
import thumbGStore from "../public/images/gStore.png";
import thumbJoyrun from "../public/images/joyrun.png";
import thumbCPosture from "../public/images/cPosture.png";
import thumbMiPhone from "../public/images/miPhone.png";
import thumbGFlight from "../public/images/gFlight.png";
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
              id="scenarioBuilder"
              title="ScenarioBuilder"
              thumbnail={thumbScenarioBuilder}
            >
              시나리오빌더 설명
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="spineSlicer"
              title="SpineSlicer"
              thumbnail={thumbSpineSlicer}
            >
              척추수술모듈 설명
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="profileFinder"
              title="Profile-Finder"
              thumbnail={thumbProfileFinder}
            >
              프로필파인더 설명
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="gescape"
              title="G-Escape"
              thumbnail={thumbGEscape}
            >
              gescape 설명
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="gstore" title="GStore" thumbnail={thumbGStore}>
              gstore 설명
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="joyrun" title="JoyRun" thumbnail={thumbJoyrun}>
              joyrun 설명
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
              id="cPosture"
              title="cPosture"
              thumbnail={thumbCPosture}
            >
              cposture 설명
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="miPhone" title="miPhone" thumbnail={thumbMiPhone}>
              miphone 설명
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="gflight"
              title="G-Flight"
              thumbnail={thumbGFlight}
            >
              gflight 설명
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
