import React, {useEffect,useState} from 'react'
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>setUsers(res.data))
            .catch((err) => console.log(err));
      
    }, []);
  return (
    <div className='card'>
        {users.map((user) =>(
            <div className='cardlist'>
                <div className='title'><span>Name :</span> {user.name}</div>
                <div className='subtitle'> <span>UserName :</span> {user.username}</div>
                <div className='adress'> <span>Adress :</span> {user.address.city}</div>
                <div className='gmail'> <span>Email :</span> {user.email}</div>

            </div>



        ))
        }
        </div>
  )
}

export default UserList