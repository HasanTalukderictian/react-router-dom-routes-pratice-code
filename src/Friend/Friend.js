import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend);
    const {id,name,company,email,phone,username } =friend;

    return (
        <div className='Friend'>
            <h2>Name: {name}</h2>
             <p>Email :{email}</p>
             <p>Company: { company.name}</p>
             <p>Phone: {phone}</p>
             <p><small>UserName: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;