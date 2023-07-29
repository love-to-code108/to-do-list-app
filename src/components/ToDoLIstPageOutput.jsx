// CSS
import { useState } from "react"
import "../css/toDoListPageOutput.css"

export const ToDoListPageOutput = (props) => {

    
    const [statusOfTask, setstatusOfTask] = useState("none");

    

    // FUNCTION FOR MARKING THE TASK AS COMPLETED
    const completedTask = () => {
        // TO CHANGE THE STATE TO COMPLET 
        // setstatusOfTask("line-through");

        // TO SWITCH BETWEEN STATES

        setstatusOfTask(statusOfTask === "none" ? "line-through" : "none");
    }
    


    return (
        <div className="toDoListPageOutput">
            <button className="mar-x pad-all" onClick={() => props.deleteTask(props.id)}>Delete</button>
            <button className="mar-x pad-all" onClick={completedTask}>Completed</button>
            <p style={{textDecoration: statusOfTask}}>{props.task}</p>
        </div>
    );
}