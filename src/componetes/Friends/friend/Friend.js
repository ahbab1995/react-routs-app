import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id,name,username} = props.friend;
    const nevigate = useNavigate()
    const showFriendDetail = ()=>{
        nevigate ('/friend/' + id)
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>Id No: {id}</h4>
            <button onClick={showFriendDetail}>{username}</button>
        </div>
    );
};

export default Friend;