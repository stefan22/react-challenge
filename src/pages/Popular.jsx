import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPopularRepos } from '../api.js'
import SkeleLoader from '../components/loader'

export default function Popular() {
  const { id } = useParams()
  const [repos, setRepos] = useState(undefined)
  const [loading, setLoading] = useState(true)

  const fetchNewRepos = useRef(!repos)

  useEffect(() => {
    if (fetchNewRepos.current && loading) {
      fetchPopularRepos(id).then(rps => {
        setRepos(rps)
        setLoading(false)
      })
    }
  }, [id, loading])

  if (loading === true) {
    return (
      <div className="loader">
        <SkeleLoader title="Loading..." />
      </div>
    )
  }

  return (
    <ul className="grid">
      {repos?.map(({ name, owner: { login }, stargazers_count, html_url }, i) => (
        <li key={name}>
          <h2>#{i + 1}</h2>
          <h3>
            <a
              target="_blank"
              href={html_url}
            >
              {name}
            </a>
          </h3>
          <p>by @{login}</p>
          <p>{stargazers_count?.toLocaleString()} stars</p>
        </li>
      ))}
    </ul>
  )
}
