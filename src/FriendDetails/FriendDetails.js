import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
      const firend = useLoaderData();
      

    return (
        <div>
            <h1>Friends About : {firend.name}</h1>
            <p>Call Him/Her: {firend.phone}</p>
            <h2>Every thing You need to Know About This Person </h2>
        </div>
    );
};

export default FriendDetails;