import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
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

const BlogPost = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(POST, {
    variables: { id: id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>

  console.log(data)

  return (
    <div className="blog-post">
      <h1>{data.post.data.attributes.title}:</h1>
      <ReactMarkdown>{data.post.data.attributes.body}</ReactMarkdown>
      <span className="date">
        <p>
          {new Date(data.post.data.attributes.publishedAt).toLocaleString(
            'de-DE',
            'short'
          )}
        </p>
      </span>
    </div>
  )
}
export default BlogPost
