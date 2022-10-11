import { useQuery, gql } from '@apollo/client'

const HEADING = gql`
  query GetHead {
    heading {
      data {
        attributes {
          header
        }
      }
    }
  }
`

const Main = () => {
  const { loading, error, data } = useQuery(HEADING)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>
  console.log(data)

  return (
    <>
      <a className="new" href="#">
        <span role="button" className="new-btn">
          New!
        </span>
        <p>some text...green yellow</p>
      </a>

      <h1>{data.heading.data.attributes.header}</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui
        corrupti aperiam at, facilis velit officiis explicabo cum temporibus
        provident quo! A nam debitis rem tempora. Praesentium, veniam? Ad,
        nulla.
      </h2>
    </>
  )
}
export default Main
