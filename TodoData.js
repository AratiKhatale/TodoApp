import { useState } from "react";
import TodoListIteams from "./TodoListIteams";


function TodoData(){
      const [iteams, setIteams] = useState('');
      const [data, setData] = useState([]);

      let inputData = e => setIteams(e.target.value);
      let submitData = () => {
        setData(e => [...e, iteams]); 
        setIteams('') 
    };

      const deleteIteam = (id) => {
        console.log('delete');

        setData((e) => {
          return e.filter((data, index) => index !== id)
        })
     }

    return(
        <div className="TodoList">
            <h1>Todo List</h1>
            <input type='text' placeholder="Enter Iteams" onChange={inputData}/>
            <button id="Add" onClick= {submitData}>Add</button>
             <ul>
               { data.map((e, index) => 
               <TodoListIteams 
                id={index}
                text={e}
                key={index}
                onSelect={deleteIteam}
                 />)}
            </ul>
        </div>
    )
}

export default TodoData;