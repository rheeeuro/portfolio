import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./themeToggleButton";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import {
  IoCloudDownload,
  IoCloudDownloadOutline,
  IoLogoGithub,
} from "react-icons/io5";

interface LinkItemProps {
  href?: string | undefined;
  path?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  children: ReactNode;
  [key: string]: any;
}

interface NavbarProps {
  path: string;
}

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props: NavbarProps) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/rheeeuro"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            GitHub
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://drive.google.com/file/d/14rbSwI9oC-TflE-mjDQdxCcwyShX477_/view?usp=sharing"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoCloudDownloadOutline />
            Portfolio File
          </LinkItem>
        </Stack>
        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={NextLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  href="https://github.com/rheeeuro/portfolio"
                  target="_blank"
                >
                  View Source
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  href="https://drive.google.com/file/d/14rbSwI9oC-TflE-mjDQdxCcwyShX477_/view?usp=sharing"
                  target="_blank"
                >
                  Portfolio File
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
