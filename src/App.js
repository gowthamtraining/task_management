import './App.css';
import { BrowserRouter as Router,Routes, Route,Link, Navigate} from "react-router-dom"
import Data from "./components/Data"
import List from "./components/List"
import Edit from "./components/Edit"
import { useEffect, useState } from 'react';
import Navbar from './components/Header';
import "./components/Data.css"
function App() {
  const [task,SetTask] = useState(getItem())
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(task))
  },[task])
  function getItem(){
    let item = localStorage.getItem('list')
    if(item){
      return JSON.parse(item)
    }
    else{
      return []
    }
  }
  console.log(task)
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Navbar></Navbar>}></Route>
        <Route path='/add' element ={<Data setData = {SetTask} data ={task}></Data>}/>
        <Route path='/list' element={<List data = {task} setData ={SetTask}></List>}></Route>
        <Route path='/edit/:Id' element={<Edit data = {task}></Edit>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
