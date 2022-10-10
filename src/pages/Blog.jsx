import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Blog = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/api/posts')

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>

  return (
    <div className='posts'>
      {data.data.map((post) => (
        <div key={post.id} className="post">
          <Link to={`/blog/${post.id}`}><h2>{post.attributes.title}:</h2></Link>
          <p>{post.attributes.body.substring(0,150)}...</p>
          <Link to={`/blog/${post.id}`}>read more</Link>
        </div>
      ))}
    </div>
  )
}
export default Blog
