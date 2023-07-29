
// COMPONENTS 
import { ToDoListPageInput } from "../components/ToDoLIstPageInput";
import { ToDoListPageOutput } from "../components/ToDoLIstPageOutput";

// CSS

export const ToDoListPage = () => {



    return(
        <div>
            <p>This Is A To Do List App</p>
            <ToDoListPageInput/>
            <ToDoListPageOutput/>
        </div>
    );
}