import Item from "@/components/item";
import Layout from "@/components/layout";
import { NextPage } from "next";
import tw from "tailwind-styled-components";
import gflight from "../img/gflight.png";
import miPhone from "../img/miPhone.png";
import cPosture from "../img/cPosture.png";
import gStore from "../img/gStore.png";
import joyrun from "../img/joyrun.png";
import gEscape from "../img/gEscape.png";
import profileFinder from "../img/profileFinder.png";
import spineSlicer from "../img/spineSlicer.png";
import scenarioBuilder from "../img/scenarioBuilder.png";

const Title = tw.h1`
text-xl
my-4
font-bold
text-gray-900
dark:text-white
`;

const GridContainer = tw.div`
grid
grid-cols-1
md:grid-cols-2
gap-6
`;

const Work: NextPage = () => {
  return (
    <Layout>
      <Title>Works</Title>
      <GridContainer>
        <Item img={gflight} title="G-Flight" description="HTML Canvas Game" />
        <Item img={miPhone} title="miPhone" description="Smartphone compare" />
        <Item img={cPosture} title="cPosture" description="check posture" />
        <Item img={gStore} title="gStore" description="jkbfkasdjbfkjsbd" />
        <Item img={joyrun} title="joyrun" description="jkbfkasdjbfkjsbd" />
        <Item img={gEscape} title="gEscape" description="jkbfkasdjbfkjsbd" />
        <Item
          img={profileFinder}
          title="profileFinder"
          description="jkbfkasdjbfkjsbd"
        />
        <Item
          img={spineSlicer}
          title="spineSlicer"
          description="jkbfkasdjbfkjsbd"
        />
        <Item
          img={scenarioBuilder}
          title="scenarioBuilder"
          description="jkbfkasdjbfkjsbd"
        />
      </GridContainer>
    </Layout>
  );
};

export default Work;
