import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
    list: any
}

const Tags = (props: Props) => {
    return (
        <div className='skill__tags--wrapper'>
            {props.list && props.list.map((item: any, index: number) => {
                if (index < 6) {
                    return (
                        <Link key={item.skill_uuid} className='tag__item--wrapper' to={`/skill/${item.skill_uuid}`}> {item.skill_name}</Link>
                    )
                }
                else return null

            })}
        </div>

    );
}

export default Tags;
