import { useState } from "react";

// TO DO LIST OUTPUT
import { ToDoListPageOutput } from "./ToDoLIstPageOutput";

// CSS INPUT HERE
import "../css/ToDoLIstPageInput.css"

export const ToDoListPageInput = () => {

    const [taskArray, settaskArray] = useState([])
    const [indivisualTask, setindivisualTask] = useState("");


    const creatingToDoList = (event) => {
        setindivisualTask(event.target.value);
    }

    // START OF THE TO DO FUNCTION 
    const addToDo = () => {


        // THE OBJECT THAT IS TO BE APPENDED
        const IndivisualtaskObj = {

            id: taskArray.length === 0 ? 0 : taskArray.length,
            taskValue: indivisualTask,
        }



        settaskArray([...taskArray, IndivisualtaskObj]);

        document.getElementById("Input").value = "";


        console.log(taskArray);
    }
    // END OF THE TO DO FUNCTION 



    // FUNCTION FOR DELETING THE ASSIGNED TASK
    const deleteTask = (Id) => {
        
        settaskArray( taskArray.filter((arrElement) => {
            if(arrElement.id === Id){
                console.log("False");
                return false;
            }else{
                console.log("True");
                return true;
            }
        }))
    }





    return (
        <div className="ToDoListPageInputDiv">


            {/* THE BEGINING LINE */}
            <p>This Is A To Do List App</p>


            {/* BASIC FORM TEMPLATE */}
            <div>
                <input id="Input" type="text" onChange={creatingToDoList} />
                <button onClick={addToDo}>Add Task</button>
            </div>


            {/* PRINTING THE ARRAY IN THE SCREEN */}
            {taskArray.map((value) => {
                return (
                    <ToDoListPageOutput task={value.taskValue} id={value.id} deleteTask={deleteTask} />
                );
            })}




        </div>
    );
}