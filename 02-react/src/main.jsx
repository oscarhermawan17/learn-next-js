import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './routes/RootLayout'
import NewPost, { action as newPostAction } from './routes/NewPost'
import Posts, { loader as postsLoader } from './routes/Posts'
import PostDetails, { loader as postDetailsLoader } from './components/PostDetails'

import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children: [{
      path:'/',
      element: <Posts />,
      loader: postsLoader,
      children: [{
        path:'/create-post',
        element: <NewPost />,
        action: newPostAction
      }, {
        path:'/:id',
        element: <PostDetails />,
        loader: postDetailsLoader
      }]
    }]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
