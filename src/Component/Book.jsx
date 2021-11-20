import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArrangement,calculateAmount } from '../Slice/dataSlice';
import { Link } from 'react-router-dom';
import '../Style/book.css'
import styles from '../Style/button.module.css'
import {Button,Table} from 'react-bootstrap'

function Book() {
  const state = useSelector(state => state.dataSlice)
  const dispatch=useDispatch()
  return (
    <>
    <center>
      <header>
        <h2 className="mt-5">Select your seats</h2>
      </header>
      <main>
        <Table className="bordered-striped">
          <tbody>
            {state.arrangement.map((item, index) => {
              return <tr key={index}>{
                item.map((item2, index2) => {
                  if(index2===0){
                    return <td><td>₹{100*(index+1)}</td><td key={index2}>
                   <button  className={item2[1]?((item2[1]===999)?styles.buttonGrey:styles.buttonGreen):styles.buttonRed} onClick={()=>{
                      dispatch(updateArrangement({index:index,index2:index2}))
                    }}>{item2[0]}</button>
                  </td></td>
                  }
                  else{
                    return <td key={index2}>
                   <button  className={item2[1]?((item2[1]===999)?styles.buttonGrey:styles.buttonGreen):styles.buttonRed} onClick={()=>{
                      dispatch(updateArrangement({index:index,index2:index2}))
                    }}>{item2[0]}</button>
                  </td>
                  }
                })
              }
              </tr>
            })}
          </tbody>
        </Table>
        <div>
          <Link to="/"><Button style={{marginRight:"50px"}}>Home Page</Button></Link> {''} {''}
          <Link to="/payment"><Button onClick={()=>{dispatch(calculateAmount(1))}}>Payments</Button></Link>
        </div>
      </main>
      <footer>

      </footer>
      </center>
    </>
  )
}
export default Book ;