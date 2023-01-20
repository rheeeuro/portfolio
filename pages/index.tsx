import Layout from "@/components/layout";
import tw from "tailwind-styled-components";
import type { NextPage } from "next";

const IntroMessage = tw.div`
mx-2
sm:mx-4
my-2.5
rounded-lg
bg-slate-500
bg-opacity-40
p-3
mb-6
text-center
text-gray-900
dark:text-white
`;

const TitleContainer = tw.div``;

const Title = tw.h1``;

const Subtitle = tw.h4``;

const Avatar = tw.div``;

const Home: NextPage = () => {
  return (
    <Layout>
      <IntroMessage>
        Hello, I&apos;m junior developer based in Korea
      </IntroMessage>
      <TitleContainer>
        <Title>Euro Rhee</Title>
        <Subtitle>Junior Developer</Subtitle>
        <Avatar></Avatar>
      </TitleContainer>
    </Layout>
  );
};

export default Home;
