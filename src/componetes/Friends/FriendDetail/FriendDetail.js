import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams()
    return (
        <div>
            <h4>This is Friend Details.{friendId}</h4>
        </div>
    );
};

export default FriendDetail;