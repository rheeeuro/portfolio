import Layout from "@/components/layout/article";
import { Title } from "@/components/work";
import { Badge, Container } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="G-Flight">
      <Container>
        <Title>
          G-Flight <Badge>2019</Badge>
        </Title>
        <p>sadadadsd</p>
      </Container>
    </Layout>
  );
};

export default Work;
