import React from "react";
import {
  Link,
  Flex,
  Text,
  Icon,
  Avatar
} from "@chakra-ui/react";
import {
  BsBell,
  BsFillChatLeftTextFill,
  BsGear,
  BsHouseDoor,
  BsPerson,
} from "react-icons/bs";
import AppRoute from '../Routes/Routings'
export const Sidebar = () => {
  const username="Jackson Sam" 
  const titlesdatas = [
    { title: "Home", icon: BsHouseDoor},
    { title: "Chat", icon: BsFillChatLeftTextFill},
    { title: "Contact", icon: BsPerson },
    { title: "Notification", icon: BsBell},
    { title: "Settings", icon: BsGear },
  ];
  return (
    <Flex
      w="15%"
      flexDir={"column"}
      alignItems={"center"}
      bg="gray.700"
      color="white"
    >
      <Flex direction={"column"} justify="space-between" h="100vh">
        <Flex direction={"column"} as="nav">
          <Flex direction={"column"} alignItems="center" mb={5} mt={5}>
            <Flex>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Flex>
            <Flex>
              <Text
                mt={5}
                mb={5}
                fontSize="1xl"
                alignSelf={"center"}
                letterSpacing="tight"
              >
            
              {username}
              </Text>
             
            </Flex>
          </Flex>
          
            <Flex
              alignItems={"flex-start"}
              flexDirection={"column"}
              textColor={"white"} justify="space-between"
            >
              {titlesdatas.map((items) => {
                return (
                    <Link >
                <Flex direction="row" p={'7px'} alignItems={'center'} fontSize="md" >
              
                    <Icon as={items.icon} />
                    <Text  ml={'5px'}>
                      {items.title}
                    </Text>
                 
                  </Flex>
                  </Link>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    
  );
};
export default Sidebar;
