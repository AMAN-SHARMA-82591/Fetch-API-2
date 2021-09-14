import React, { useEffect, useState } from 'react';

const Form = ({click}) => {
    const [data,setData] = useState([])

    const getForm = async () => {
        const newRes = await fetch('https://jsonplaceholder.typicode.com/comments');
        setData( await newRes.json());
   }

//    console.log(data.filter(value => value.postId === click+1))
   useEffect(() => {
    getForm();
    },[click])

    return(
        <div  className="form-section">
         <h2>User Details</h2>
            {
                data.filter(value => value.postId === click+1)
                .map(value => {
                    return(
                        <div className="form-items-filtered" key={value.id}>                          
                            <div className="form-details">
                                <div>
                                    <h3>Post ID</h3>
                                    <p>{value.postId}</p>
                                </div>
                                <div>
                                    <h3>User ID</h3>
                                    <p>{value.id}</p>
                                </div>
                                <div>
                                    <h3>Name</h3>
                                    <p>{value.name}</p>
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>{value.email}</p>
                                </div>
                                <div>
                                    <h3>Body</h3>
                                    <p>{value.body}</p>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            

        </div>
    )
}
export default Form