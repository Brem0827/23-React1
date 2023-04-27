import React from "react";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLoginClick} />;
    }else{
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}