import React, {useState, useEffect, useRef} from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';


export default function UserList() {
  const [userList, setUserList] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{
    let isMounted = true;
    const controller = new AbortController(); //used to cancel pending request

    const getUsers = async () =>{
      try{
        const response = await axiosPrivate.get('/users', {
          singal: controller.signal
        });
        console.log(response.data)
        isMounted && setUserList(response.data)
      } catch(error){
        console.log(error)
        navigate('/login', {state: {from: location}, replace: true})
      }
    }

    getUsers();


    return ()=>{ //runs as component unmounts
      isMounted = false;
      controller.abort();
    }
  },[])

  return (
    <>
    <article>
      <h2>Users List:</h2>
      {userList?.length
        ? (
          <ul>
            {userList.map((user, i) => <li key={i}>{user.username}</li>)}
          </ul>
        )
        : (
          <p>No users!</p>
        )
      }
    </article>
    
    </>
  )
}

