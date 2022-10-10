import useFetch from "../hooks/useFetch"

const Main = () => {

  const { loading, error, data } = useFetch('http://localhost:1337/api/heading')

  if (loading) return <p>Loading...</p>
  if (error) return <p>error :(</p>


  return (
    <>
      <a className="new" href="#">
        <span role="button" className="new-btn">
          New!
        </span>
        <p>some text...green yellow</p>
      </a>

      <h1>{data.data.attributes.header}</h1>
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
