import Layout from "@/components/layout";
import tw from "tailwind-styled-components";
import type { NextPage } from "next";
import Image from "next/image";
import profilePic from "../img/avatar.jpg";

const IntroMessage = tw.div`
px-2
sm:px-4
py-2.5
rounded-lg
bg-slate-500
bg-opacity-40
p-3
mb-6
text-center
text-gray-900
dark:text-white
`;

const TitleContainer = tw.div`
flex
justify-between
my-4
`;

const Title = tw.div`
flex
flex-col
py-2
justify-center
`;

const Name = tw.h1`
text-4xl
font-medium
text-gray-900
`;

const SubName = tw.h4`
text-lg
font-medium
text-gray-900
font-normal
`;

const Avatar = tw.div``;

const SubTitleContainer = tw.div`
my-8
`;

const SubTitle = tw.h1`
text-xl
inline
py-2
font-medium
text-gray-900
border-b-4
border-gray-300
`;

const SubTitleDescription = tw.p`
mt-4
font-light
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <IntroMessage>
        Hello, I&apos;m junior developer based in Korea
      </IntroMessage>
      <TitleContainer>
        <Title>
          <Name>Euro Rhee</Name>
          <SubName>Junior Developer</SubName>
        </Title>
        <Avatar>
          <Image src={profilePic} alt="avatar" width={80} height={100} />
        </Avatar>
      </TitleContainer>
      <SubTitleContainer>
        <SubTitle>Work</SubTitle>
        <SubTitleDescription>
          Euro is a junior development based in Korea.
        </SubTitleDescription>
      </SubTitleContainer>
      <SubTitleContainer>
        <SubTitle>Bio</SubTitle>
        <SubTitleDescription>
          1996 Born in Seoul, Korea. <br />
          2015 Graduate Ewha Womans University HighSchool <br />
          2022 Graduate Gachon University
        </SubTitleDescription>
      </SubTitleContainer>
      <SubTitleContainer>
        <SubTitle>I Like</SubTitle>
        <SubTitleDescription>
          Development, Edit Video, Game, Movie
        </SubTitleDescription>
      </SubTitleContainer>
    </Layout>
  );
};

export default Home;
