import { useLoaderData, useParams, useNavigate } from 'react-router-dom';

const EditPlayerPage = () => {
    const player = useLoaderData();
  return (
    <div>{player.FirstName} {player.LastName}</div>
  )
}

export default EditPlayerPage