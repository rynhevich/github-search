import React, { useState, memo } from 'react';
import Header from '../header/header.js';
import MainPage from '../main-page/main-page.js'
import FeedCard from '../feed-card/feed-card.js';
import GithubService from '../../services/github-service.js';

import './app.css';

const MAX_CARDS_ON_PAGE = 4;

export const DataContext = React.createContext();

const githubService = new GithubService();

const App = () => {
  const [userLoading, setUserLoading] = useState(false);
  const [reposLoading, setReposLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(null);
  const [paginateTitle, setPaginateTitle] = useState(null);
  const [feedListElements, setFeedListElements] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setUserLoading(true);
    githubService.getUser(event.target[0].value)
      .then((user) => {
        setUser(user);
        setUserLoading(false);
        const NumberOfPages = Math.ceil(user.reposNumber / MAX_CARDS_ON_PAGE);
        setNumberOfPages(NumberOfPages);
      })
      .then(event.target[0].value = '')
      .catch(() => {
        setUser(false);
        setUserLoading(false);
      });
  };

  const handlePaginate = ({ selected }) => {
    setReposLoading(true);

    githubService.getRepos(user.reposURL, selected + 1, MAX_CARDS_ON_PAGE)
      .then((repos) => {
        setPaginateTitle(renderPaginateTitle(selected, repos.length));
        setFeedListElements(renderFeedList(repos));
        setReposLoading(false);
      })
      .catch(() => {
        setUser(false);
        setReposLoading(false);
      });
  };

  const handleLinkClick = (url) => {
    window.open(url);
  };

  const renderFeedList = (repos) => {
    return repos.map(repo => <FeedCard 
      repoURL={repo.repoURL}
      repoTitle={repo.repoTitle}
      repoDescription={repo.repoDescription}
      key={repo.repoId} 
      handleLinkClick={handleLinkClick}/>)
  }

  const renderPaginateTitle = (selectedPage, reposLength) => {
    const firstSelectedPage = selectedPage * MAX_CARDS_ON_PAGE + 1;
    const lastSelectedPage = selectedPage * MAX_CARDS_ON_PAGE + reposLength;

    if (firstSelectedPage === lastSelectedPage) {
      return `${firstSelectedPage} of ${user.reposNumber} items`;
    }

    return `${firstSelectedPage}-${lastSelectedPage} of ${user.reposNumber} items`;
  };

  return (
    <div className='app-container'>
      <DataContext.Provider value={{
        userLoading,
        reposLoading,
        user,
        numberOfPages,
        feedListElements,
        paginateTitle,
        handleSubmit,
        handlePaginate,
        handleLinkClick,
      }}
      >
        <Header />
        <MainPage />
      </DataContext.Provider>
    </div>
  );
};

export default memo(App);
