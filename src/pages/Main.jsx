import { useQuery, gql } from '@apollo/client'
import { PortableText } from '@portabletext/react'
import { Link } from 'react-router-dom'

const Pages = gql`
  query getPages {
    allPage {
      title
      bodyRaw
    }
  }
`

const Page = gql`
  query getPage($id: ID!) {
    Page(id: $id) {
      title
      bodyRaw
    }
  }
`

const components = {
  marks: {
    // open links in new tab based on 'blank' flag
    link: ({ value, children }) => {
      return value.blank ? (
        <a href={value.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={value.href}>{children}</a>
      )
    },
  },
}

const Main = () => {
  const id = `b2dbb05b-150d-4e8b-bd17-85dd06f2e72a`
  const { loading, error, data } = useQuery(Page, {
    variables: { id: id },
  })

  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>

  return (
    <>
      <Link to='/blog' className="new" href="#">
        <span role="button" className="new-btn">
          New!
        </span>
        <p>check out the blog</p>
      </Link>
      <div className='main-body'>

        <PortableText value={data.Page.bodyRaw} components={components} />
      </div>
    </>
  )
}
export default Main
