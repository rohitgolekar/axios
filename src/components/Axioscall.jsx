import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Axioscall() {
    const [state, setstate] = useState([]);
    const [data, setData] = useState({
        title : '',
        body : ''
    })

    const handleChange = (e) => {
        setData({...data, [e.target.id]:e.target.value})
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log(response.data);
            setstate(response.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const addUser = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", {data}).then(response =>{
            console.log(response.data);
        })

        setData({title: "", body: ""});
    }

    return (
        <>

            <div className="container bg-warning" style={{ boxShadow: "2px 2px 10px" }}>
                <div className="row my-5 p-4 text-center">
                    <h4 className="col-md-8 mx-auto text-center bg-dark text-warning py-2" style={{ boxShadow: "2px 2px 10px" }}>Add Student</h4>
                    <div className="col-md-8 mx-auto mb-2" style={{ backgroundColor: "darkslategray", boxShadow: "2px 2px 10px" }}>
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4">
                                <input type="text" name="title" id="title" value={data.title} onChange={handleChange} className="form-control bg-transparent text-white" placeholder="Enter Title" />
                            </div>
                            <div className="col-md-4">
                                <input type="text" name="body" id="body" value={data.body} onChange={handleChange} className="form-control bg-transparent text-white" placeholder="Enter Body" />
                            </div>
                        </div>
                        <button className="btn btn-warning my-3" onClick={addUser} >Add User</button>
                    </div>

                    <div className="col-md-8 mx-auto" style={{ backgroundColor: "currentcolor", boxShadow: "2px 2px 10px" }}>
                        <table className="table table-bordered text-white mt-2">
                            <thead>
                                <tr>
                                    <th className="text-info" scope="col">Title</th>
                                    <th className="text-info" scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.map((item, id) => (
                                        <tr key={id}>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Axioscall
