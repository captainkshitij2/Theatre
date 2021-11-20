import React from 'react';
import '../Style/home.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Payment() {
    const state=useSelector(state=>state.dataSlice)
  return (
    <>
    <header>
      <h2>Payment Window</h2>
    </header>
    <main>
        <div>
            Seats booked are: {state.arrangement.map((item,index)=>{return<span key={index}>{item.map((item2,index2)=>{
                if(item2[1]==true && item2[1]!=999){
                    return item2[0]+","
                }
                else{
                    return null
                }
            })}</span>})}
        </div>
        <div>
            Total Amount:₹{state.amount}
        </div>

    <Link to="/book"><button>Go back</button></Link>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default Payment;