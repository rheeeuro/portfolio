import Layout from "@/components/layout/article";
import { Title } from "@/components/work";
import { Badge, Container } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="GStore">
      <Container>
        <Title>
          GStore <Badge>2020</Badge>
        </Title>
        <p>sadadadsd</p>
      </Container>
    </Layout>
  );
};

export default Work;
