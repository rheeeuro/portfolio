import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="GStore">
      <Container>
        <Title>
          GStore <Badge>2020</Badge>
        </Title>
        <p>
          An app that allows you to search and favorite Gyeonggi local currency
          merchants.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>App store</Meta>
            <Link
              href="https://play.google.com/store/apps/details?id=gachon.mp.gstore&pli=1"
              target="_blank"
            >
              https://play.google.com/store/apps/details?id=gachon.mp.gstore&pli=1
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            Android
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Java, Android Studio
          </ListItem>
          <ListItem>
            <Meta>Trailer</Meta>
            <Link href="https://youtu.be/37l7wXCGJcQ" target="_blank">
              https://youtu.be/37l7wXCGJcQ
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/rheeeuro/gstore" target="_blank">
              https://github.com/rheeeuro/gstore
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/gstore.png" alt="gstore" />
        <Paragraph>
          It was conducted as a 2020 mobile programming class project and is an
          application that allows you to search and favorite Gyeonggi local
          currency merchants. It was a team of 4 people. I produced an Android
          app using Gyeonggi Data Dream API and Kakao Map API, and I was able to
          experience uploading it to the Play Store myself.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
