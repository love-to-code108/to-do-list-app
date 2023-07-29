import { useState } from "react";
import "../css/ToDoLIstPageInput.css"

export const ToDoListPageInput = () => {


    const [indivisualTask, setindivisualTask] = useState();



    return(
        <div className="">
            <input type="text" />
            <button>Add Task</button>
        </div>
    );
}