import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate();
  function backHandler(){
    navigate(-1);
  }
  return (
    <div>
      <div>
      Support Page
      </div>
      <div>
        <button onClick={backHandler}>GO Back</button>
      </div>
    </div>
  )
}

export default Support
