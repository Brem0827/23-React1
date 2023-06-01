import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-component";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
`;

const Container = styled.p`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props){
    const {} = props;

    const navigate = useNavigate();

    return(
        <Wrapper>
            <Container>
                <Button 
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList 
                    post={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}
export default MainPage;