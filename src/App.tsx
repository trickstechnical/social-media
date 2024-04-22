import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/DashboardLayout'

function App() {
   const router = createBrowserRouter([
      {
        path:'*',
        element: <Layout/>
      }
   ]);

  return (
     <>
      <RouterProvider router={router}/>
     </>
  )
}

export default App
