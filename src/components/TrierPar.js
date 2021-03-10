import React, {useState, useLayoutEffect} from 'react'
import * as moment from 'moment'


const TrierPar = () => {

  moment.locale('fr')

  const todayDate = moment().format('DD/MM/YYYY')

  const [date, setDate] = useState(todayDate)

  const [dateValidation, setDateValidation] = useState(false)

  const [value, setValue] = useState("Day")

  const dateRegex = /^[0-9]{2}\/[0-1][0-9]\/2[0-1][0-9]{2}$/

  useLayoutEffect(() => {
      if (dateRegex.test(date)){
        setDateValidation(true)
      } else {
        setDateValidation(false)
      }

  }, [date])

  const handleChangeDate = e => {
    setDate(e.target.value)
  }

  const handleChangeDateSelect = e => {
    setValue(e.target.value)
  }

  const printDate = () => {
    if (!dateValidation){
      return (
        <>
          <p>{date}</p>
          <input className="dateInput" value={date} onChange={handleChangeDate}  />
          <p style={{color : "#c175d7"}}> format : dd/mm/yyyy </p>
        </>
      )
    } else {
      return (
        <>
        <p>{date}</p>
        <input className="dateInput" value={date} onChange={handleChangeDate}  />
        </>
      )
    }
  }

  return (
    <>
    <p> from </p>
      {printDate()}
      <p> Sort by : </p>
       <select name="Date" value={value} onChange={handleChangeDateSelect} >
          <option value="Day">Day</option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
       </select>
       <p>Sort by {value}</p>
    </>
  )
}

export default TrierPar
