import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="Profile-Finder">
      <Container>
        <Title>
          Profile-Finder <Badge>2021</Badge>
        </Title>
        <p>
          Actor job search service with deep learning keyword filtering function
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://profile-finder0.herokuapp.com/" target="_blank">
              https://profile-finder0.herokuapp.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Web / Mobile Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            NodeJS, Google Teachable Machine, AWS S3, MongoDB
          </ListItem>
          <ListItem>
            <Meta>Wiki</Meta>
            <Link
              href="https://github.com/rheeeuro/profile-finder/wiki"
              target="_blank"
            >
              https://github.com/rheeeuro/profile-finder/wiki
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Presentation</Meta>
            <Link href="https://youtu.be/rwmUBARqEDY" target="_blank">
              https://youtu.be/rwmUBARqEDY
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              href="https://github.com/rheeeuro/profile-finder"
              target="_blank"
            >
              https://github.com/rheeeuro/profile-finder
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/profilefinder.png" alt="profilefinder" />
        <Paragraph>
          It is a graduation work project conducted by four teams over three
          semesters from the first semester of 2019 to the first semester of
          2021. Based on my experience in producing music videos in 2017, I want
          to improve the problem that it takes too much time to select actor
          support profiles. We planned a deep learning keyword filtering
          service. In the first semester, the video staff will select keywords
          through a survey and crawl images based on celebrity site data for
          each keyword. Model implementation and accuracy improvement were
          carried out. In the second semester, I created a test site. In the
          last semester, we created a web service for actors and actresses as
          originally planned. The model uses Google Teachable Machine. We
          created web services with Node.js, Express, MongoDB, and AWS S3.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
