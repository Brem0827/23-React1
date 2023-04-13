import React, { useState, useEffect } from "react";

function Counter(props){
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }

    useEffect( () => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if (isOnline === null){
        return "대기 중...";
    }

    return isOnline ? "온라인" : "오프라인";
}

export default Counter;