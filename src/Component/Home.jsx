import React from 'react';
import '../Style/home.css'
import { Link } from 'react-router-dom'

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
            <Link to="/book"><button>customer</button></Link>
            <Link to="/admin"><button>admin</button></Link>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Home;