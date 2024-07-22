//import { useParams } from 'react-router-dom';

import {useState} from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';

const JobPage = () => {
    const {id} = useParams();
    const job = useLoaderData();
    const [loading, setLoading] = useState(true);

/******** Using useEffect to get data with a fetch ******/
//   const {id} = useParams();
//   const [job, setJob] = useState(null);

//   useEffect(() => {
//       const fetchJobs = async () => {
//           try {
//           const res = await fetch(`/api/jobs/${id}`);
//           const data = await res.json();
//           setJob(data);
//           } catch (error) {
//               console.log("Error fetch data ", error);
//           } finally {
//               setLoading(false);
//           } 
//     }

//     fetchJobs();
//   }, [])

  return <><h1>{job.title}</h1><p>{job.description}</p></>
};

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

//JobPage is default, and exporting jobLoader as well.
export {JobPage as default, jobLoader};