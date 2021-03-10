import React, {useState, useLayoutEffect} from 'react'

const AddTasks = ({addTasks}) => {

  const [taskName, setTaskName] = useState("")

  const [value, setValue] = useState("")

  const [category, setCategory] = useState({
    important : true,
    urgent : true
  })

  const handleNameChange = e => {
    setTaskName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
      addTasks(taskName, category.important, category.urgent)
      setTaskName("")
  }

  const handleChangeCategory = e => {

    setValue(e.target.value)

    if (e.target.value === "importantEtUrgent") {
      setCategory({important : true, urgent : true})
    }
    else if (e.target.value === "pasImportantEtUrgent") {
      setCategory({important : false, urgent : true})
    }
    else if (e.target.value === "importantEtPasUrgent") {
      setCategory({important : true, urgent : false})
    }
    else if (e.target.value === "pasImportantEtPasUrgent") {
      setCategory({important : false, urgent : false})
    }
  }

  return (
    <nav>
    <p> task name :</p>
    <form onSubmit={handleSubmit} className="addTaskForm" >
      <input className="addTaskNameInput" type="text" value={taskName} onChange={handleNameChange} />
      <p>task category :</p>
      <select name="category" value={value} onChange={handleChangeCategory} >
        <option value="importantEtUrgent"> important and urgent </option>
        <option value="pasImportantEtUrgent" > not important and urgent </option>
        <option value="importantEtPasUrgent" > important and not urgent </option>
        <option value="pasImportantEtPasUrgent"> not important and not urgent </option>
      </select>
      <button className="nav-button">Submit</button>
    </form>
    </nav>
  )
}

export default AddTasks
