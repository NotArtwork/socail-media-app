import './App.css';
import {useState, useEffect } from 'react'

const App = () => {

  const [posts, setPosts] = useState([])

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
    </div>
  );
}

export default App;
