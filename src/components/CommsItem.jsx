import React from "react";

const CommsItem = (props) => {
    return (
        <div
            style={{
                border: "2px solid teal",
                margin: "10px",
                maxWidth: "500px",
            }}
        >
            <h3>
                {props.com.name}, {props.com.email}
            </h3>
            {props.com.body}
        </div>
    );
};

export default CommsItem;
