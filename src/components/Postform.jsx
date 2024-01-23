import React from "react";
import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Postform = ({ create }) => {
    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({ title: "", body: "" });
    };

    return (
        <form style={{ textAlign: "center" }} className="form">
            <div>
                <MyInput
                    placeholder="Заголовок"
                    value={post.title}
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                />
            </div>
            <div>
                <MyInput
                    value={post.body}
                    placeholder="Описание"
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                />
            </div>
            <div>
                <MyButton className="ButtonClasses.myBtn" onClick={addNewPost}>
                    Создать пост
                </MyButton>
            </div>
        </form>
    );
};

export default Postform;
