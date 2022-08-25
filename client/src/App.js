import './App.css';
import {useState, useEffect, useRef } from 'react'
import store from './store';
import { connect } from 'react-redux'
import NavBar from './NavBar'

const App = () => {

  const [posts, setPosts] = useState([])

  const addValue = () => {
    store.dispatch({type: 'counter/incremented'})
  }
  
  const removeValue = () => {
    store.dispatch({type: 'counter/decremented'})
  }


  useEffect(() => {


    const getPosts = async () => {
      let req = await fetch('http://localhost:3100/posts')
      let res = await req.json()
      if (req.ok) {
        setPosts(res)
      } else {
        alert('Posts could not be loaded')
      }
    }
    getPosts()
  }, [])

  return (
    <div className="App">
      <h2>News Feed</h2>
      {
        posts.map((post) => {
          return (
            <div>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          )
        })
      }
      

      <hr />
      <h4>Global count is {store.getState().value}</h4>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div>

  );
}

const mapStateToProps = state => {
  return {value: state.value}
}
export default connect(mapStateToProps)(App)

