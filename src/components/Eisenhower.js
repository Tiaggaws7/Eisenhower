import React, {useState} from 'react'
import PrintTasks from './PrintTasks'
import AddTasks from './AddTasks'
import { v4 as uuid } from 'uuid';


const Ein = () => {

  const [tasks, setTasks] = useState(
    [ { id : uuid(), title : "important and urgent", important: true, urgent : true},
      { id : uuid(), title : "not important and urgent", important: false, urgent : true },
      { id : uuid(), title : "important and not urgent", important: true, urgent : false },
      { id : uuid(), title : "not important and not urgent", important: false, urgent : false }]
    );

    const addTasks = (title, important, urgent, endDate) => {
      const id = uuid()
      setTasks([...tasks, {id, title, important, urgent, endDate}])
    }


    const handleDelete = (id) => {
      const tasksCopy = tasks.slice()
      const index = tasksCopy.findIndex(task => 
        task.id === id
        )
      tasksCopy.splice(index, 1)
      setTasks([...tasksCopy])
    }

  return (
    <>
        <AddTasks addTasks={addTasks} />
        <table>
        <tr>
          <td> </td>
          <th> Important </th>
          <th> Not Important </th>
        </tr>

          <tr>
            <th> Urgent </th>
            <td> <PrintTasks handleDelete={handleDelete} tasks={tasks} type="importantEtUrgent" /> </td>
            <td> <PrintTasks handleDelete={handleDelete} tasks={tasks} type="pasImportantEtUrgent" /> </td>
          </tr>
          <tr>
            <th> Not Urgent </th>
            <td> <PrintTasks handleDelete={handleDelete} tasks={tasks} type="importantEtPasUrgent"/> </td>
            <td> <PrintTasks handleDelete={handleDelete} tasks={tasks} type="pasImportantEtPasUrgent" /> </td>
          </tr>
        </table>
    </>
  )
}

export default Ein
