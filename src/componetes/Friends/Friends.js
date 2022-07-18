import React, {useEffect, useState} from 'react';
import Friend from './friend/Friend';

const Friends = () => {
    const [friends, setfriends] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setfriends(data))
    } , [])
    return (
        <div>
            <h5>Friends page.{friends.length}</h5>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;