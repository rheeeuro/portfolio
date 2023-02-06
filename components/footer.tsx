import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Rhee Euro. All Rights Reserved.
      <Text fontSize="xs">3d Model from Sketchfab(https://skfb.ly/6UtLP)</Text>
    </Box>
  );
};

export default Footer;
