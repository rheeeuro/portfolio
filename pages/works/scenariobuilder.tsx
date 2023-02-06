import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { Badge, Container, List, ListItem } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="ScenarioBuilder">
      <Container>
        <Title>
          ScenarioBuilder <Badge>2022</Badge>
        </Title>
        <p>
          A platform that allows the customer representative to directly
          implement the voice bot scenario.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            Web
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            React, Typescript, Spring Boot
          </ListItem>
        </List>
        <WorkImage src="/images/scenarioBuilder.png" alt="scenariobuilder" />
        <Paragraph>
          From December 2021, as an intern at Kakao Enterprise&apos;s solution
          platform team, I participated in the KICC DA Framework project. We
          have supported SaaS distribution so that the customer&apos;s voice bot
          scenario can be implemented by the customer&apos;s representative
          without coding. The overall design and implementation of the front end
          was undertaken. I was responsible for the backend of the customer
          scenario test. We used Spring boot for back-end, React and TypeScript
          for front-end.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
