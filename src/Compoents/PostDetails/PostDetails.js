import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const post = useLoaderData();
     const {id,title,body,userId } = post;
     const navigate = useNavigate();
     const handleClick =()=>{
          navigate(`/friend/${userId}`)
     } 
    return (
        <div className='Post-Details'>
            <h2>Details About Posts: {id}</h2>
            <h3>Title: {title}</h3>
            <p>Details: {body}</p>
            <button onClick={handleClick}>Get The Author</button>
        </div>
    );
};

export default PostDetails;