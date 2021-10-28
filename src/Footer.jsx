import React from 'react'

let sticky_footer = {
   position: 'absolute',
   bottom: '0',
   transform: `translate(-50%, -50%)`,
   left: '50%',
   background: 'lightgrey',
   padding:'0 100px',
   opacity: '0.6'
}
const Footer = ()=>{
   return (
      <div  style={sticky_footer}>
         <p>Powered By Javohir G'ulomjonov</p>
      </div>
   )
}
export default Footer