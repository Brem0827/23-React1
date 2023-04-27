import React from "react";

function Toggle(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    function handleClick(){
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return(
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}