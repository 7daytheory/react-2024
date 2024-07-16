import SquareLoader from 'react-spinners/SquareLoader'

const override = {
    display: 'block',
    margin: '100px auto',
  }
  
const Spinner = ( {loading} ) => {
  return (
    <SquareLoader
        color='#333'
        loading={loading}
        cssOverride={override}
        size={50}
    />
  )
}

export default Spinner