import React, { useState } from 'react';
import TransitionPageButton from '../UI/TransitionPageButton';

const ShowReposController = (props) => {
    const [showRepos, setShowRepos] = useState(false);

    const showReposHandler = () => {
        setShowRepos((prevState) => !prevState);
    };

    let showReposContent;
    if (showRepos) {
        showReposContent = (
            <TransitionPageButton
                text={`Ocultar repositorios de ${props.user}`}
                onClick={showReposHandler}
                path=""
            />
        );
    } else {
        showReposContent = (
            <TransitionPageButton
                text={`Ver repositórios de ${props.user}`}
                onClick={showReposHandler}
                path="repos"
            />
        );
    }

  return (
    <>
        {showReposContent}
    </>
  )
}

export default ShowReposController