import React from 'react';
import '../Style/home.css'
import { Link } from 'react-router-dom'
// import {Button} from 'bootstrap';
import {Button } from 'react-bootstrap'
function Home() {
  return (
    <>
      <header>
        <h2>Cinema House</h2>
      </header>
      <main>
        <div>
          <div><img id="thumbnail" alt="soul" src="https://www.themoviedb.org/t/p/original/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg"></img></div>
          <div>
            <Link to="/book"><Button>customer</Button></Link>
            <br/>
            <Link to="/admin"><Button>admin</Button></Link>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Home;