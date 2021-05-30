
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../shared';
import { fetchRelatedJobs, fetchRelatedSkills } from '../../store/actionCreators';
import SideList from '../SideList/SideList';


const JobDetails = () => {
    let jobsModule = useSelector((state: RootStateOrAny) => state.jobs)
    let relatedSkills = jobsModule.relatedSkills
    let relatedJobs = jobsModule.relatedJobs
    interface ParamTypes {
        uuid: string
    }
    const { uuid } = useParams<ParamTypes>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRelatedSkills(uuid))
        dispatch(fetchRelatedJobs(uuid))
        scrollToTop()
    }, [uuid])
    return (
        <div className='job__details--wrapper container'>
            <div className='bg-light-gray'>
                <h1>{relatedSkills.job_title}</h1>
            </div>

            <div className='job__search--wrapper'>
                <div className='jobs__list--wrapper '>
                    <div className=' bg-white related__skills--wrapper'>
                        <h4>related Skills:</h4>
                        {relatedSkills.skills && relatedSkills.skills.map((skillItem: any) => {
                            return (
                                <div className='skill__item--wrapper'>
                                    <h4>{skillItem.skill_name}</h4>
                                    <p>{skillItem.description}</p>
                                    <div className='skill-details'>
                                        <span><b>Type :</b> <span>{skillItem.skill_type}</span></span>
                                        <span><b>Importance :</b> <span>{skillItem.importance}</span></span>
                                        <span><b>Level :</b> <span>{skillItem.level}</span></span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <SideList header={'Related Jobs'} list={relatedJobs.related_job_titles} >
                    {relatedJobs.related_job_titles && relatedJobs.related_job_titles.map((item: any) => {
                        return (
                            <div>
                               • <Link key={item.uuid} to={`/job/${item.uuid}`}>{item.title}</Link>
                            </div>
                        )
                    })}
                </SideList>
            </div>
        </div >

    );
}

export default JobDetails;
