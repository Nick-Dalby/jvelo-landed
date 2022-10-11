import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const POSTS = gql`
  query GetPosts {
    posts {
      data {
        id
        attributes {
          title
          body
          publishedAt
        }
      }
    }
  }
`

const Blog = () => {
  const { loading, error, data } = useQuery(POSTS)
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>

  return (
    <div className="posts">
      {data.posts.data.map((post) => (
        <div key={post.id} className="post">
          <Link to={`/blog/${post.id}`}>
            <h2>{post.attributes.title}:</h2>
          </Link>
          
          <ReactMarkdown>{post.attributes.body.substring(0, 150) + '...'}</ReactMarkdown>
          <Link to={`/blog/${post.id}`}>read more</Link>
        </div>
      ))}
    </div>
  )
}
export default Blog
