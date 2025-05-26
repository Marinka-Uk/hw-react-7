import { render } from "@testing-library/react";
import React from "react"



export class TaskList extends React.Component{
 static tasks = [
    { id: 1, text: 'Вивчити React' },
    { id: 2, text: 'Прочитати статтю про useEffect' }
  ];

inputRef = React.createRef()

addTask = ()=>{
    const text = this.inputRef.current.value.trim()
    if (text) {
      const newId = TaskList.tasks.length ? TaskList.tasks[TaskList.tasks.length - 1].id + 1 : 1;
      TaskList.tasks.push({ id: newId, text });
      this.inputItem.current.value = '';
      this.forceUpdate();
    }

}

deleteTask = (id)=>{
    TaskList.tasks = TaskList.tasks.filter(task=>task.id !== id)
    this.forceUpdate();
}


}

render(){
  return(
    <div>
<h1>Список завдань</h1>
<input type="text" ref={this.inputRef} placeholder="Нове завдання."/>
 <button onClick={this.addTask}>Додати</button>
<ul>
  
</ul>

    </div>
  )
}

