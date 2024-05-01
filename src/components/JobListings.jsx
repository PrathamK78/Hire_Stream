import {React , useEffect, useState} from 'react'
import JObList from './JObList.jsx'
import Spinner from './Spinner.jsx';

const JobListings = ({isHome = false}) => {
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

   
    useEffect(()=>{
      const fetchJobs = async () => {
        const apiURL = isHome ? '/api/jobs?_limit=3' : 'api/jobs';
        try{
          const response = await fetch(apiURL);
          const data = await response.json();
          setJobs(data);
        }catch(err){
            console.log('Error fetching data', err);
        }finally{
          setLoading(false);
        }
      }
      fetchJobs();
    },[]);
     //have to have an empty array as the second argument to avoid infinite loop
  return (
    <>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Jobs" : "Browse Jobs"}
        </h2>
        
          {loading ? <Spinner loading={loading}/> : 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                jobs.map((job)=>(
                    <JObList job={job} key={job.id}/>
                ))
          }
          </div>   
          }
      </div>
    </section>
    </>
  )
}

export default JobListings