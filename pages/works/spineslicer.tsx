import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="SpineSlicer">
      <Container>
        <Title>
          SpineSlicer <Badge>2021</Badge>
        </Title>
        <p>
          Software that uses two types of sensors simultaneously to match CT and
          C-arm to assist spinal surgery
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            3D Slicer
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Python, C++
          </ListItem>
          <ListItem>
            <Meta>Thesis</Meta>
            <Link
              href="https://link.springer.com/chapter/10.1007/978-3-030-89029-2_47"
              target="_blank"
            >
              A Preliminary Work: Mixed Reality-Integrated Computer-Aided
              Surgical Navigation System for Paranasal Sinus Surgery Using
              Microsoft HoloLens 2<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/spineslicer.png" alt="spineslicer" />
        <Paragraph>
          In 2021, I was in charge of Gmeditec&apos;s development project
          through the Visualization and Mixed Reality Lab of Gachon University.
          Using Optical Sensor (OptiTrack) and Magnetic Sensor (NDI Aurora), It
          is a software that assists spinal surgery by matching the coordinates
          of surgical tools, CT, and C-arm. Made with Slicer and Python and
          referenced the matching module of SlicerIGT. We have developed a
          matching process between sensors and a matching algorithm between
          2D-3D and are registered as the third author of a related paper.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
