import React from 'react';
import './Posts.css';
import { Link } from 'react-router-dom';

const Posts = ({post}) => {
    const {id, title,body}=post;
    return (
        <div className='post-classname'>
            <h2>Title:{title}</h2>
            <p> <small>Detail: {body}</small></p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Posts;