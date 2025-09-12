import React from "react";

const TodoItem = function (props) {
    return (
        <li className="list-none">
            <span className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                   { props.comleted ? <></> : <input type="checkbox" />}
                    <p>{props.text}</p>
                </div>
                <p>....</p>
            </span>
        </li>
    )
}

export default TodoItem;