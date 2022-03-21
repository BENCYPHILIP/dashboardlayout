import React from "react";
import { Button } from 'react-bootstrap';
const Counter = ({ countershow }) => {

 
  return (
    <div>
      <Button onClick={countershow}>Stop</Button>

    </div>
  );

};
export default Counter;
