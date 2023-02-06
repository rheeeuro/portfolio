import { WorkGridItem } from "@/components/gridItem";
import Section from "@/components/section";
import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

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
              id="scenariobuilder"
              title="ScenarioBuilder"
              thumbnail={thumbScenarioBuilder}
            >
              A platform that allows the customer representative to directly
              implement the voice bot scenario.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="spineslicer"
              title="SpineSlicer"
              thumbnail={thumbSpineSlicer}
            >
              Software that uses two types of sensors simultaneously to match CT
              and C-arm to assist spinal surgery
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="profilefinder"
              title="Profile-Finder"
              thumbnail={thumbProfileFinder}
            >
              Actor job search service with deep learning keyword filtering
              function
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="gescape"
              title="G-Escape"
              thumbnail={thumbGEscape}
            >
              3D/VR Room Escape Game
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="joyrun" title="JoyRun" thumbnail={thumbJoyrun}>
              An exhibition game that allows users to run directly to avoid
              obstacles and manipulate the UI of the floor projector with their
              feet.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="gstore" title="GStore" thumbnail={thumbGStore}>
              An app that allows you to search and favorite Gyeonggi local
              currency merchants.
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
              Web service that uses Webcam to measure posture in real time and
              coach stretching.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="miphone" title="miPhone" thumbnail={thumbMiPhone}>
              Web service that allows you to compare information such as price,
              OS, size, weight, appearance, display, performance, camera,
              battery, etc. of a smartphone
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="gflight"
              title="G-Flight"
              thumbnail={thumbGFlight}
            >
              Airplane games visualizing Quad Tree and Prim Algorithm
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
