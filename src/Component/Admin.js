import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disableSeats,makeArrangement} from '../Slice/dataSlice';
import { Link } from 'react-router-dom';
import '../Style/book.css'
import styles from '../Style/button.module.css'

function Admin() {
  const state = useSelector(state => state.dataSlice)
  const dispatch=useDispatch()
  const [dimension,setDimension]=useState({row:0,column:0})
  return (
    <>
      <header>
        <h2>Admin</h2>
        <div>
        <input placeholder="no of rows" onChange={(e)=>{setDimension({...dimension,row:e.target.value})}} type="number"/>
        <input placeholder="no of columns" onChange={(e)=>{setDimension({...dimension,column:e.target.value})}} type="number"/>
        <button onClick={()=>{dispatch(makeArrangement({row:dimension.row,column:dimension.column}))}}>generate</button>
        </div>
      </header>
      <main>
        <table>
          <tbody>
            {state.arrangement.map((item, index) => {
              return <tr key={index}>{
                item.map((item2, index2) => {
                  if(index2===0){
                    return <td><td>₹{100*(index+1)}</td><td key={index2}>
                    <button className={item2[1]?((item2[1]===999)?styles.buttonGrey:styles.buttonGreen):styles.buttonRed} onClick={()=>{
                      dispatch(disableSeats({index:index,index2:index2}))
                    }}>{item2[0]}</button>
                  </td></td>
                  }
                  else{
                    return <td key={index2}>
                    <button className={item2[1]?((item2[1]===999)?styles.buttonGrey:styles.buttonGreen):styles.buttonRed} onClick={()=>{
                      dispatch(disableSeats({index:index,index2:index2}))
                    }}>{item2[0]}</button>
                  </td>
                  }
                })
              }
              </tr>
            })}
          </tbody>
        </table>
        <div>
          <Link to="/"><button>Go back</button></Link>
          <button onClick={()=>{window.alert("Saved Successfully")}}>Save Disabled seats</button>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Admin;