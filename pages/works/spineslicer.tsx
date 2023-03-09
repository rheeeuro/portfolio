import Layout from "@/components/layout/article";
import Paragraph from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";

const Work = () => {
  return (
    <Layout title="SpineSlicer">
      <Container>
        <Title>
          SpineSlicer <Badge>2021</Badge>
        </Title>
        <p>
          광학식, 자기식 센서를 동시에 이용해 CT 데이터와 C-arm데이터를 한 번에
          확인할 수 있는 척추 수술 보조용 네이게이션 소프트웨어
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            3D Slicer
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Python, C++
          </ListItem>
          <ListItem>
            <Meta>Thesis</Meta>
            <Link
              href="https://link.springer.com/chapter/10.1007/978-3-030-89029-2_47"
              target="_blank"
            >
              A Preliminary Work: Mixed Reality-Integrated Computer-Aided
              Surgical Navigation System for Paranasal Sinus Surgery Using
              Microsoft HoloLens 2<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/spineslicer.png" alt="spineslicer" />
        <Paragraph>
          2021년 가천대학교{" "}
          <Text as="b">VMR 랩(Visualization and Mixed Reality Lab)</Text>을 통해{" "}
          <Text as="b">Gmeditec의 개발 프로젝트</Text>를 맡아 진행하게
          되었습니다.
          <br />
          광학식 센서(OptiTrack)과 자기식 센서(NDI Aurora)를 이용하여 수술도구와
          CT, C-arm의 좌표를 정합 하여 척추 수술을 보조하는 소프트웨어입니다.
          <br />
          <Text as="b">3D Slicer와 Python</Text>으로 제작했고, SlicerIGT의 정합
          모듈을 참조했습니다.
          <br />
          <Text as="b">
            센서 간의 정합 프로세스와 2D-3D 간의 정합 알고리즘을 개발
          </Text>
          했고 <Text as="b">관련 논문의 3저자로 등록</Text>
          되어 있습니다.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Work;
