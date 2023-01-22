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
flex-col
md:flex-row
md:justify-between
justify-center
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
dark:text-white
`;

const SubName = tw.h4`
text-lg
font-medium
text-gray-900
font-normal
dark:text-white
`;

const Avatar = tw.div`
flex
justify-center
`;

const SubTitleContainer = tw.div`
my-8
`;

const SubTitle = tw.h1`
text-xl
inline
py-2
px-1
font-medium
text-gray-900
border-b-4
border-gray-500
dark:text-white
`;

const SubTitleDescription = tw.p`
mt-6
text-md
font-medium
text-gray-700
dark:text-white
`;

const ButtonContainer = tw.div`
flex
justify-center
py-4
`;

const Button = tw.button`
bg-teal-500
px-4
py-2
rounded-lg
text-white
dark:text-black
`;

const Year = tw.span`
pr-2
w-32
font-extrabold
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
          <SubName>Front-end Developer</SubName>
        </Title>
        <Avatar>
          <Image src={profilePic} alt="avatar" width={80} height={100} />
        </Avatar>
      </TitleContainer>
      <SubTitleContainer>
        <SubTitle>Work</SubTitle>
        <SubTitleDescription>
          I want to be a full-stack developer, PM and developer who can
          communicate well. I want to create a service that provides new
          experiences in people&apos;s lives with development skills to improve
          with my ideas. I want to improve my ability by interacting with team
          members in each sector, understanding different ideas, and thinking
          about what developers need to do to make a better service.
        </SubTitleDescription>
        <ButtonContainer>
          <Button>My Portfolio &gt;</Button>
        </ButtonContainer>
      </SubTitleContainer>
      <SubTitleContainer>
        <SubTitle>Bio</SubTitle>
        <SubTitleDescription>
          <Year>1996</Year> Born in Seoul, Korea. <br />
          <Year>2015</Year> Graduate <b>Ewha Womans University HighSchool</b>
          <br />
          <Year>2021</Year> Worked at{" "}
          <a
            href="http://gmeditec.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Gmeditec</b>
          </a>{" "}
          as an undergraduate researcher
          <br />
          <Year>2022</Year> Graduate <b>Gachon University</b> (Department of
          Software) <br />
          <Year>2021 - 2022</Year> Worked at{" "}
          <a
            href="https://kakaoenterprise.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Kakao Enterprise</b>
          </a>{" "}
          Solution Platform Team as an intern
        </SubTitleDescription>
      </SubTitleContainer>
      <SubTitleContainer>
        <SubTitle>I Like</SubTitle>
        <SubTitleDescription>
          Development, Video Editing, Game, Watching Movie, Drawing
        </SubTitleDescription>
      </SubTitleContainer>
    </Layout>
  );
};

export default Home;
