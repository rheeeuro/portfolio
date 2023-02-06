import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="C-posture">
      <Container>
        <Title>
          C-posture <Badge>2020</Badge>
        </Title>
        <p>
          Web service that uses Webcam to measure posture in real time and coach
          stretching.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://c-posture.herokuapp.com/" target="_blank">
              https://c-posture.herokuapp.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            NodeJs, Tensorflow poseNet, Google Teachable Machine
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/c-posture" target="_blank">
              https://github.com/rheeeuro/c-posture
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/cposture.png" alt="cposture" />
        <Paragraph>
          The 2020 software engineering class project This is a posture
          correction and stretching trainer service. It was conducted as a team
          of 3 people and measured the user&apos;s Skeleton posture in real time
          using ml5 and TensorFlow poseNet, and used Google Teachable Machine.
          Correct the stretching posture. I took charge of the overall part of
          coding, and I took a picture of the stretching posture myself, learned
          it, and applied it to the site.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
