import SquareLoader from 'react-spinners/SquareLoader'

const override = {
    display: 'block',
    margin: '100px auto',
  }
  
const Spinner = ( {loading} ) => {
  return (
    <SquareLoader
        color="#E31837"
        loading={loading}
        cssOverride={override}
        size={50}
    />
  )
}

export default Spinner