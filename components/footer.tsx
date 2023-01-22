import tw from "tailwind-styled-components";

const FooterContainer = tw.div`
text-center
text-gray-400
font-normal
text-sm
py-8
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Euro Rhee. All Rights Reserved.
    </FooterContainer>
  );
}
