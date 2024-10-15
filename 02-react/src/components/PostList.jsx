import { useState, useEffect } from 'react'

import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  function addPostHandler(newPost) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      } 
    });
    setPosts((prev) => [newPost, ...prev])
  }

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPosts(resData.posts)
      setIsFetching(false)
    }

    fetchPost()
  }, [])
  

  return (
    <>
      {isPosting && 
        <Modal onClose={onStopPosting} >
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      }
      {!isFetching && posts.length > 0 &&
        <ul className={classes.posts}>
          {posts.map((post, index) => {
            return (
              <Post key={index} author={post.author} body={post.body} />
            )
          })}
        </ul>}
      {!isFetching && posts.length === 0 &&
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      }
      {
        isFetching && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <p>Loading posts...</p>
          </div>
        )
      }
    </>
  )
}
