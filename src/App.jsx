import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './pages/Main'
import Work from './pages/Work'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="work" element={<Work />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="blog/:id" element={<BlogPost />} />

          {/* catch all */}
          <Route path="*" element={<Navigate to='/' replace/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
