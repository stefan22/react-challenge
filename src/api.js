import fetch from 'isomorphic-fetch'
const URL = 'https://api.github.com/search/repositories'
/*
 *  @fn fetchPopularRepos
 *  Returns objects array
 */
export function fetchPopularRepos(language = 'all') {
  const encodedURI = encodeURI(
    `${URL}?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )

  return fetch(encodedURI)
    .then(data => data.json())
    .then(repos => repos.items)
    .catch(err => {
      console.log(err)
    })
}
