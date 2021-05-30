
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../shared';
import { fetchSkillDetails, fetchSkillRelatedJobs, fetchSkillRelatedSkills } from '../../store/actionCreators';
import SideList from '../SideList/SideList';


const SkillDetails = () => {
    let jobsModule = useSelector((state: RootStateOrAny) => state.jobs)
    let skillRelatedJobs = jobsModule.skillRelatedJobs
    let skillRelatedSkills = jobsModule.skillRelatedSkills
    let skillDetails = jobsModule.skillDetails
    interface ParamTypes {
        uuid: string
    }
    const { uuid } = useParams<ParamTypes>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSkillRelatedJobs(uuid))
        dispatch(fetchSkillRelatedSkills(uuid))
        dispatch(fetchSkillDetails(uuid))
        scrollToTop()
    }, [uuid])
    return (
        <div className='job__details--wrapper container'>
            <div className='bg-light-gray'>
                <h1>{skillDetails.skill_name}</h1>
            </div>

            <div className='job__search--wrapper'>
                <div className='jobs__list--wrapper '>
                    <div className=' bg-white related__skills--wrapper'>
                        <h4>Description:</h4>
                        <p>{skillDetails.description}</p>
                        <h4>Related Jobs:</h4>
                           {skillRelatedJobs.jobs && skillRelatedJobs.jobs.map((jobItem: any) => {
                            return (
                                <div className='skill__item--wrapper'>
                                    <h4>{jobItem.job_title}</h4>
                                    <div className='skill-details'>
                                        <span><b>Importance :</b> <span>{jobItem.importance}</span></span>
                                        <span><b>Level :</b> <span>{jobItem.level}</span></span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <SideList header={'Related Skills'}  > 
                {skillRelatedSkills.skills && skillRelatedSkills.skills.map((item: any) => {
                        return (
                            <div>
                               • <Link key={item.uuid} to={`/skill/${item.uuid}`}>{item.skill_name}</Link>
                            </div>
                        )
                    })}
                </SideList>
            </div>
        </div >

    );
}

export default SkillDetails;
