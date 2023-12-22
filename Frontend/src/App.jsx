// import { useState } from 'react'


// function App() {


//   return (
//     <>
//       <p className='text-6xl'>Abhishek sharma</p>
//     </>
//   )
// }

// export default App

import Enroll from "./Components/Enroll";
import Navbar from "./Components/Navbar";
import Newsection from "./Components/Newsection";
import Newsection1 from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Together from "./Components/Together";
import Login from "./Components/Login";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import Joka from "./Components/Joka";


function App() {



  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Newsection />} />
          <Route path="/Home/Enroll" element={<Enroll />} />
          <Route path="/newsection1" element={<Newsection1 />} />
          <Route path="/work" element={<Together />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todoList" element={<AddTodo />} Component={<Todos />} />

        </Routes>
        <AddTodo />
        <Todos />
        <Joka />
      </Router >
    </>
  );
}

export default App;