import React from 'react';
import '@site/src/css/todo.css';

export default function ToDo({children, label}) {
    if (!children) return null;

    return (
        <span className="todo-container">
            <span className="todo-label">{label || 'TODO'}</span>
            <div className="todo-tooltip">{children}</div>
        </span>
    );
}
