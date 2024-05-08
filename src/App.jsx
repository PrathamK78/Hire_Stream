import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import SingleJobPage,{jobLoader} from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'


const App = () => {
  // Add a new job to the server
  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete a job from the server
  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    });
    return;
  };

  // Update a job on the server
  const updateJob = async(job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Homepage/>} />
      <Route path="/jobs" element={<JobsPage/>} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path="/jobs/:id" element={<SingleJobPage deleteJob={deleteJob}/>} loader={jobLoader} />
      <Route path="/edit-job/:id" element={<EditJobPage updatedJobSubmit={updateJob}/>} loader={jobLoader} />
      <Route path="*" element={<NotFound/>} />
    </Route>
    )
  );
  return <RouterProvider router={router}/>
}

export default App