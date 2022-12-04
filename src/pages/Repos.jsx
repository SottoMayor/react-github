import React from 'react';
import { useLoaderData, useMatches } from 'react-router-dom';
import { getRepos } from '../util/api'

const Repos = (props) => {
  console.log(props)

  const matches = useMatches()
  console.log(matches)
  const reposData = useLoaderData()
  console.log(reposData)

  return (
    <div>Repos</div>
  )
}

export const reposLoader = ({params}) => {
  console.log(params);

  const { username } = params;

  return getRepos(username);
}

export default Repos