import React from 'react'
import {Link,Flex,Text,Icon,VStack,Avatar,Heading} from '@chakra-ui/react'
import {BsBell, BsFillChatLeftTextFill, BsGear,BsHouseDoor, BsCalendar,BsPerson} from 'react-icons/bs'
export const Sidebar = () => {
    const titlesdatas = [
        { title: 'Home',icon:BsHouseDoor},
        { title: 'Chat',icon:BsFillChatLeftTextFill},
        { title: 'Contact',icon:BsPerson},
        { title: 'Notification',icon:BsBell},
        { title: 'Settings',icon:BsGear},
       
      ];
  return (


    <Flex w="15%" flexDir={'column'} alignItems={'center'} bg="gray.700" color="white">
    <Flex flexDir={'column'} justify="space-between" h="100vh">
        <Flex flexDirection={'column'} as="nav">

        <Flex flexDir={'column'} alignItems="center" mb={10} mt={5}>
            <Flex>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'/>
            </Flex>
            <Flex>
            <Heading mt={5} mb={5} fontSize="1xl" alignSelf={'center'} letterSpacing="tight">
                Athul S
            </Heading>
            </Flex>  
        </Flex>                   
            <Flex flexDirection={'column'} align="flex-start" textColor={'white'}>
                <Flex className="sidemenu" style={{marginBottom: "1.5em",alignItems: "center"}} >
                    <Link>
                        <Icon as={BsHouseDoor} fontSize="1xl">
                        
                            Home
                        </Icon>
                    </Link>
                    <Link>
                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                        HOME
                    </Heading>
                    </Link>
                </Flex>

                <Flex className="sidemenu" style={{marginBottom: "1.5em",alignItems: "center"}}>
                    <Link>
                        <Icon as={BsFillChatLeftTextFill} fontSize="1xl">
                        
                            CHAT
                        </Icon>
                    </Link>
                    <Link>
                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                        CHAT
                    </Heading>
                    </Link>
                </Flex>


                <Flex className="sidemenu" style={{marginBottom: "1.5em",alignItems: "center"}}>
                    <Link>
                        <Icon as={BsPerson} fontSize="1xl">
                        
                            Contact
                        </Icon>
                    </Link>
                    <Link>
                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                        CONTACT
                    </Heading>
                    </Link>
                </Flex>


                <Flex className="sidemenu" style={{marginBottom: "1.5em",alignItems: "center"}}>
                    <Link>
                        <Icon as={BsBell} fontSize="1xl">
                        
                            Notifications
                        </Icon>
                    </Link>
                    <Link>
                    <Heading fontSize="1xl" style={{marginLeft: "5px",alignItems: "center"}}>
                    NOTIFICATIONS
                    </Heading>
                    </Link>
                </Flex>

                <Flex className="sidemenu" style={{marginBottom: "1.5em",alignItems: "center"}}>
                    <Link>
                        <Icon as={BsCalendar} fontSize="1xl">
                        
                            Calender
                        </Icon>
                    </Link>
                    <Link>
                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                    CALENDER
                    </Heading>
                    </Link>
                </Flex>

                <Flex className="sidemenu" style={{marginBottom: "1.5em",alignItems: "center"}}>
                    <Link>
                        <Icon as={BsGear} fontSize="1xl">
                        
                            Settings
                        </Icon>
                    </Link>
                    <Link>
                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                    SETTINGS
                    </Heading>
                    </Link>
                </Flex>

                
            </Flex>
        </Flex>
       
    </Flex>
</Flex>
  )
}
export default Sidebar;