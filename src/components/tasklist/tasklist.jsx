import React from "react";
import './tasklist.css';
import Button from '../button/button';


function TaskList ({ task, remove, ...props }) {
    const className = 'task ' + (task.done ? 'task-done' : '');
    return (
        <div className={className}>
            <input
                className='checkbox'
                type='checkbox'
                onClick={ () => props.doneTask() }

            />
            <div className='task-button-wrapper'>
                <span>{task.title}</span>
                <Button
                    name='Remove'
                    customClass='tasklist-button'
                    onClick={ () => remove(task.title) }
                />
            </div>

        </div>
    )
}

export default TaskList;