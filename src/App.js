import './App.css';
import {useState,useEffect} from 'react'
import Counter from './component/Counter'
import {Flex,Container, Grid} from '@chakra-ui/react'
import Sidebar from './component/Pages/Sidebar'
import { Header } from './component/Pages/Header';
import Content from './component/Pages/Content'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Pages/Home'
import Chat from './component/Pages/Chat'
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
   
    <Flex h="full" overflow="hidden" maxW="full" >
    
    <Sidebar/>
   
    <Flex direction={'column'} w={'full'}>
    
    <Header/>

    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Content" element={<Content/>}/>
        </Routes>
    </Router>
    </Flex>
 
  </Flex>
  
  );
}
export default App;