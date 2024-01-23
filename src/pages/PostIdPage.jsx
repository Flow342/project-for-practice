import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetching } from "../hooks/useFethcing";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import CommsItem from "../components/CommsItem";
import MyButton from "../UI/button/MyButton";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostAndCommsById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
        const comRespons = await PostService.getCommentsById(params.id);
        setComments(comRespons.data);
    });
    const router = useNavigate();

    useEffect(() => {
        fetchPostAndCommsById(params.id);
    }, []);
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <MyButton
                        onClick={() => router(`/posts`)}
                        style={{ fontSize: "20px" }}
                    >
                        &#8592;
                    </MyButton>
                    <div>
                        <h1>
                            {post.id} . {post.title}
                        </h1>
                        <div>{post.body}</div>
                        {comments.map((comment, index) => (
                            <CommsItem key={index} com={comment} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostIdPage;
