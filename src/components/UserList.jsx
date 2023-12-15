
import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react";
import SingleUser from "./SingleUser";

const UserList = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
       const response =  await axios.get('https://randomuser.me/api/?results=4')
        setUsers(response.data.results)
    }


    useEffect(()=>{
        fetchUsers()
    }, [])

    return (
       <div>
           <ul  className={"user-list"}>
               {users.map((user, index)=>(
                   <li><SingleUser user={user} key={index}/></li>
               ))}
           </ul>
       </div>
    )

}
export default UserList
