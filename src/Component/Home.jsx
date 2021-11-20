import React from 'react';
import '../Style/home.css'
import { Link } from 'react-router-dom'
// import {Button} from 'bootstrap';
import {Button } from 'react-bootstrap'
function Home() {
  return (
    <>
    <center className='mt-4'>
      <header>
        <h2>MY CINEMA</h2>
      </header>
        <div>
          <div><img id="thumbnail" alt="soul" src=""></img></div>
          <div>
            <Link to="/book"><Button>Ticket booking</Button></Link>
            <br/>
            <br/>
            <Link to="/admin"><Button>Administrator</Button></Link>
          </div>
        </div>
        </center>
    </>
  )
}

export default Home;