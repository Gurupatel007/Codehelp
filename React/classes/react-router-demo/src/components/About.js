import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  function clickHandler(){
    navigate('/support');
  }
  return (
    <div>
      <div>
      About Page
    </div>
    <div>
      <button onClick={clickHandler}>Go to Support</button>
    </div>
    </div>
  )
}

export default About
