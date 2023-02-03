import { ForwardedRef, forwardRef, ReactNode } from "react";
import { Box, Spinner } from "@chakra-ui/react";

interface RoomContainerProps {
  children: ReactNode;
}

export const RoomSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const RoomContainer = forwardRef(
  ({ children }: RoomContainerProps, ref: ForwardedRef<HTMLDivElement>) => (
    <Box
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={["0px", "-40px", "-100px"]}
      mb={["-60px", "-160px", "-220px"]}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
);
RoomContainer.displayName = "RoomContainer";

const Loader = () => {
  return (
    <RoomContainer>
      <RoomSpinner />
    </RoomContainer>
  );
};

export default Loader;
