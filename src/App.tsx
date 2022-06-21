import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query{
      lessons {
      stage
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <>
      <h1 className="text-2x">Hello World</h1>
      <ul>
        {data?.lessons.map(lesson => {
          return <li>{lesson.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
