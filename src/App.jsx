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

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
    <Route index element={<Homepage/>} />
    <Route path="/jobs" element={<JobsPage/>} />
    <Route path="/add-job" element={<AddJobPage/>} />
    <Route path="/jobs/:id" element={<SingleJobPage/>} loader={jobLoader} />
    <Route path="*" element={<NotFound/>} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App