import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="miPhone">
      <Container>
        <Title>
          miPhone <Badge>2019</Badge>
        </Title>
        <p>
          Web service that allows you to compare information such as price, OS,
          size, weight, appearance, display, performance, camera, battery, etc.
          of a smartphone
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://miphone.herokuapp.com/" target="_blank">
              https://miphone.herokuapp.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            NodeJs, AWS S3, MongoDB
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/miPhone" target="_blank">
              https://github.com/rheeeuro/miPhone
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/miphone.png" alt="miphone" />
        <Paragraph>
          This is a smartphone specification comparison web service conducted as
          a database class project in 2019. It was a project of two people, and
          it was a project to devise a basic UI and framework using Microsoft
          Access, but I wanted to create a real web service. I made a suggestion
          to the professor, and based on Express, Node.js, and MongoDB, I
          created a web service.
        </Paragraph>
        <Paragraph>
          If you register with your smartphone and comment function with
          feedback from your peers, Added specification detail search function
          to change default profile image. Through a vote after the project
          announcement, It has been selected as an excellent project.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
