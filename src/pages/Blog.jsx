import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { PortableText } from '@portabletext/react'


const sanityPosts = gql`
  query getPosts {
    allPost {
      title
      _id
      slug {
        current
      }
      excerptRaw
    }
  }
`

const Blog = () => {
  const { loading, error, data } = useQuery(sanityPosts)
  console.log(data);

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>

  return (
    <div className="posts">
      {data.allPost.map((post) => (
        <div key={post.slug.current} className="post">
          <Link to={`/blog/${post.slug.current}`} state={post._id}>
            <h2>{post.title}:</h2>
          </Link>
          <PortableText value={post.excerptRaw} />
          <Link to={`/blog/${post.slug.current}`} state={post._id}>read more</Link>
        </div>
      ))}
    </div>
  )
}
export default Blog
