import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { New } from './components/New'
import PostView from './components/PostView'
import EditPost from './components/EditPost'


function App() {
  return (
    <>
      <Router>
        <div className='header'>
          <Link to='/' className='title'>
            Social Club
          </Link>
          <NavLink to='/posts/new' className="btn-create-post">
            Create post
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<New />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
