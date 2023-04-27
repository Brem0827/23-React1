import React from "react";

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}


/*
function UserGreeting(props){
    return <h1>다시 오셨군요!</h1>
}

function GuestGreeting(props){
    return <h1>회원가입을 해 주세요</h1>
}
*/