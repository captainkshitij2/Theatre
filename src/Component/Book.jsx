import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArrangement,calculateAmount } from '../Slice/dataSlice';
import { Link } from 'react-router-dom';
import '../Style/book.css'
import styles from '../Style/button.module.css'

function Book() {
  const state = useSelector(state => state.dataSlice)
  const dispatch=useDispatch()
  return (
    <>
      <header>
        <h2>Select your seats</h2>
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
                      dispatch(updateArrangement({index:index,index2:index2}))
                    }}>{item2[0]}</button>
                  </td></td>
                  }
                  else{
                    return <td key={index2}>
                   <button className={item2[1]?((item2[1]===999)?styles.buttonGrey:styles.buttonGreen):styles.buttonRed} onClick={()=>{
                      dispatch(updateArrangement({index:index,index2:index2}))
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
          <Link to="/payment"><button onClick={()=>{dispatch(calculateAmount(1))}}>Proceed</button></Link>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}export default Book ;