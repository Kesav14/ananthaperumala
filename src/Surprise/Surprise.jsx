import { useState } from 'react'
import './Surprise.css'

function Surprise(){
  var [click,setClick] = useState(false)
  return(
    <>
      <button onClick={()=>setClick(true)} className="reveal-btn">Reveal</button>
      {click && <> <img src="/watchimg.jpg" alt="" className="watch-img" />
      <p className="details-watch">
        <span className="tobold"> Item Name:</span> Noise Halo Smartwatch <br />
         <span className="tobold">Status:</span>✅ Delivered <br />
         <span className="tobold">Customer Name:</span> Ananthaperumal A <br />
         <span className="tobold">Reason to deliver:</span> You have spent so much time for our family 🤔🤔 <br />
        <span className="tobold2">This is to remind you your time is also precious</span>
      </p> </>}
      
    </>
  )
}

export default Surprise