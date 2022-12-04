import React from 'react';
import { getRepos } from '../util/api'

const Repos = () => {
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