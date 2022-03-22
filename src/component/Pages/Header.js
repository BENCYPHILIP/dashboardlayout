import React from "react";
import { Flex } from "@chakra-ui/react";
export const Header = () => {
  return (
    <Flex
      bg={"gray.600"}
      h={"70px"}
      w={"full"}
      alignItems={"center"}
      textColor={"white"}
      justifyContent={'center'}
    fontSize={'lg'}>
      Welcome to Dashboard
    </Flex>
  );
};
export default Header;
