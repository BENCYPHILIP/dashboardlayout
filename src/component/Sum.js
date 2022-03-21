import React ,{useState} from 'react'
import {Button} from 'react-bootstrap'
const Sum = () => {
const[one,setOne]=useState()
const[two,setTwo]=useState()
const[res,setRes]=useState(0)
const[show,setShow]=useState()
const add=()=>
{
    setRes(Number(one)+Number(two))

}
const sub=()=>
{
    setRes(Number(one)-Number(two))
}
const mul=()=>
{
    setRes(Number(one)*Number(two))
}
const div=()=>
{
    setRes(Number(one)/Number(two))
}
  return (

    <div>
        sum is{res}
    sub is{res}
    mul is{res}
    div is{res}<br/>
    
        <input type="number" value={one} onChange={(e)=>setOne(e.target.value)}/>
        <input type="number" value={two} onChange={(e)=>setTwo(e.target.value)}/>
        <br/>
        <Button variant="success" onClick={add}>Add</Button>
        <Button variant="success" onClick={sub}>Substract</Button>
        <Button variant="success" onClick={mul}>Multiply</Button>
        <Button variant="success" onClick={div}>Division</Button>
     
    <div className="buttons"> <Button id="clear">C</Button> 
    <Button id="Normal_btn">/</Button> 
    <Button id="Normal_btn">*</Button> 
    </div>
    <div className="buttons"> <Button id="Normal_btn">7</Button>
     <Button id="Normal_btn">8</Button>
     <Button id="Normal_btn">9</Button> 
     <Button id="Normal_btn">-</Button> 
     </div>
    <div className="buttons"> 
    <Button id="Normal_btn">4</Button> 
    <Button id="Normal_btn">5</Button>
    <Button id="Normal_btn">6</Button> 
    <Button id="Normal_btn">+</Button> 
    </div>
    <div className="buttons">
    <Button id="Normal_btn">1</Button> 
    <Button id="Normal_btn">2</Button> 
    <Button id="Normal_btn">3</Button> 
    <Button id="Normal_btn">.</Button> 
    </div>
   
    
    </div>
  )
}

export default Sum