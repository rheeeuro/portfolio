import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface GridItemProps {
  children: ReactNode;
  href?: string;
  title: string;
  thumbnail: StaticImageData;
}

interface WorkGridItemProps {
  children: ReactNode;
  id: string;
  title: string;
  thumbnail: StaticImageData;
}

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: GridItemProps) => (
  <Box w="100%" alignItems="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox as={Link} href={`works/${id}`} scroll={false} cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
  />
);
