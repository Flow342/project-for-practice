import React from "react";
import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const Postitem = (props) => {
    const router = useNavigate();
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                justifyItems: "center",
            }}
            className="post"
        >
            <div style={{ justifyItems: "right" }} className="post__item">
                <div style={{ paddingLeft: "20px" }} className="id">
                    <strong>
                        {props.number + 1}. {props.post.title}
                    </strong>
                </div>
                <p className="desc">{props.post.body}</p>
            </div>
            <div style={{ textAlign: "right", display: "flex" }}>
                <MyButton
                    style={{ marginRight: "10px" }}
                    onClick={() => router(`/posts/${props.post.id}`)}
                >
                    open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    delete
                </MyButton>
            </div>
        </div>
    );
};

export default Postitem;
