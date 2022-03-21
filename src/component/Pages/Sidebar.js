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


    <Flex w="15%" flexDir={'column'} alignItems={'center'} backgroundColor="gray" color="black">
                    <Flex flexDir={'column'} justify="space-between" h="100vh">
                        <Flex flexDirection={'column'} as="nav" textColor={'white'}>

                        <Flex flexDir={'column'} alignItems="center" mb={10} mt={5}>
                            <Flex>
                            <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            </Flex>
                            <Flex>
                            <Heading mt={5} mb={5} fontSize="1xl" alignSelf={'center'} letterSpacing="tight">
                            Kent Dodds
                            </Heading>
                            </Flex>  
                        </Flex>                   
                            <Flex flexDirection={'column'} align="flex-start" justifyContent={'center'}>
                                <Flex className="sidemenu" style={{marginBottom: "1.5em"}}>     
                                {titlesdatas.map((links) => {
                                      
                                        
                                        return(
                                       <Link>
                                        <Icon  fontSize="1xl">
                                        
                                        {links.icons}
                                        </Icon>     
                                    
                                    <Heading fontSize="1xl" style={{marginLeft: "5px"}}>
                                    {links.title}
                                    </Heading>
                                    </Link>
                                      );
                                    })}
                                </Flex>

                              



                                
                            </Flex>
                        </Flex>
                       
                    </Flex>
            </Flex>
  )
}
export default Sidebar;