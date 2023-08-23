import React, { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router,Routes, Route,Link} from "react-router-dom"
const List = (props) => {
    const[Function,setFunction] = useState({sort:"",value:"title",search:""})
    function setdeletevalue(e,index){
        e.stopPropagation()
        let data = props.data.filter((item,indx)=>indx !=index)
        props.setData(data)
    }
    function setsortValue(e){
        setFunction({...Function,sort:e.target.value})
    }
    function setsearchvalue(e){
        setFunction({...Function,search:e.target.value})
    }
    function setSearchvalue(e){
        setFunction({...Function,value:e.target.value})
    }
    let filter
    Function.value==="title"?filter = props.data.filter((item,index)=>item.title.toLowerCase().includes(Function.search)):filter = props.data.filter((item)=>item.description.toLowerCase().includes(Function.search))
    if(Function.sort==="duedate"){
      let a =props.data.sort((a,b)=>new Date(a.duedate)-new Date(b.duedate))
      console.log(a)
    }
    else{
      props.data.sort((a,b)=>a.priority.localeCompare(b.priority))
    }
    return (
    <div className='header'>
    <Navbar></Navbar>
    <div className='listvalues'>
      <h1>ListBlock:</h1>
      <div className="operations">
        <div className="sort">
          <label htmlFor="">Sort:</label>
          <select name="" id="" value ={Function.sort} onChange={setsortValue}>
            <option value="priority">priority</option>
            <option value="duedate">duedate</option>
        </select>
        </div>
        <div className="searchby">
          <label htmlFor="">SearchBy:</label>
          <select name="" id="" value={Function.value} onChange={setSearchvalue}>
            <option value="title">title</option>
            <option value="description">decription</option>
        </select>
        </div>
        <div className="search">
          <label htmlFor="">Search: </label>
          <input type="text" name="" id="" value={Function.search} onChange={setsearchvalue}/>
        </div>
      </div>
      <table>
      <tr className='maintable'>
        <th>Title: </th>
        <th>Description: </th>
        <th>Priority: </th>
        <th>Due-Date: </th>
        <th>operation:</th>
      </tr>
      {filter.map((item,index)=>{
        return(
        <tr className='tr'>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>{item.duedate}</td>
            <td><td><button onClick={(e)=>setdeletevalue(e,index)}>delete</button></td>
            <td><Link to={`/edit/${item.id}`}><button>Edit</button></Link></td></td>
        </tr>
        )
      })}
      </table>
    </div>
    </div>
  )
}

export default List
