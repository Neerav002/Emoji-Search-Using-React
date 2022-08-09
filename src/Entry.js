import React from "react";

function Entry(props) {
    return (
        <div className="emoji">
        {props.emoji}
        {props.name}
        </div>
    );
}

export default Entry;