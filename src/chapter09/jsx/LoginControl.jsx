import React from "react";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn
                ? <LogoutButton onClick={handleLoginClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    )
}