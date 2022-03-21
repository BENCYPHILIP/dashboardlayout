import './App.css';
import {useState,useEffect} from 'react'
import Counter from './component/Counter'
import {Flex,Container} from '@chakra-ui/react'
import Sidebar from './component/Pages/Sidebar'
import { Header } from './component/Pages/Header';
function App() {

//   const [counter, setCounter] = useState(0);
//   const[intervalid,setIntervalid]=useState();
//   useEffect(() => {
//     setIntervalid(setInterval(() => {
//         setCounter((counter) => counter + 1);
//       }, 1000));
   
//     }, []);
// const stoptimer=()=>
// {
//     clearInterval(intervalid)
// }

  return (
   
    <Flex h="full" flexDir="row" overflow="hidden" maxW="full" flex={'1'}>
    <Sidebar/>
    {/* <Header/> */}
  </Flex>
  );
}
export default App;