import React, { useState, useEffect } from "react"
import axios from 'axios'

interface IPost {
  body: string
  id: number
  title: string
  userId: number
}

interface IUpdatePost {
  title: string
}

function App() {
  const [data, setData] = useState<IPost[]>([])
  const [updateData, setUpdateData] = useState("")
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const apiUrl = async () => {
      setLoading(true)
      const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
      // Use Axios to make an HTTP GET request
      setData(posts.data)
      setLoading(false)
    }
    apiUrl()
  }, [])
  console.log(data)

  // Function to update a date item 
  const updateDataItem = async (id: number, updateData: IUpdatePost) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updateData)
      // Use Axios to make an HTTP PUT request
      console.log('data from update api ', response.data)
      
    } catch (error) {
      console.error('Try again next time: ', error)
    }
  }

  return (
    <>
      <h1>Sample Axios Request in React</h1>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.title}
                <button onClick={() => updateDataItem(item.id, { title: "New Title" })}>Update</button>
              </li>
            ))}
          </ul>
        )
      }
    </>
  )
}

export default App


// .then(response => {
//   // Handle the response
//   console.log(props.title)
//   console.log("Putting new data has been completed: " + response)
// })
// .catch(error => {
//   // Handle errors
//   console.error("Try again next time: " + error)
// })