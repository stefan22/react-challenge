import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import routes from './routes'
import SkeleLoader from './components/loader'
import NotFound from './pages/NotFound'
import './styles/styles.css'

const Main = () => (
  <>
    <div className="top-border"></div>
    <div className="container">
      <Navbar />
      <React.Suspense fallback={<SkeleLoader />}>
        <Routes>
          {routes?.map(({ id, path, component: Component }) => (
            <Route
              key={id}
              path={path}
              element={<Component />}
            />
          ))}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </React.Suspense>
    </div>
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Main />
  </Router>
)
