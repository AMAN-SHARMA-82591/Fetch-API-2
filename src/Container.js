import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
function Container(){
    const [input,setInput] = useState("");
    const [user,setUser] = useState([]);
    console.log(input);
    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        setUser(await response.json());
    }
    useEffect(() => {
        getUser();
    },[])

    return(
        <div>
               
                <div className="main-container">
                    <div className="cont-text">
                        <h2 style={{margin:'0px'}}>Todos</h2>
                        <div className="search-bar-cont">
                            <button><SearchIcon fontSize="small" /></button>
                            <input onChange={(e) => setInput(e.target.value)} placeholder="Search"></input>
                        </div>
                    </div>
                    <table className="todo-table">
                        <tr className="todo-main-cont">
                            <th>Todo Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        
                        <tr className="todo-cont-item">
                            {
                                user.map((todo) =>{
                                    return(
                                        <React.Fragment key={todo.id}>
                                            <td style={{paddingLeft:"15px"}}>{todo.id}</td>
                                            <td style={{paddingRight:"15px"}}>{todo.title}</td>
                                            <td>{todo.completed === true?"Complete":"Incomplete"}</td>
                                            <td className="todo-view-cont"><button>View User</button></td>
                                           
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tr>
                    </table>
                </div>
        </div>
    )
}
export default Container