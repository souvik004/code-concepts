import React, { useEffect, useState } from 'react'

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {

    const res = fetch(`https://jsonplaceholder.typicode.com/users`, options)
                .then(res => res.json())
  }, [])
  
  return (
    <div>

    </div>
  )
}

export default App