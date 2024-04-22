import { lazy, Suspense } from 'react'
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

import { Routes, Route , Navigate} from 'react-router-dom'

const Content = () => {
    return(
        <Suspense fallback={<p>Loading...</p>}>
         <Routes>
             <Route path='/' element={<Home />}/>
             <Route path='/about' element={<About />}/>
             <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>
         </Suspense>
    )
}

export default Content