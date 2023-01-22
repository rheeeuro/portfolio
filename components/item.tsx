import Image, { StaticImageData } from "next/image";
import tw from "tailwind-styled-components";

const ItemContainer = tw.div`
relative
`;

const Title = tw.h1`
mt-2
text-xl
text-center
font-semibold
`;

const Description = tw.p`
text-center
font-light
`;

interface ItemProps {
  img: StaticImageData;
  title: string;
  description?: string;
}

export default function Item({ img, title, description }: ItemProps) {
  return (
    <ItemContainer>
      <Image src={img} alt="img" className="rounded-xl shadow-md" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ItemContainer>
  );
}
