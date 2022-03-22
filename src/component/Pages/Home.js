import React from 'react'
import {Box,Text,Heading,Card, SimpleGrid,Image} from '@chakra-ui/react'
import Content from './Content'
import AboutImage from '../../assets/About-the-IIF-Update.png';
const Home = () => {
const data=[{title:"Card One",
description:"Sample Card One"
},
{
title:"Card Two",
description:"Sample Card Two"
},
{
title:"Card Three",
description:"Sample Card Three"
}]

  return (
    //   <>
      
    //    {
    //       data.map((items)=>{
    //           return(
                <Box  p={5} bg="cyan.100"  borderRadius={10} as="article">
                <Image h="350px" objectFit='fill' w="full"  src={AboutImage} alt="stock image"/>
               <Heading size="xl" fontWeight="bold"> Title </Heading> 
               <Text noOfLines={2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum urna quam. Aenean risus turpis, aliquet id diam et, lobortis pellentesque ex. Nulla facilisi. Maecenas. </Text>
                </Box>  
        //       )
        //   })
    //   }
      
      
      
    //   </>
     
   

   
  )
  
}

export default Home