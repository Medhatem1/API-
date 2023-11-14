import  { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = () => {
  const [data, setData] = useState([]);
  const [err,setErr]=useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')

      .then((res) => {
        setData(res.data);
      })
      
      .catch((err) => {
        setErr(err);
      });
  }, []); 

  return (
    <div className="user-list">
      <h1> List</h1>
      {data.map(user=>
        <div className='card'>
            <br />
            <h2>{user.username}</h2>
            <h3>Name:{user.name}</h3>
            <h4>email:{user.email}</h4>
            <p>{user.address.street} ,  {user.address.suite} , {user.address.city},  {user.address.zipcode}  , {user.address.lat}  , {user.address.lng}  </p>
<p><strong>phone number:</strong>{user.phone}</p>
<p><strong>
    website:
</strong>
{user.website}
</p>
<p><strong>Company:</strong>{user.company.name}</p>
<p>{user.company.catchPhrase}</p>
        {user.company.bs}
        </div>)}
    </div>
  );
};

export default UserList

