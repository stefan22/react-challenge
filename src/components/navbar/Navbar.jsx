import React from 'react'

const languages = [
  {
    name: 'All',
    param: 'all',
  },
  {
    name: 'JavaScript',
    param: 'javascript',
  },
  {
    name: 'Node',
    param: 'node',
  },
  {
    name: 'NextJS',
    param: 'nextjs',
  },
  {
    name: 'React',
    param: 'react',
  },
]

export const Navbar = () => (
  <nav>
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <a href={`/popular/${param}`}>{name}</a>
        </li>
      ))}
    </ul>
  </nav>
)
