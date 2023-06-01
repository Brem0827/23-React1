import React from "react";
import styled from "styled-component";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-item: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props){
    const { comment } = props;

    return(
        <Wrapper>
            {CommentList.map((comment, index) => {
                return <CommentListItem key={comment.id} comment={comment} />
            })}
        </Wrapper>
    );
}

export default CommentList;