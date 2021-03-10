import React, {useEffect, useState} from 'react'
import * as moment from 'moment'

const PrintTasks = ({type, tasks, handleDelete}) => {

  const [sortedTasks, setSortedTasks] = useState([])

  let tempSortedTasks = []

  let tasksToPrint = []

  async function sortTasks() {
    if(type === "importantEtUrgent") {
          tasks.forEach( task => task.important & task.urgent && tempSortedTasks.push( task ))
    }
    else if ( type === "pasImportantEtUrgent" ) {
          tasks.forEach( task => !task.important & task.urgent && tempSortedTasks.push( task ))
    }
    else if (type === "importantEtPasUrgent") {
        tasks.forEach( task => task.important & !task.urgent && tempSortedTasks.push( task ))
    }
    else if (type === "pasImportantEtPasUrgent") {
        tasks.forEach( task => !task.important & !task.urgent && tempSortedTasks.push( task ))
    }
  }

  useEffect(() => {
    sortTasks()
    setSortedTasks(tempSortedTasks)
  }, [tasksToPrint])

  return (
    <ul>
      { sortedTasks.map( task =>
         <li>
           {task.title} 
           <button className="task-del" onClick={() => handleDelete(task.id)}> Delete </button>
         </li>
         ) 
      }
    </ul>
  )
}

export default PrintTasks
