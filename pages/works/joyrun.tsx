import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="JoyRun">
      <Container>
        <Title>
          JoyRun <Badge>2020</Badge>
        </Title>
        <p>
          An exhibition game that allows users to run directly to avoid
          obstacles and manipulate the UI of the floor projector with their
          feet.
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
          This is a project conducted by an industry-academic cooperation intern
          in the summer of 2020, and we created a game that scans a human body
          in 3D with Azure Kinect&apos;s Depth Sensor to avoid obstacles by
          running directly without much manipulation. It was conducted as a team
          of 3 people and made using Unity. I was in charge of linking with
          sensors and improving recognition speed, overall development of games,
          linking coordinates with floor UI, and managing GitHub. content.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
