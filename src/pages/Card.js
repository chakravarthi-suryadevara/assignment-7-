import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Cards</h1>
      <div className="card-container">
        {data.length > 0 ? (
          data.map((user) => (
            <div key={user.id} className="card">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Card;
