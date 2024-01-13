import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import SingleUser from './Component/SingleUser'
import "./Component/style.scss"
import Products from './Component/Products'
import Users from './Component/Users'
import Todo from './Component/Todo'
import Photos from './Component/Photos'
import Albums from './Component/Albums'
import Comments from './Component/Comments'
import Posts from './Component/Posts'
import Menu from './Component/Menu'
import UserForm from './Component/UserForm'
export default function App() {
  return (
    <div className='app_menu'>

      <div className='app_sidebar'>
        <div className='sidebar'>
          <Menu/>
        </div>

        <div className='app_header'>
          <div className="sigle_row1 ">
            <h3>Nuxt Dojo Merge</h3>
          </div>

          <div className='route'>
            <Routes>  
              <Route path='/' element={<Products />} />
              <Route path='user_form' element={<UserForm />} />
              <Route path='sengle_user/:id' element={<SingleUser />} />
              <Route path='users' element={<Users />} />
              <Route path='todo' element={<Todo />} />
              <Route path='photos' element={<Photos />} />
              <Route path='albums' element={<Albums />} />
              <Route path='comments' element={<Comments />} />
              <Route path='posts' element={<Posts />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  )
}
