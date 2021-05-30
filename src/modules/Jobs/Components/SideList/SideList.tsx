import React from 'react';


const SideList = (props: any) => {
    console.log({ props })
    return (
        <div className='side__list--wrapper'>
            <div className='side--list'>
                <h2 className='side__list--header'>{props.header}</h2>
                {props.children}
            </div>
        </div>

    );
}

export default SideList;
