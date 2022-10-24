import { useState } from "react"
import axios from "axios"

const Home = () => {
  // const initialState = {
  //   query: ``
  // }

  const [formState, setFormState] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let res = await axios.get(`http://localhost:3001/recipes/${formState}/find`, formState)
    setFormState(res.data)
    console.log(res.data)
  }

  const handleChange = (event) => {
    setFormState(event.target.value)
  }

  return (
    <div className="home">
      <h1>Recipe Crafter</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Search for a recipe..."
          value={formState}
          type="text"
          id="query"
        />
        <button type="submit">Submit</button>
      </form>
      <div></div>
    </div>
  )
}

export default Home