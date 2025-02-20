import React from 'react'
import { Routes, Route } from "react-router";
import Layout from './layout';

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='/login' element={<p>Login Screen</p>} />
          <Route path='/logout' element={<p>logout Screen</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;