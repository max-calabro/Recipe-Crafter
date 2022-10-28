import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Home = (props) => {
  const navigate = useNavigate()

  const [formState, setFormState] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()

    let res = await axios.get(`http://localhost:3001/recipes/${formState}/find`, formState)
    setFormState(res.data)
    props.selectRecipe(res.data[0])
    
    navigate(`/recipes/${res.data[0]._id}`)
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