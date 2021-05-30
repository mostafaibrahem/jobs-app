import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../store/actionCreators';
import Card from '../Card/Card';
import SearchInput from '../SearchInput/SearchInput';

const JobsWrapper = () => {
    const dispatch = useDispatch()
    const [pagination, setPagination] = useState({ offset: 0, limit: 12 })
    let jobsModule = useSelector((state: RootStateOrAny) => state.jobs)
    let jobs = jobsModule.jobs
    let jobsLoading = jobsModule.jobsLoading
    let jobsError = jobsModule.jobsError

    const endOfscreen = () => {
        window.onscroll = function(ev:any) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setPagination({offset:pagination.offset+12,limit:12})
            }
        };
    }

    useEffect(() => {
        endOfscreen()
    }, [])

    useEffect(() => {
        dispatch(fetchJobs(pagination))
    }, [pagination])

    if (jobsError) return <p>Error </p>
    return (
        <div className='container'>
            <SearchInput />
            <h3>{`All Jobs (${jobs.length})`}</h3>
            <div className='jobs__list--wrapper'>
                {jobs.map((item: { normalized_job_title: string, uuid: string, related_skills: any }) => (
                    <Card key={item.uuid} item={item} />
                ))}
            </div>
            {jobsLoading&& <p>loading ...</p>}
        <div id='box'></div>            
        </div>

    );
}

export default JobsWrapper;
