// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";

// const NavbarContainer = tw.nav`
// fixed
// w-full
// border-gray-200
// px-2
// sm:px-4
// py-2.5
// rounded
// bg-[#ffffff40]
// dark:bg-[#20202050]
// transition-colors
// z-10
// backdrop-blur-md
// `;

// const NavbarDiv = tw.div`
// container
// flex
// flex-row
// flex-wrap
// items-center
// justify-between
// w-full
// max-w-3xl
// mx-auto
// `;

// const Logo = tw.a`
// flex
// items-center
// `;

// const Title = tw.span`
// self-center
// text-xl
// font-semibold
// whitespace-nowrap
// dark:text-white
// `;

// const DarkModeButton = tw.button`
// text-black
// bg-purple-700
// hover:bg-purple-800
// focus:ring-4
// focus:outline-none
// focus:ring-purple-300
// font-meduim
// rounded-lg
// text-sm
// px-3
// py-2.5
// text-center
// mr-3
// md:mr-0
// dark:bg-orange-300
// dark:hover:bg-orange-400
// dark:focus:ring-orange-500
// translate-color
// `;

// const MenuOpenButton = tw.button`
// inline-flex
// items-center
// p-2
// text-sm
// text-gray-500
// rounded-lg
// md:hidden
// hover:bg-gray-100
// focus:outline-none
// focus:ring-2
// focus:ring-gray-200
// dark:text-gray-400
// dark:hover:bg-gray-700
// dark:focus:ring-gray-600
// `;

// const ButtonContainer = tw.div`
// flex
// md:order-2
// `;

// const MenuContainer = tw(motion.div)`
// items-center
// justify-between

// w-full
// md:flex
// md:w-auto
// md:order-1
// md:transition-none
// `;

// const MenuUl = tw.ul`
// flex
// flex-col
// p-4
// mt-4
// border
// border-gray-300
// rounded-lg
// bg-orange-50
// md:bg-transparent
// md:flex-row
// md:space-x-8
// md:mt-0
// md:text-sm
// md:font-medium
// md:border-0
// dark:border-gray-700
// `;

// const NavListAnchorSelected = tw.a`
// block
// py-2
// pl-3
// pr-4
// text-white
// bg-blue-700
// rounded
// md:bg-transparent
// md:text-blue-700
// md:p-0
// dark:text-white
// `;

// const NavListAnchor = tw.a`
// block
// py-2
// pl-3
// pr-4
// text-gray-700
// rounded
// hover:bg-gray-100
// md:hover:bg-transparent
// md:border-0
// md:hover:text-blue-700
// md:p-0
// dark:text-gray-400
// md:dark:hover:text-white
// dark:hover:bg-gray-700
// dark:hover:text-white
// md:dark:hover:bg-transparent
// `;

// const dropdown = {
//   close: {
//     height: 0,
//     opacity: 0,
//     scaleY: 0,
//   },
//   open: {
//     height: "auto",
//     opacity: 1,
//     scaleY: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// export default function Navbar() {
//   const [dark, setDark] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(true);

//   useEffect(() => {
//     if (dark) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [dark]);

//   function toggleDark() {
//     setDark((dark) => !dark);
//   }

//   function toggleOpen() {
//     setMenuOpen((menuOpen) => !menuOpen);
//   }

//   return (
//     <NavbarContainer>
//       <NavbarDiv>
//         <Logo>
//           <svg
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 0 512 512"
//             xmlSpace="preserve"
//             className="h-6 mr-3 sm:h-9 fill-black dark:fill-white hover:rotate-12"
//           >
//             <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//             <g
//               id="SVGRepo_tracerCarrier"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             ></g>
//             <g id="SVGRepo_iconCarrier">
//               <g>
//                 <g>
//                   <path d="M256,0C128.956,0,25.6,103.364,25.6,230.4c0,2.543,0,68.267,0,68.267C25.6,416.299,128.956,512,256,512 s230.4-95.701,230.4-213.333c0,0,0-65.724,0-68.267C486.4,103.364,383.044,0,256,0z M76.8,375.467v29.491 c-17.459-24.832-29.005-53.478-32.759-84.284c8.422,19.703,19.533,37.982,32.836,54.417C76.868,375.228,76.8,375.339,76.8,375.467 z M119.467,449.331c-9.233-7.091-17.783-14.899-25.6-23.313v-32.102c8.098,8.03,16.393,17.451,25.6,24.218 C119.467,426.667,119.467,449.331,119.467,449.331z M162.133,474.863c-8.917-4.036-17.502-8.619-25.668-13.713 c0-0.119,0.068-0.222,0.068-0.35v-33.459c8.201,4.992,16.768,9.438,25.6,13.389V474.863z M204.8,489.182 c-8.764-1.997-17.297-4.497-25.6-7.458V447.59c8.32,2.953,16.87,5.419,25.6,7.407V489.182z M247.467,494.737 c-8.678-0.316-17.22-1.101-25.6-2.347v-34.133c8.397,1.254,16.939,2.014,25.6,2.33V494.737z M290.133,492.39 c-8.38,1.246-16.922,2.031-25.6,2.347v-34.15c8.661-0.316,17.203-1.075,25.6-2.33V492.39z M332.8,481.724 c-8.303,2.961-16.836,5.461-25.6,7.458v-34.185c8.73-1.988,17.28-4.454,25.6-7.407V481.724z M349.867,474.854v-34.116 c8.832-3.959,17.399-8.397,25.6-13.389V460.8c0,0.119,0.068,0.222,0.068,0.341C367.369,466.244,358.784,470.818,349.867,474.854z M418.133,426.027c-7.817,8.405-16.367,16.213-25.6,23.313c0-24.832,0-24.841,0-31.198c9.207-6.767,17.502-16.188,25.6-24.218 V426.027z M435.2,404.958v-29.491c0-0.137-0.068-0.247-0.077-0.375c13.303-16.435,24.414-34.714,32.836-54.409 C464.205,351.479,452.659,380.134,435.2,404.958z M256,443.085c-117.274,0-212.676-95.403-212.676-212.685 S138.726,17.724,256,17.724s212.676,95.411,212.676,212.685S373.274,443.085,256,443.085z"></path>
//                 </g>
//               </g>
//               <g>
//                 <g>
//                   <path d="M256,53.18c-97.724,0-177.237,79.497-177.237,177.22S158.276,407.629,256,407.629S433.237,328.132,433.237,230.4 S353.724,53.18,256,53.18z M256,389.914c-87.953,0-159.505-71.561-159.505-159.514S168.047,70.895,256,70.895 S415.505,142.456,415.505,230.4S343.953,389.914,256,389.914z"></path>
//                 </g>
//               </g>
//               <g>
//                 <g>
//                   <path d="M303.121,337.254c-46.976,0-86.878-30.507-101.163-72.721H281.6c4.71,0,8.533-3.814,8.533-8.533s-3.823-8.533-8.533-8.533 h-83.84c-0.896-5.564-1.493-11.238-1.493-17.067c0-2.884,0.205-5.709,0.435-8.533H281.6c4.71,0,8.533-3.814,8.533-8.533 c0-4.719-3.823-8.533-8.533-8.533h-82.108c11.511-46.575,53.538-81.254,103.629-81.254c4.71,0,8.533-3.814,8.533-8.533 s-3.823-8.533-8.533-8.533c-59.554,0-109.397,42.24-121.233,98.321h-18.202c-4.71,0-8.533,3.814-8.533,8.533 c0,4.719,3.823,8.533,8.533,8.533h15.949c-0.196,2.833-0.435,5.658-0.435,8.533c0,5.803,0.538,11.469,1.314,17.067h-18.381 c-4.71,0-8.533,3.823-8.533,8.533c0,4.719,3.823,8.533,8.533,8.533h21.956c14.874,51.763,62.549,89.788,119.032,89.788 c4.71,0,8.533-3.814,8.533-8.533C311.654,341.069,307.831,337.254,303.121,337.254z"></path>
//                 </g>
//               </g>
//             </g>
//           </svg>
//           <Title>Euro Rhee</Title>
//         </Logo>
//         <ButtonContainer>
//           <DarkModeButton onClick={toggleDark}>
//             {dark ? "☀︎" : "🌙"}
//           </DarkModeButton>
//           <MenuOpenButton onClick={toggleOpen}>
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </MenuOpenButton>
//         </ButtonContainer>
//         <MenuContainer
//           variants={dropdown}
//           initial={false}
//           animate={menuOpen ? "open" : "close"}
//         >
//           <MenuUl>
//             <li>
//               <NavListAnchorSelected href="/" aria-current="page">
//                 Home
//               </NavListAnchorSelected>
//             </li>
//             <li>
//               <NavListAnchor href="/work">Works</NavListAnchor>
//             </li>
//             <li>
//               <NavListAnchor
//                 href="https://github.com/rheeeuro/portfolio"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Source
//               </NavListAnchor>
//             </li>
//           </MenuUl>
//         </MenuContainer>
//       </NavbarDiv>
//     </NavbarContainer>
//   );
// }
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

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "glassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props) => {
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
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/rheeeuro/portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            View Source
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
                <MenuItem as={Link} href="/">
                  About
                </MenuItem>
                <MenuItem as={Link} href="/works">
                  Works
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/rheeeuro/portfolio"
                >
                  View Source
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
