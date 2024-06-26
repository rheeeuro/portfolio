import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" paddingTop={10}>
      &copy; {new Date().getFullYear()} Rhee Euro. All Rights Reserved.
      <Text fontSize="xs" opacity={0.2}>
        3d Model from Sketchfab(https://skfb.ly/6UtLP)
      </Text>
    </Box>
  );
};

export default Footer;
