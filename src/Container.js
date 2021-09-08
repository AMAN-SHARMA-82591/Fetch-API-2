import React, { useEffect, useState } from 'react';
import './App.css';
function Container(){
    const [user,setUser] = useState([]);
    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        setUser(await response.json());
    }
    useEffect(() => {
        getUser();
    },[])

    return(
        <div>
                {/* {
                    user.map((i) => {
                        return(
                            <div key={i.id}>

                            </div>
                        )
                    })
                } */}
                <div className="main-container">
                    <div className="cont-text">
                        <p style={{margin:'0px'}}>Todos</p>
                        <div>
                            <button>S</button>
                            <input placeholder="Search"></input>
                        </div>
                    </div>
                    <table className="todo-table">
                        <tr>
                            <th>Todo Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
        </div>
    )
}
export default Container