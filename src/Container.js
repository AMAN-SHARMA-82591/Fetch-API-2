import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import Form from './Form';
function Container(){
    //input text section
    const [input,setInput] = useState("");
    //fetch data from api
    const [user,setUser] = useState([]);
    //index of the data
    const [click,setClick] = useState(0);
    //sorting on data
    const [sort,setSort] = useState(true);


    //fetching data from link and storing it in setUser state
    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        setUser(await response.json());
    }

    //rendering
      useEffect(() => {
        getUser();
        },[])



    return(
        <div className="container-section">
               
                <div className="main-container">
                    <div className="cont-text">
                        <h2 style={{margin:'0px'}}>Todos</h2>
                        <div className="search-bar-cont">
                            <button><SearchIcon fontSize="small" /></button>
                            <input onChange={(e) => setInput(e.target.value)} placeholder="Search"></input>
                        </div>
                    </div>
                    <table className="todo-table">
                        <thead>
                            <tr className="todo-main-cont">
                                <th style={{cursor:"pointer"}} onClick={() => setSort(!sort)}>Todo Id</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                        {/* using map and filter method in show and hide data from api */}
                            <tr className="todo-cont-item">
                                {
                                    user.filter(todo => input === "" ?todo: ("completed").includes(input) ? todo.completed === true : ("incompleted").includes(input) ? todo.completed !== true  : todo.id.toString().includes(input.toString()))
                                    .sort((a,b) => sort? a.id - b.id : b.id - a.id)
                                    .map((todo) =>{
                                        return(
                                            <React.Fragment key={todo.id}>
                                                <td style={{paddingLeft:"15px"}}>{todo.id}</td>
                                                <td style={{paddingRight:"15px"}}>{todo.title}</td>
                                                <td>{todo.completed === true?"Complete":"Incomplete"}</td>
                                                <td onClick={() => setClick(todo.id-1)} className="todo-view-cont"><button>View User</button></td>
                                           
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tr>

                        </tbody>
                       
                    </table>
                </div>

                
                {/* Form Container */}
                <div className="form-container">
                                   <Form user={user} click={click} />
                </div>
        </div>
    )
}
export default Container