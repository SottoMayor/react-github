import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getRepos } from '../util/api'

const Repos = () => {
  const reposData = useLoaderData()
  const parsedRepositories = JSON.parse(reposData?.repositories);
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