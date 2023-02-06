import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="G-Flight">
      <Container>
        <Title>
          G-Flight <Badge>2019</Badge>
        </Title>
        <p>Airplane games visualizing Quad Tree and Prim Algorithm</p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://g-flight.web.app/" target="_blank">
              https://g-flight.web.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Javascript, PHP, MariaDB
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/g-flight" target="_blank">
              https://github.com/rheeeuro/g-flight
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/gflight.png" alt="gflight" />
        <Paragraph>
          The 2019 data structure class project. HTML Canvas game. It&apos;s a
          Quad Tree and Primalgorithm visualization airplane game that I learned
          in class. It was conducted as a team of 4 second graders and most of
          the students only learned C language. The overall implementation has
          been undertaken.
        </Paragraph>
        <Paragraph>
          After the project presentation, it was selected as an excellent
          project, and I got an opportunity to present in front of professors,
          representatives of many companies, and officials on Software
          Department Day, and added store functions and ranking systems at the
          recommendation of the professor. Vanilla JavaScript alone has
          implemented the functions, UI, and stores of all games, and the
          ranking has been implemented in MariaDB and PHP.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
