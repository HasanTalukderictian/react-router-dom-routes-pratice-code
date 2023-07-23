import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Compoents/Posts/Posts';

const Post = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <div>
            <h3>A lot od Fb post here !!</h3>

            {
                post.map(post => <Posts 
                key={post.id}
                post={post}></Posts>)
            }
        </div>
    );
};

export default Post;