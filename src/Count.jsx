import React from 'react'
import Footer from './Footer'

let center_style = {
   position: 'absolute',
   left: '50%',
   top: '50%',
   transform: `translate(-50%, -50%)`,
   padding: '50px',
   fontFamily: 'verdana',
}

let btn_qush = {
   background: 'green',
   border: 'none',
   padding: '10px 30px',
   color: 'white',
   borderRadius: '40px 10px 10px 40px'
}

let btn_ayr = {
   background: 'red',
   border: 'none',
   padding: '10px 30px',
   color: 'white',
   borderRadius: '10px 40px 40px 10px'
}

let reset = {
   background: 'yellow',
   border: 'none',
   borderColor: 'red',
   padding: '10px 30px',
   margin: '10px',
}

class Count extends React.Component{
   constructor(props) {
      super(props);
      this.state = {count: 0};//stateni 0ga tenglab olamiz
   }

   decr() {//raqamni 1ga oshirish uchun o'zgaruvchi
      this.setState({
         count: this.state.count + 1//countga 1ni qo'shib qiymatni qaytarib beradi
      })
   }

   incr() {//raqamni birga kamaytirish uchun o'zgaruvchi
      this.setState({
         count: this.state.count - 1//countdan 1ni ayrib qiymatni qaytarib beradi
      })
   }
   
   reset() {//qayta qiymat berish
      this.setState({
         count: 0//qiymatni 0ga tenglaydi
      })
   }

   render() {
      return (
         <div>
            <div style={center_style}>
               <span style={{textAlign: 'center', fontSize: '100px', display: 'block'}}>{this.state.count}</span>
               <button type='button' style={btn_qush} onClick={(e)=>this.decr(e)}>+1</button>
               <button type='button' style={reset} onClick={(e)=>this.reset(e)}>RESET</button>
               <button type='button' style={btn_ayr} onClick={(e)=>this.incr(e)}>-1</button>
            </div>
            <Footer />
         </div>
      )
   }
}

export default Count//Count componenti export qilinyapti