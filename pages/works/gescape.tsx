import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="G-Escape">
      <Container>
        <Title>
          G-Escape <Badge>2020</Badge>
        </Title>
        <p>3D/VR Room Escape Game</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://g-escape.netlify.app/" target="_blank">
              https://g-escape.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Javascript, Three.js
          </ListItem>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://youtu.be/152jPOcxpz4" target="_blank">
              https://youtu.be/152jPOcxpz4
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/g-escape" target="_blank">
              https://github.com/rheeeuro/g-escape
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/gescape.png" alt="gescape" />
        <Paragraph>
          This is a 3D VR room escape game conducted as a computer graphics
          class project in 2020. It was conducted as a team of 3 people and
          created the game using Three.js. Use Ray casting to give a hint when
          you click an object. You can get it and escape the room when you get
          the key. I can play in English and Korean. If VR support is available
          using WebXR, the game can also be played in VR mode. The placement of
          objects, the story of the game, hints, etc. It&apos;s a project that I
          produced with my own ideas and thought about various aspects of
          content.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
