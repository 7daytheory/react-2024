import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';

const JobPage = () => {
  const {id} = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchJobs = async () => {
          try {
          const res = await fetch(`/api/jobs/${id}`);
          const data = await res.json();
          console.log(data);
          setJob(data);
          } catch (error) {
              console.log("Error fetch data ", error);
          } finally {
              setLoading(false);
          } 
    }

    fetchJobs();
  }, [])
  return (
    loading ? <Spinner /> : <h1>Job</h1>
  )
}

export default JobPage;