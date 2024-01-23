import React from "react";
import Postitem from "./Postitem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Postlist({ posts, remove, editPost }) {
    if (!posts.length) {
        return (
            <h1
                style={{
                    textAlign: "center",
                }}
            >
                Постов пока что нет!
            </h1>
        );
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Список новостей</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Postitem remove={remove} number={index} post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default Postlist;
