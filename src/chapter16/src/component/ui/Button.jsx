import React from "react";
import styled from "styled-component";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radiusL 8px;
    cursor: pointer;
`;

function Button(props){
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
}

export default Button;