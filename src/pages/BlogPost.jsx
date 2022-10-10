import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BlogPost = () => {
  const { id } = useParams()
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/posts/${id}`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>

  return (
    <div className="blog-post">
      <h1>{data.data.attributes.title}:</h1>
      <p>{data.data.attributes.body}</p>
      <span className="date">
        <p>
          {new Date(data.data.attributes.publishedAt).toLocaleString(
            'de-DE',
            'short'
          )}
        </p>
      </span>
    </div>
  )
}
export default BlogPost
