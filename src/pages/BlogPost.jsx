import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { PortableText } from '@portabletext/react'

const sanityPost = gql`
query GetPost($id: ID!) {
  Post(id: $id) {title, publishedAt, bodyRaw}
  }
`

const BlogPost = () => {
  const location = useLocation()
  const id = location.state

  const { loading, error, data } = useQuery(sanityPost, {
    variables: { id: id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>


  return (
    <div className="blog-post">
      <h1>{data.Post.title}:</h1>
      <PortableText value={data.Post.bodyRaw}/>
      <span className="date">
        <p>
          {new Date(data.Post.publishedAt).toLocaleString(
            'de-DE',
            'short'
          )}
        </p>
      </span>
    </div>
  )
}
export default BlogPost
