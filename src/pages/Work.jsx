import { useQuery, gql } from '@apollo/client'
import { PortableText } from '@portabletext/react'

const Page = gql`
  query getPage($id: ID!) {
    Page(id: $id) {
      title
      bodyRaw
    }
  }
`

const Work = () => {
  const id = `7011d78c-5f23-4f03-b77b-8208a0f8fcbe`
  const { loading, error, data } = useQuery(Page, {
    variables: { id: id },
  })

  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>
  return (
    <>
      <div className="new" >
        <span role="button" className="new-btn">
          Work!
        </span>
        <p>all work and no play...</p>
      </div>

      <PortableText value={data.Page.bodyRaw}  />

    </>
  )
}
export default Work