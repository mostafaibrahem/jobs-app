import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import JobDetails from './modules/Jobs/Components/JobDetails/JobDetails';
import JobSearchWrapper from './modules/Jobs/Components/JobSearchWrapper/JobSearchWrapper';
import JobsWrapper from './modules/Jobs/Components/JobsWrapper/JobsWrapper';
import SiteNav from './modules/Jobs/Components/SiteNav/SiteNav';
import SkillDetails from './modules/Jobs/Components/SkillDetails/SkillDetails';
import { setSearchHistory } from './modules/Jobs/store/actions';
import './stylesheets/css/style.css';

const App = () => {
  const dispatch = useDispatch()
  let jobsModule = useSelector((state: RootStateOrAny) => state.jobs)
    let searchText = jobsModule.searchText
  //@ts-ignore
  let localSearchHistory = localStorage.getItem('searchHistory')?JSON.parse(localStorage.getItem('searchHistory')):[]
  useEffect(()=>{
    dispatch(setSearchHistory(localSearchHistory))
  },[])
  return (
    <BrowserRouter>
      <SiteNav />
      <Route exact path='/' component={JobsWrapper} />
      <Route path={`/Search`} component={JobSearchWrapper} />
      <Route path={`/Search?query=${searchText}`} component={JobSearchWrapper} />
      <Route path='/job/:uuid' component={JobDetails} />
      <Route path='/skill/:uuid' component={SkillDetails} />
    </BrowserRouter>
  );
}
/* ?query=${searchText} */
export default App;
