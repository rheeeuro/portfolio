import { ChevronRightIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

interface WorkImageProps {
  src: string;
  alt: string;
}

interface MetaProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => (
  <Box>
    <Link href="/works">Works</Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }: MetaProps) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
