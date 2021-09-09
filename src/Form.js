import React, { useEffect, useState } from 'react';

const Form = ({click,user}) => {
    const [data,setData] = useState([])

    const getForm = async () => {
        const newRes = await fetch('https://jsonplaceholder.typicode.com/users');
        setData( await newRes.json());
   }

//    Checking if values is undefined
   let update = data[click] ? data[click] : [];
   let userUpdate = user[click] ? user[click] : [];
   
   useEffect(() => {
    getForm();
    },[click])

    return(
        <>
            <div className="form-section">
                <h2>User Details</h2>
                
                <div className="form-details">
                    <div>
                        <h3>Todo ID</h3>
                        <p>{userUpdate.id}</p>
                    </div>
                    <div>
                        <h3>Todo Title</h3>
                        <p>{userUpdate.title}</p>
                    </div>
                    <div>
                        <h3>User ID</h3>
                        <p>{update.id}</p>
                    </div>
                    <div>
                        <h3>Name</h3>
                        <p>{update.name}</p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p>{update.email}</p>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Form