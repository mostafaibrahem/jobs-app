import React from 'react';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
interface Props {
    item: {
        normalized_job_title: string,
        uuid: string,
        related_skills: any
    }
}

const Card = (props: Props) => {

    return (
        <div className='job__item--wrapper'>
            <h2 className='job-title'>{props.item.normalized_job_title}</h2>
            <p>Related Skills:</p>
            <Tags list={props.item.related_skills && props.item.related_skills.skills} />
            <Link to={`/job/${props.item.uuid}`}>View job details</Link>
        </div>

    );
}

export default Card;
